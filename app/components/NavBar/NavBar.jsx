import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import images from '../../assets';
import {Button} from "../index";
import './style.scss'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="icon">
          <Image src={images.mcatLogin} alt='icon image' width={40} height={40} quality={100} placeholder='blur'/>
          <span>
            Military cat
          </span>
        </div>
        <div className="navigation">
          <div className="home">HOME</div>
          <div className="info-buy">HOW TO BUY</div>
          <div className="about">ABOUT US</div>
          <div className="util">UTILITIES</div>
          <div className="why">WHY ROSHI</div>
        </div>
      </div>
      <div className="nav-right">
          <Button type='button' text='Buy Now' className='nav-button'/>
          <Image src={images.telegram} alt='telegram image' width={30} height={30} placeholder="blur" quality={100}/>
      </div>
    </nav>
  )
}

export default NavBar