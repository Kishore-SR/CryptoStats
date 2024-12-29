import React, { useEffect } from 'react'
import Chart from 'react-google-charts'
import { useState } from 'react'

export const LineChart = ({historicalData}) => {

  const[data, setData] = useState(["Date", "Prices"])

  useEffect(()=>{
    let dataCopy = [["Date", "Prices"]]
    if(historicalData.prices){
      historicalData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]]) //Getting Date(08/12 format) and price
      })
      setData(dataCopy);
    }
  },[historicalData])
  return (
<Chart
  chartType="AreaChart"
  data={data}
  height="100%"
  options={{
    hAxis: { title: "Date", textStyle: { fontSize: 12 }, titleTextStyle: { color: "#4CAF50"}  },
    vAxis: { title: "Price", textStyle: { fontSize: 12 }, titleTextStyle: { color: "#4CAF50"}},
    colors: ["#4285F4"],
  }}
/>


  )
}
