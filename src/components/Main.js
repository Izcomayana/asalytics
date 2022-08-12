import React from 'react'
import Asalytics from './Asalytics'

const main = ({results}) => {
  return (
    <div className='asalytics'>
      {
        results.map((result, i) => (
          <Asalytics key={i} result={result} />
        ))
      }
    </div>
  )
}

export default main
