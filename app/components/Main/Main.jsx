import images from '@/app/assets';
import Image from 'next/image';
import React from 'react';
import {Button, About, UtilitySection} from "../index";
import './styles.scss'

const Main = () => {
  return (
    <main>
        <div className="presale-is-live">
            <div className="left">
                <h2>
                    Presale Is <span>Live</span> 
                </h2>
                <h2>
                    Join MCAT Now
                </h2>
                <p>
                    MCAT is currently in its presale phase, giving you the opportunity to buy MCAT before the official launch. Join the MCAT community now and secure your place in the pack!
                </p>
                <Button type='button' text='Buy Now' className='nav-button'/>
            </div>
            <div className="right">
                <Image src={images.mcat2} alt='live image' width={430} height={450} placeholder='blur'/>
            </div>
        </div>
        <div className="buy" id='buy'>
            <div className="left">
                <h2>
                    How to buy <span>$mcat</span> presale
                </h2>
                <p>
                    Ready to dive into the MCAT revolution? Purchasing MCAT Presale is a breeze! Follow our simple steps to join the MCAT community:
                </p>
                <div className="box-container">
                    <div className="select">
                        <Image src={images.wallet} alt='' width={30} height={30}/>
                        <div>
                            <h4>
                                Select Wallet
                            </h4>
                            <p>
                                Choose your preferred Solana wallet to use for participating in the $MCAT presale.
                            </p>
                        </div>
                    </div>
                    <div className="choose">
                        <Image src={images.amount} alt='' width={40} height={40}/>
                        <div>
                            <h4>
                                Choose Amount
                            </h4>
                            <p>
                                Take charge and pick how much MCAT you want. (Min 0.25 SOL | Max 10 SOL)
                            </p>
                        </div>
                    </div>
                    <div className="click">
                        <Image src={images.buy} alt='' width={30} height={30}/>
                        <div>
                            <h4>
                                Click Buy Button
                            </h4>
                            <p>
                                After entering the amount you would like to invest, click on the buy button, and confirm the transaction on the Phantom wallet.
                                <br/>
                                Congratulations! You are now part of the MCAT presale, and you can see the balance of MCAT tokens on the website. Tokens will be airdropped to you when the presale is over.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                        <Image src={images.mcat5} alt='buy cat image' width={430} height={450}/>
            </div>
        </div>
        <About/>
        <UtilitySection/>
    </main>
  )
}

export default Main