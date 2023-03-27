import { useState } from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { Cart } from '../Cart/Cart'
import { showCart } from '../../app/features/Product.slice'

export const Header = ({img}) => {
     const show = useSelector(store => store.showCart)
    const products = useSelector(state => state.products).length
    const dispatch = useDispatch()

    
    const classCart = products === 0 ? 'disable-img-cart-header' : 'img-cart-header'
    const shopCart = () => {
        dispatch(showCart(true))
    }
    const closeModal = () => {
        dispatch(showCart(false))
    }
    return(
        <div className='container-header'>
        <h1 className='title-header'>DecoPlant's</h1>
        <div className='container-cart-shop'>
        <span className='products-quantity'>{products}</span>
        <img onClick={shopCart} className ={classCart} src={img} alt='cart' />
        </div>
        { show ? <Cart 
        closeModalCart={closeModal}/> : ''}
        </div>
    )
}