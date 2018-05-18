import React from 'react'
import './Coin.scss'

import coin1 from './coin-1.svg'
import coin2 from './coin-2.svg'

export default function Coin() {
  return (
    <div className="confirm__coins">
      <div className="confirm__left-coin"><img src={coin1} alt="" /></div>
      <div className="confirm__right-coin"><img src={coin2} alt="" /></div>
    </div>
  )
}

