import React, { useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { useContext } from "react";

export const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCount, setDisplayCount] = useState(10);

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

        <form>
          <input type="text" placeholder="Search crypto here..." />
          <button type="submit">Search</button>
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

        {allCoin?.slice(0, displayCount).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="coin" />
              <p>{item.name }</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "price-change green" : "price-change red"}
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
          </div>
        ))}

        {displayCount < allCoin?.length && (
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
