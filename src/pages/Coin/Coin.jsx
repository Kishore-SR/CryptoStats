import React, { useContext } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { CoinContext } from '../../context/CoinContext';
import { LineChart } from '../../components/LineChart/LineChart';

export const Coin = () => {

  const {coinId} = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': import.meta.env.VITE_API_URL
      }
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  }

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_API_URL}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if(coinData && historicalData){
    return (
      <div className='coin'>
      <div className="coin-name">
        <img src={coinData.image.large} alt={coinData.name} />
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData}/>
      </div>
    </div>
  )
}
else{
  return (
  // Displaying Loading animation before fetching data
  <div className='spinner'> 
    <div className="spin"></div>
  </div>)
}
}
