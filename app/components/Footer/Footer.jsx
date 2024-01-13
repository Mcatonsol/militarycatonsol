import React from 'react'
import './styles.scss'
import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets'
const Footer = () => {
  return (
    <footer>
        <div className="icons">
            <Link href='#hero'>
                <Image src={images.mcatLogin} alt='logo icon' width={100} height={110} placeholder='blur' className='footer-logo'/>
            </Link>
            <Link href='https://t.me/militarycatonsol'>
                <Image src={images.telegram} alt='telegram icon' width={105} height={115} placeholder='blur'/>
            </Link>
            <Link href='https://x.com/Mcatonsol?t=b6LLl01dTslslhsw7IWJTQ&s=09'>
                <Image src={images.twitter} alt='twitter icon' width={110} height={120} placeholder='blur'/>
            </Link>
        </div>
        <small>
            Copyright © 2024 MCAT. All Rights Reserved
        </small>
    </footer>
  )
}

export default Footer