import React from 'react'
import "./index.css"
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='jewell-footer'>
            <div className='jewell-footer-layout'>
                <div className='jewell-footer-text'>
                    <div className='jewell-footer-text-header'>Join Our Newsletter Now!</div>
                    <div className='jewell-footer-text-size'>
                        Be the first to know about new designs, events, and more!
                    </div>
                </div>
                <div className='jewell-footer-layout'>
                    <input placeholder='Enter You Email' />
                    <span className="icon"><MdOutlineEmail size={22} color={'grey'} /></span>
                </div>
                <div className='jewell-footer-info'>
                    <div>
                        <IoCallOutline size={30} color={'#f60a60'} />

                    </div>
                    <div className='jewell-footer-info-text'>
                        <div>Call Us</div>
                        <div>+91 98XXXXXXXXX</div>
                    </div>
                   
                </div>
                <div className='jewell-footer-info'>
                    <div>
                        <TfiEmail size={24} color={'#f60a60'} />

                    </div>
                    <div className='jewell-footer-info-text'>
                        <div>Email</div>
                        <div>Saxxxx@gmail.com</div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Footer