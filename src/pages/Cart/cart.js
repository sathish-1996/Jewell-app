import React from 'react'
import "./index.css"

const Cart = () => {
    return (
        <div className='jewell-app-cart-page'>

            <div className='jewell-app-cart-page-outer'>
                <div className='jewell-app-cart-page-outer-inner'>

                    <div className='jewell-app-cart-page-outer-inner-align'>
                        <div className="jewell-app-cart-page-close-tab" style={{ width: "350px", height: "200px" }}>
                            <div style={{marginTop:"15px"}}>
                                qty : 1
                            </div>
                            <div>
                                X
                            </div>
                        </div>
                        <div className="jewell-app-cart-page-text-align">
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
                            <img src='https://png.pngtree.com/png-clipart/20230317/ourmid/pngtree-gold-earring-jewellery-png-image_6648640.png' width={"250px"} />
                        </div>

                    </div>

                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart