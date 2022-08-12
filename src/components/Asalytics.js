import React from 'react'
import bitcoin from '../img/bitcoin.jpg'

const asalytics = ({result}) => {
  return (
    <div className="asalytics-box" id="asalytics-box">
    <img src={bitcoin} alt="" />
      <p>{result.name}</p>
      <button className={result.available ? "available" : "unavailable"}>{result.available ? "Available" : "Unavailable"}</button>
    </div>
  )
}

export default asalytics