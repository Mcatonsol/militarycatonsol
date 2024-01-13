import React from 'react'
import './styles.scss'
import { Button, CardCounter } from '../index'
import Image from 'next/image'
import images from '../../assets';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
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
                Military cat(MCAT) is first of its kind and will play the role of the biggest memecoin on solana blockchain with different opportunities and utilities.
            </p>
        </div>
       <div id='hero' className='hero'>
        <div className="new-left">
            <h2>
                <span>M</span>CAT contract:
            </h2>
            <p>
                2jDFuYLchj6WfVjZQ5V8
                <br />
                rvB3Eni32keXivPabiDVergG
            </p>
            <Link href='https://solscan.io/token/2jDFuYLchj6WfVjZQ5V8rvB3Eni32keXivPabiDVergG'>
            <Button text='View on Solscan' className='nav-button' type='button'/>
            </Link>
            <h4>
                Max Supply 10billion MCAT
            </h4>
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
    </>
  )
}

export default Hero