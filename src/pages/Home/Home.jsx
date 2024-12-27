import React from "react";
import "./Home.css";

export const Home = () => {
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
    </div>
  );
};
