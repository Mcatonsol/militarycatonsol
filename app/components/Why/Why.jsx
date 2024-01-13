import React from 'react'
import './styles.scss'
import Image from 'next/image'
import images from '../../assets'
const Why = () => {
  return (
    <div id='why' className='why'>
        <div className="left">
            <h2>
                Why Choose <span>M</span>CAT
            </h2>
            <ul>
                <li>
                    Join the Pack
                    <span>
                        Become part of the memecoin movement on Solana
                    </span>
                </li>
                <li>
                    First on Solana with Utilities
                     <span>
                      MCAT  stands out as the first memecoin on Solana with a range of utilities.
                    </span>
                </li>
                <li>
                    Movement Uniting Cat Lovers and Crypto Enthusiasts
                     <span>
                        MCAT bridges the gap between the love for cats and the world of cryptocurrency.
                    </span>
                </li>
                <li>
                    Solana's Pumping Trend
                     <span>
                        Solana's crazy growth and low transaction fees make it the ideal chain for MCAT.
                    </span>
                </li>
                <li>
                    OTHER MEMES ON SOL
                     <span>
                        Some memes on Solana with multi-million market caps include $BONK, $MYRO, $WIF, $SAMO.
                    </span>
                </li>
            </ul>
        </div>
        <div className="right">
            <Image src={images.catSecond} alt='cat image' width={470} height={470} placeholder='blur'/>
        </div>
    </div>
  )
}

export default Why