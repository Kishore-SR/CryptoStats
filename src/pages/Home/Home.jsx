import React from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { useContext } from "react";

export const Home = () => {
    const {allCoin, currency} = useContext(CoinContext);
  return (
    <div className="home">
      <div className="hero">
        <h1>Track Cryptocurrency <br/>Prices and More</h1>
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
            <p style={{textAlign:"center"}}>24H Change</p>
            <p className="market-cap">Market Cap</p>
        </div>
      </div>
    </div>
  );
};
