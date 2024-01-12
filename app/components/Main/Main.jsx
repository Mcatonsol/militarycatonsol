import images from '@/app/assets';
import Image from 'next/image';
import React from 'react';
import {Button} from "../index";
import './styles.scss'

const Main = () => {
  return (
    <main>
        <div className="presale-is-live">
            <div className="left">
                <h2>
                    Presale Is Live 
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
    </main>
  )
}

export default Main