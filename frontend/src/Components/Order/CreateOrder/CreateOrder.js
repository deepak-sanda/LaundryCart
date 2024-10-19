import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import FooterTwo from '../../Footers/FooterTwo'
import "./CreateOrder.css"
import Product from '../Product/Product'
import shirts from "../../../Images/shirts.jpg"
import Tshirts from "../../../Images/Tshirts.jpeg"
import Trousers from "../../../Images/Trousers.jpeg"
import Jeans from "../../../Images/Jeans.jpeg"
import Boxers from "../../../Images/Boxers.jpeg"
import Joggers from "../../../Images/Joggers.jpeg"
import Others from "../../../Images/Others.jpeg"
import { useNavigate } from 'react-router-dom'

const CreateOrder = () => {

    const Navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className='align_h'>
                <Sidebar />
                <section >
                    <p className='orders_count'>Create</p>
                    <article className='create_table' >
                        <div className='table_head' >
                            <span className='product_types'>Product Types</span>
                            <span className='quantity'>Quantity</span>
                            <span className='wash_type'>Wash Type</span>
                            <span className='price'>Price</span>
                        </div>
                        <Product imgSrc={shirts}  Product_title="Shirts"/>
                        <Product imgSrc={Tshirts}  Product_title="Tshirts"/>
                        <Product imgSrc={Trousers}  Product_title="Trousers"/>
                        <Product imgSrc={Jeans}  Product_title="Jeans"/>
                        <Product imgSrc={Boxers}  Product_title="Boxers"/>
                        <Product imgSrc={Joggers}  Product_title="Joggers"/>
                        <Product imgSrc={Others}  Product_title="Others"/>
                        <div className='btns_container'>
                            <button className='cancel_btn' onClick={() => {
                                Navigate("/home")
                            }}>Cancel</button>
                            <button className='procced_btn'>Proceed</button>

                        </div>


                    </article>
                </section>
            </div>            
            <FooterTwo />
        </div>
    )
}

export default CreateOrder
