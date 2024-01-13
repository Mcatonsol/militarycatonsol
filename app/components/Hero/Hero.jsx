import React from 'react'
import './styles.scss'
import { CardCounter } from '../index'
import Image from 'next/image'
import images from '../../assets'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <div className="left">
            <h4>
                don't expect me to say 
            </h4>
            <h4>
                "welcome" but <i>MEOW</i>
            </h4>
            <h1>
              <span>M</span>CAT
            </h1>
            <p>
                Military cat(MCAT) is the first of its kind and will play the role of the biggest memecoin on solana blockchain with different opportunities and utilities.
            </p>
        </div>
        <Image src={images.tokenomics} alt='tokenomics' className='tokenomics' width={400} height={400} placeholder='blur' />
        <div className="access">
            <h2>
                To get <span className='green'>Access</span> to $<span className='red'>M</span>CAT before launch, participate in our official presale.
            </h2>
            <p>
                NOTE: 90% of the Sol raised will be added to the liquidity pool at launch and all presale participants will receive their $MCAT before launch.
            </p>
        </div>
        <CardCounter/>
    </div>
  )
}

export default Hero