'use client'
import React, {useState} from 'react'
import './styles.scss'
import Image from 'next/image';
import Link from 'next/link';
import images from '../../assets';
import {Button} from "../index";
import { toast } from 'react-toastify'

const Footer = () => {
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(false);
    // input form validation function
    const handleChange = ()=>{
        if((!email.match(/[a-z]@gmail.com/) &&
        !email.match(/[a-z][0-9]@gmail.com/)) ||
      email.match(/[!-\-]|\/|[:-\?]|[\[-`]|[\{-~}]|\s/) ||
      email.length < 12){
            toast.error('invalid input',{
                position: 'top-right'
            })
        }
        else if(email.match(/[a-z][0-9]@gmail.com/) && email.length >= 12){
            toast.success('correct input',{
                position: 'top-right'
            })
            setValid(true);
        }
        else if(email.match(/[a-z]@gmail.com/) && email.length >= 12){
            toast.success('correct input',{
                position: 'top-right'
            })
            setValid(true);
        }
        setTimeout(() => {
            toast.dismiss()
            }, 4000);
    }
    // function to handle newsletter sign up button
    const handleSubmit = ()=>{
        if (valid){
            toast.success('Subscribed to Newsletter',{
                position: 'top-right'
            });
            setEmail("");
        }
        else{
            toast.error(("please fill in appropriate email"),{
                position : 'top-right'
            })
        }
         setTimeout(() => {
            toast.dismiss()
            }, 4000);
    }
  return (
    <footer>
            <div className="icons">
                <Link href='#hero'>
                    <Image src={images.mcatLogin} alt='logo icon' width={90} height={90} placeholder='blur' className='footer-logo'/>
                </Link>
                <Link href='https://t.me/militarycatonsol'>
                    <Image src={images.telegram} alt='telegram icon' width={95} height={97} placeholder='blur'/>
                </Link>
                <Link href='https://x.com/Mcatonsol?t=b6LLl01dTslslhsw7IWJTQ&s=09'>
                    <Image src={images.twitter} alt='twitter icon' width={110} height={115} placeholder='blur'/>
                </Link>
            </div>
            <div className="subscribe">
                <label htmlFor="subscribe">
                    Subscribe Our News Letter
                </label>
                <input type="text" name="email" placeholder='Enter Gmail Address' id="input" value={email}
                onChange={e=>setEmail(e.target.value)}
                onKeyUp={handleChange}
                />
                <Button text='Subscribe' type='button' className='nav-button'
                onClick={handleSubmit}/>
            </div>
            <small>
                Copyright © 2024 MCAT. All Rights Reserved
            </small>
    </footer>
  )
}

export default Footer