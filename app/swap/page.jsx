'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import images from '../assets';
import { Button } from '../components';
import './styles.scss'

const page = () => {
    const [testValue, setTestValue] = useState('');
    const [seeSwap, setSeeSwap] = useState(true);
  return (
    <>
    {seeSwap? <>
    <div className="first-nav"
            onClick={()=>setSeeSwap(false)}
    >
        <div className="icon">
          <Link href='/'>
            <Image src={images.mcatLogin} alt='icon image' width={65} height={65} quality={100} placeholder='blur'/>
            <span>
              MILITARY CAT
            </span>
          </Link>
        </div>
        <div className="trade">
            <Link href='/'>
                <Image src={images.fingerPrint} alt='icon image' width={17} height={17} quality={100}/>
                <span>
                Trade
                </span>
          </Link>
        </div>
        <div className="setting-img">
            <div className="img-cover">
                <Image src={images.setting} alt='icon image' width={22} height={22} quality={100}/>
            </div>
            <h6>
                Connect Wallet
            </h6>
        </div>
    </div>
    <div className="second-nav"
        onClick={()=>setSeeSwap(false)}
    >
        <div className="swap">
            <div className="img-covers">
                <Image src={images.swap} alt='icon image' width={20} height={20} quality={100}/>
            </div>
            <div className="swap-text">
                <h5>
                    Swap
                </h5>
                <h6>
                    The Best Price
                </h6>
            </div>
        </div>
        <div className="bridge">
            <div className="img-covers">
                <Image src={images.bridge} alt='icon image' width={17} height={17} quality={100}/>
            </div>
            <div className="bridge-text">
                <h5>
                    Bridge
                </h5>
                <h6>
                    Transfer Assets to Solana
                </h6>
            </div>
        </div>
        <div className="vote">
            <div className="img-covers">
                <Image src={images.vote} alt='icon image' width={20} height={20} quality={100}/>
            </div>
            <div className="vote-text">
                <h5>
                    Vote
                </h5>
                <h6>
                    Cast Lots
                </h6>
            </div>
        </div>
        <div className="game">
            <div className="img-covers">
                <Image src={images.game} alt='icon image' width={20} height={20} quality={100}/>
            </div>
            <div className="game-text">
                <h5>
                    Games
                </h5>
                <h6>
                    Have Fun & Earn
                </h6>
            </div>
        </div>
    </div>
    <div className="swap-box" 
            onClick={()=>setSeeSwap(false)}
    >
        <div className="box-head">
            <div className="left-img">
                <Image src={images.reload} alt='icon image' width={17} height={17} quality={100}/>
            </div>
            <div className="right">
                <div className="market">
                    <Image src={images.market} alt='icon image' width={17} height={17} quality={100}/>
                    <span>
                        Market
                    </span>
                </div>
                <div className="percent">
                    <span>
                        0.5%
                    </span>
                </div>
                <div className="setting">
                    <Image src={images.setting} alt='icon image' width={17} height={17} quality={100} />
                </div>
            </div>
        </div>
        <div className="input-container">
            <h6>
                You're paying
            </h6>
            <div className="input-cover">
                <div className="dollar-input">
                    <Image src={images.dollar} alt='icon image' width={20} height={20} quality={100}/>
                    <h5>
                        USDC
                    </h5>
                    <Image src={images.downArrow} alt='icon image' width={10} height={10} quality={100}/>
                </div>
                <input type='text' placeholder='0.00' name="" id="" value={testValue} onChange={(e)=>setTestValue(e.target.value)}
                />
            </div>
            <div className="swap-i">
                <div className="swap-inner">
                    <Image src={images.swap} alt='icon image' width={20} height={20} quality={100}/>
                </div>
            </div>
            <h6>
                To receive
            </h6>
            <div className="input-cover2">
                <div className="sol-input">
                    <Image src={images.solana} alt='icon image' width={20} height={20} quality={100} />
                    <h5>
                        SOL
                    </h5>
                    <Image src={images.downArrow} alt='icon image' width={10} height={10} quality={100}/>
                </div>
                <input type='text' placeholder='' name="" id="" value={testValue}
                onChange={(e)=>setTestValue(e.target.value)}
                />
            </div>
            <Button text='Connect Wallet' type='button' className='nav-button'
            style={{margin:"auto", display:'block'}}/>
        </div>
    </div>
    </> : <div className='blur'>
        <h1>
            Development In <i>Progress</i>
        </h1>
        <Button text='Go Back' type='button' className='nav-button'
            onClick={()=>setSeeSwap(true)}
            style={{marginTop:'2rem'}}
            />
    </div>
    }
    </>
  )
}

export default page