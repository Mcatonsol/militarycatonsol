'use client'
import React, {useState} from 'react'
import './styles.scss'
import images from "../../assets"
import Image from 'next/image'
const CardCounter = () => {
    const [solAmount, setSolAmount] = useState('');
    const endDate  = new Date('Jan 18, 2024 00:00:00').getTime();
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    // counter function for days
     const counter = setInterval(() => {
        const now = new Date().getTime();
        const remaining = endDate - now;
        setDays(Math.floor((remaining / (1000 * 60 * 60 * 24))));
        setHours(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds((Math.floor((remaining % (1000 * 60)) / 1000)))

        if(remaining <= 0){
            clearInterval(counter);
            setDays('00');
            setHours('00');
            setMinutes('00');
            setSeconds('00');
        }
    }, 1000);
    
    
  return (
    <div className='counter' id='timer'>
        <h2>
            Presale Ends and Launch Happens In:
        </h2>
        <div className="values">
            <div className="days">
                <h1>{days}</h1>
                <h6>DAYS</h6>
            </div>
            <div className="hours">
                <h1>{hours}</h1>
                <h6>HOURS</h6>
            </div>
            <div className="minutes">
                <h1>{minutes}</h1>
                <h6>MINS</h6>
            </div>
            <div className="seconds">
                <h1>{seconds}</h1>
                <h6>SEC</h6>
            </div>
        </div>
        <div className="amount">
            <div className="input-cover">
                <input type="text" placeholder='Min 0.5 SOL | Max 15 SOL' name="sol-amount" id="" value={solAmount} onChange={(e)=>setSolAmount(e.target.value)}/>
                <Image src={images.solana} alt='solana image' width={20} height={20}/>
            </div>
            <small>
                Send your preferred amount of Sol to:
            </small>
            <h3>
                MILITARYCAT.SOL
            </h3>
        </div>
    </div>
  )
}

export default CardCounter