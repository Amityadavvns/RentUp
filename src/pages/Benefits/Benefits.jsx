import { Typography } from '@mui/material'
import React from 'react'
import './Benefits.css'
import Listing from '../../images/listing.png';
import Ad from '../../images/ad.png';
import Enquiries from '../../images/enquiries.png';
import Talk from '../../images/talk.png';


const Benefits = () => {
    return (
        <>
            <div className='mainDiv container'>
                <Typography variant='h3'>
                    Benefits of Listing with us
                </Typography>
                <div className='box'>
                    <div className='leftBox'>
                        <div className='box1'>
                            <div className='imgDiv'>
                                <img src={Listing} alt="" />
                            </div>
                            <div className='content'>
                                <h2>Free Listing</h2>
                                <p>You won't have to worry about paying any amount for better audience engagement unlike other property search platforms.</p>
                            </div>
                        </div>
                        <div className='box2'>
                            <div className='imgDiv'>
                                <img src={Ad} alt="" />
                            </div>
                            <div className='content'>
                                <h2> Advertise for FREE  </h2>
                                <p>You won't have to worry about paying any amount for better audience engagement unlike other property search platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightBox'>
                        <div className='box3'>
                            <div className='imgDiv'>
                                <img src={Talk} alt="" />
                            </div>
                            <div className='content'>
                                <h2> Get Unlimited Enquiries  </h2>
                                <p>You won't have to worry about paying any amount for better audience engagement unlike other property search platforms.</p>
                            </div>
                        </div>
                        <div className='box4'>
                            <div className='imgDiv'>
                                <img src={Enquiries} alt="" />
                            </div>
                            <div className='content'>
                                <h2>Rent on Time</h2>
                                <p>You won't have to worry about paying any amount for better audience engagement unlike other property search platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Benefits
