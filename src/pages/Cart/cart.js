import React, { useState } from 'react'
import "./index.css"
import { GoChevronDown } from 'react-icons/go'
import { FaAmazonPay } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import PaymentPage from '../PaymenDetail/paymentdetail'
import { SiVisa } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = useSelector(state => state.items);
    const [nextPage, setNextPage] = useState(false);
    const [billPayment, setBillPayment] = useState(false)
    const [data, setData] = useState(items)
    const handleChange = (data, index) => {
        let val = items.filter((x, i) => i !== index)
        dispatch({ type: 'REMOVE_ITEM', payload: data })
        setData([...val])

    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>

            {nextPage === false ?
                <div className='jewell-app-cart-page-container'>
                    <div className='jewell-app-cart-page'>
                        <div className='jewell-app-cart-page-outer'>
                            {data.map((x, i) => (

                                <div className='jewell-app-cart-page-outer-inner'>

                                    <div className='jewell-app-cart-page-outer-inner-align'>
                                        <div className="jewell-app-cart-page-close-tab" >
                                            <div className='jewell-app-cart-page-text-gift'>
                                                + Add A Gift Message
                                            </div>
                                            <div style={{ marginTop: "15px" }}>
                                                Qty : 1
                                            </div>
                                            <p onClick={() => handleChange(x, i)}>
                                                <IoCloseCircleOutline size={20} color={'black'} />
                                            </p>
                                        </div>
                                        <hr style={{ margin: "0px" }} />

                                        <div className="jewell-app-cart-page-text-align">
                                            <div className="jewell-app-cart-page-text-align-inner">
                                                <div className='jewell-app-cart-page-text-1'>
                                                    ₹ {x.price}
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
                                                <img src={x.imgURL} width={"100px"} />
                                            </div>

                                        </div>

                                    </div>

                                    <div>

                                    </div>
                                </div>


                            ))}
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
                                        <div style={{ color: "green" }}>FREE</div>
                                        <div>₹ 427726</div>
                                        <div>+ ₹ 0</div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='jewell-app-cart-page-end' >

                        <div style={{ fontWeight: "bold" }}>Total <span style={{ color: "grey", fontSize: "12px", fontWeight: "500", fontFamily: "sans-serif" }}>(1 Item)</span> : <span>₹ 427726</span></div>
                        <div className='footer-cart-proceed' onClick={() => setNextPage(true)}>
                            Proceed to Checkout
                        </div>
                    </div>
                </div>

                : <div className='jewell-app-cart-page-payment-container'>
                    <div className='jewell-app-cart-page-paymen-alignt'>
                        <div className='jewell-app-cart-page-paymen-align-image'>
                            {billPayment === true ? <img src={"https://img.freepik.com/premium-vector/transfer-money-concept-illustration_86047-117.jpg?w=826"} width={"500px"} height={"200px"} /> : <img src={"https://img.freepik.com/free-vector/mobile-payments-concept-illustration_114360-1243.jpg?t=st=1739900102~exp=1739903702~hmac=89ba5a81ca124b3e191ed61dd634ca1ab3d7ba4c2c1c0cbe2ecb69c438c52c65&w=740"} width={"500px"} height={"200px"} />}

                        </div>
                        <div style={{ width: "500px", flexDirection: "column", display: "flex" }}>
                            {billPayment === false ? <>
                                <div className='jewell-app-cart-page-payment-header'>
                                    Payment Method
                                    <p>Choose how you want to payment</p>
                                </div>

                                <div className='jewell-app-cart-page-payment-card-design'>
                                    <div>
                                        <input type="radio" />
                                    </div>
                                    <div><img src="https://bl-i.thgim.com/public/money-and-banking/nz7hvk/article24801784.ece/alternates/FREE_1200/google-paya" width={"30px"} height={"30px"} /> </div>
                                    <div>Google Pay</div>
                                </div>
                                <div className='jewell-app-cart-page-payment-card-design'>
                                    <div>
                                        <input type="radio" />
                                    </div>
                                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s" width={"30px"} height={"30px"} /> </div>
                                    <div>Phone Pey</div>
                                </div>
                                <div className='jewell-app-cart-page-payment-card-design'>
                                    <div>
                                        <input type="radio" />
                                    </div>
                                    <div><SiVisa size={"30px"} /> </div>
                                    <div>Credit Card</div>
                                </div>
                                <div className='jewell-app-cart-page-payment-card-design-button' onClick={() => setBillPayment(true)}>
                                    Make your bill payment
                                </div>
                            </> : <div className='jewell-app-cart-page-payment-card-success'>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                                    <img src="https://media.istockphoto.com/id/1416145560/vector/green-circle-with-green-tick-flat-ok-sticker-icon-green-check-mark-icon-tick-symbol-in-green.jpg?s=612x612&w=0&k=20&c=Uh3KS7c_o5QmrfisyV-aRzDUNqtAM7QUVJrc8bniVsQ=" width={"100px"} height={"100px"} />
                                </div>
                                <div className='text-center-1'>Payment Successful</div>
                                <div className='text-center-2'>We are delighted to inform you that</div>
                                <div className='text-center-3'> we received your payment</div>
                                <div className='text-center-4'>Thank you for your purchase</div>
                                <div className='jewell-app-cart-page-payment-card-design-button-success' onClick={() => window.location.reload()}>
                                    Continue Shopping
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>}

        </div>

    )
}

export default Cart