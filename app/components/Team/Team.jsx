import React from 'react'
import './styles.scss'
import Image from 'next/image';
import images from '../../assets';
const Team = () => {
  return (
    <>
        <h1 className='team-head'>
            TEAM
        </h1>
        <div className='team'>
        <div className="ceo">
            <Image src={images.DONGARTHUR} alt='ceo image' width={350} height={370} placeholder='blur'/>
            <h2>
                DONG ARTHUR
            </h2>
            <h3>
                Chief Executive Officer
            </h3>
        </div>
        <div className="co-ceo">
            <Image src={images.ETHANBRIAN} alt='co ceo image' width={350} height={370} placeholder='blur'/>
            <h2>
                ETHAN BRIAN
            </h2>
            <h3>
                Co-Chief Executive Officer
            </h3>
        </div>
        <div className="cto">
            <Image src={images.JINYOUNG} alt='cto image' width={350} height={370} placeholder='blur'/>
            <h2>
                JIN YOUNG
            </h2>
            <h3>
                Chief Technical Officer
            </h3>
        </div>
        <div className="cmo">
            <Image src={images.TAEHOON} alt='cmo image' width={350} height={370} placeholder='blur'/>
            <h2>
                TAE HOON
            </h2>
            <h3>
                Chief Marketing Officer
            </h3>
        </div>
    </div>
    </>
  )
}

export default Team