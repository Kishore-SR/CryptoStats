import React, { useState, useEffect, useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import "./Home.css";
import {Link} from 'react-router-dom'

export const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCount, setDisplayCount] = useState(10);
  const [input, setInput] = useState("");
  const [filteredCoins, setFilteredCoins] = useState(allCoin);

  // Filter coins based on input
  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  // Update the filtered coins list based on the input
  useEffect(() => {
    if (input === "") {
      setFilteredCoins(allCoin); 
    } else {
      const filtered = allCoin.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredCoins(filtered); 
    }
  }, [input, allCoin]);

  const loadMoreCoins = () => {
    setDisplayCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Track Cryptocurrency <br />
          Prices and More
        </h1>
        <p>
          Get real-time prices, 24-hour changes, market cap, and more for
          Bitcoin, altcoins, and other cryptocurrencies.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          <input
            onChange={inputHandler}
            value={input}
            type="text"
            placeholder="Search crypto here..."
          />
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {filteredCoins.length === 0 ? (
          <p className="error-message"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path></svg> No coins found. Please try again </p>
        ) : (
          filteredCoins.slice(0, displayCount).map((item, index) => (
            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="coin" />
                <p>{item.name}</p>
              </div>
              <p className="price">
                {currency.symbol} {item.current_price.toLocaleString()}
              </p>
              <p
                className={
                  item.price_change_percentage_24h > 0
                    ? "price-change green"
                    : "price-change red"
                }
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}{" "}
                {item.price_change_percentage_24h > 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
                  </svg>
                )}
              </p>
              <p className="market-cap">
                {currency.symbol} {item.market_cap.toLocaleString()}
              </p>
            </Link>
          ))
        )}

        {displayCount < filteredCoins.length && (
          <div className="view-more-container">
            <button className="view-more-button" onClick={loadMoreCoins}>
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
