import Image from 'next/image'
import images from '../../assets'
import React from 'react'
import "./styles.scss"

const UtilitySection = () => {
  return (
    <div id='util' className='util'>
        <h2>
            MCAT Utilities
        </h2>
        <div className="button-cover">
            <div>
                <h4>
                    MCAT Swap
                </h4>
                <p>
                    A decentralized exchange for seamless MCAT transactions.
                </p>
            </div>
            <div>
                <h4>
                    MCAT Raffle
                </h4>
                <p>
                    Engage in exciting raffle events with MCAT tokens.
                </p>
            </div>
            <div>
                <h4>
                    Voting
                </h4>
                <p>
                    Participate in community decisions with the power of your MCAT
                </p>
            </div>
            <div>
                <h4>
                    Staking Pool
                </h4>
                <p>
                    Earn rewards by staking your MCAT tokens.
                </p>
            </div>
            <div>
                <h4>
                    MCAT Bridge
                </h4>
                <p>
                    MCAT with other blockchains for enhanced functionality.
                </p>
            </div>
            <div>
                <h4>
                    Mini Games
                </h4>
                <p>
                    Have fun and earn MCAT through entertaining mini-games.
                </p>
            </div>
        </div>
        <Image src={images.mcat7} alt='cat image' width={470} height={470} placeholder='blur'/>
        <div className="mcat">
            <h1>
                MCAT
            </h1>
            <h5>
                More Than a Cryptocurrency
            </h5>
            <p>
                MCAT believes in the potential of Solana to change the world for the better. It's not just a memecoin; it's a movement dedicated to making Solana more inclusive and welcoming. MCAT aims to simplify the crypto experience, ensuring it is accessible to everyone.
            </p>
        </div>
        <div className="alternate-presale">
            <h2>
                Alternative Presale Approach
            </h2>
            <p>
                You can also transfer your SOL amount directly by scanning the code below with your phantom or Solflare wallet to participate in our presale.
            </p>
            <Image src={images.qrCode} alt='qr code image' width={430} height={450} placeholder='blur'/>
        </div>
    </div>
  )
}

export default UtilitySection