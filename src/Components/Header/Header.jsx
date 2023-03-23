import { useState } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { Cart } from '../Cart/Cart'
export const Header = ({img}) => {
    const [showCart , setShowCart ] = useState(false)
    const products = useSelector(state => state.products).length
    
    const classCart = products === 0 ? 'disable-img-cart-header' : 'img-cart-header'
    const shopCart = () => {
        setShowCart(true)
    }
    const closeModal = () => {
        setShowCart(false)
    }
    return(
        <div className='container-header'>
        <h1 className='title-header'>TecnoTech</h1>
        <div className='container-cart-shop'>
        <span className='products-quantity'>{products}</span>
        <img onClick={shopCart} className ={classCart} src={img} alt='cart' />
        </div>
        { showCart ? <Cart 
        closeModalCart={closeModal}/> : ''}
        </div>
    )
}