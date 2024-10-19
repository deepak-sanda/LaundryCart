import React, { useState } from 'react'
import washing_machine from "../../../Images/washing-machine.png"
import washing_machine1 from "../../../Images/washing-machine1.png"
import ironing from "../../../Images/ironing.png"
import ironing1 from "../../../Images/ironing1.png"
import towel from "../../../Images/towel.png"
import bleach from "../../../Images/bleach.png"
import bleach1 from "../../../Images/bleach1.png"



import "./product.css"


const Product = ({ imgSrc, Product_title, quantity }) => {

    const [washingOn, setwashingOn] = useState("false")
    const [ironingOn, setIroningOn] = useState("false")
    const [bleachOn, setBleachOn] = useState("false")

    

    return (
        <div className='product_component'>
            <div className='product'>
                <img className="product_img" src={imgSrc} alt='pic' />
                <div >
                    <p className='product_title'> {Product_title}</p>
                    <p className='Product_description'>Lorem Ipsum is simply dummy text of the</p>
                </div>
            </div>
            <div>
                <input type='number' className='quantity_input' value={quantity} min={0} />
            </div>
            <div>
                <img
                    className="washing_type_img"
                    src={washingOn === true ? washing_machine : washing_machine1}
                    alt='pic'
                    onClick={() => {
                        setwashingOn(!washingOn)
                    }}
                />
                <img
                    className="washing_type_img"
                    src={ironingOn ===true ? ironing : ironing1}
                    alt='pic'
                    onClick={() => {
                        setIroningOn(!ironingOn)
                    }}
                /><img
                    className="washing_type_img"
                    src={towel}
                    alt='pic'
                /><img
                    className="washing_type_img"
                    src={bleachOn ===true ? bleach : bleach1}
                    alt='pic'
                    onClick={() => {
                        setBleachOn(!bleachOn)
                    }}
                />
            </div>
            <p>5 x 3 = 150</p>
            <button className='reset_btn'>Reset</button>
        </div>
    )
}

export default Product
