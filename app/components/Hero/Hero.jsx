import React from 'react'
import './styles.scss'
import { CardCounter } from '../index'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <div className="left">
            <h4>
                WELCOME TO
            </h4>
            <h1>
                <span>M</span>CAT
            </h1>
            <p>
                Military cat(MCAT) is the first of its kind and will play the role of the biggest memecoin on solana blockchain with different opportunities and utilities.
            </p>
        </div>
        <CardCounter/>
    </div>
  )
}

export default Hero