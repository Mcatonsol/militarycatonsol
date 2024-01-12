'use client'
import React, {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import images from '../../assets';
import {Button} from "../index";
import './style.scss'

const NavBar = () => {
  const [nav, setNav] = useState('hero');
  const toggleNav = (e)=>setNav(e.target.id)
  
  return (
    <nav>
      <div className="nav-left">
        <div className="icon">
          <Image src={images.mcatLogin} alt='icon image' width={65} height={65} quality={100} placeholder='blur'/>
          <span>
            MILITARY CAT
          </span>
        </div>
        <div className="navigation">
          <Link href='#hero' id='hero' className={`${nav === "hero"? "selected" : ""}`}
          onClick={toggleNav}>HOME</Link>

          <Link href='#buy' id='buy' className={`${nav === "buy"? "selected" : ""}`}
          onClick={toggleNav}>HOW TO BUY</Link>

          <Link href='#about'id='about' className={`${nav === "about"? "selected" : ""}`}
          onClick={toggleNav}>ABOUT US</Link>

          <Link href='#util' id='util' className={`${nav === "util"? "selected" : ""}`}
          onClick={toggleNav}>UTILITIES</Link>

          <Link href='#why' id='why' className={`${nav === "why"? "selected" : ""}`}
          onClick={toggleNav}>WHY MCAT</Link>
        </div>
      </div>
      <div className="nav-right">
          <Button type='button' text='Buy Now' className='nav-button'/>
          <Link href='https://t.me/militarycatonsol'>
          <Image src={images.telegram} alt='telegram image' width={40} height={40} placeholder="blur" quality={100}/>
          </Link>   
      </div>
    </nav>
  )
}

export default NavBar