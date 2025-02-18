import React from 'react'
import "./index.css"
import { GoChevronDown } from 'react-icons/go'
import { FaAmazonPay } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { IoCloseCircleOutline } from 'react-icons/io5'

const Cart = () => {
    return (
      <div style={{height:"600px", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className='jewell-app-cart-page-container'>
            <div className='jewell-app-cart-page'>

                <div className='jewell-app-cart-page-outer'>
                    <div className='jewell-app-cart-page-outer-inner'>

                        <div className='jewell-app-cart-page-outer-inner-align'>
                            <div className="jewell-app-cart-page-close-tab" >
                                <div className='jewell-app-cart-page-text-gift'>
                                    + Add A Gift Message
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    Qty : 1
                                </div>
                                <p>
                                    <IoCloseCircleOutline size={20} color={'black'}/>
                                </p>
                            </div>
                            <hr style={{ margin: "0px" }} />

                            <div className="jewell-app-cart-page-text-align">
                                <div className="jewell-app-cart-page-text-align-inner">
                                    <div className='jewell-app-cart-page-text-1'>
                                        ₹ 427726
                                    </div>
                                    <div className='jewell-app-cart-page-text-2'>
                                        Vibrant Aura Gold Bangles
                                    </div>
                                    <div className='jewell-app-cart-page-text-3'>
                                        Size : 62.50 MM |
                                        Weight : 42.202 g
                                    </div>
                                </div>
                                
                                <div>
                                    <img src='https://png.pngtree.com/png-clipart/20230317/ourmid/pngtree-gold-earring-jewellery-png-image_6648640.png' width={"200px"} />
                                </div>
                                
                            </div>

                        </div>

                        <div>

                        </div>
                    </div>

                </div>

                <div className='jewell-app-cart-page-payment'>
                    <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div className='jewell-app-cart-page-payment-summary' >Order Summary </div>
                        <div><FaAmazonPay size={22} color={'black'} /></div></div>
                    <hr style={{ margin: "0px" }} />
                    <div className='jewell-footer-layout'>
                        <input placeholder='Apply Coupon code / Promo Code' />
                        <span className="icon"><GoChevronDown size={22} color={'grey'} /></span>
                    </div>
                    <hr style={{ margin: "0px" }} />
                    <div className='jewell-app-cart-page-payment-inner'>
                        <div className='jewell-app-cart-page-payment-inner-align'>
                            <div>Sub Total</div>
                            <div>Discount</div>
                            <div>Delivery Charge</div>
                            <div>TOTAL (Incl of all Taxes.)</div>
                            <div>You Save</div>

                        </div>
                        <div >
                            <div className='jewell-app-cart-page-payment-inner-align-2'>
                                <div>₹ 427726</div>
                                <div>- ₹ 0</div>
                                <div style={{color:"green"}}>FREE</div>
                                <div>₹ 427726</div>
                                <div>+ ₹ 0</div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <div className='jewell-app-cart-page-end'>
                
                    <div style={{fontWeight:"bold"}}>Total : <span>₹ 427726</span></div>
                <div className='footer-cart-proceed'>
                    Proceed to Checkout
                </div>
            </div>
        </div>
      </div>
    )
}

export default Cart