import './styles.css'
import { useDispatch, useSelector } from "react-redux"
import { addProducts, deleteProducts } from '../../app/features/Product.slice'
import { useState, useEffect } from 'react'

export const Cart = ({closeModalCart}) => {
   const products = useSelector(state => state.products)
   const [ quantity, setQuantity ] = useState([])
   const dispatch = useDispatch()
   
   useEffect(() => {
    // Crear un array unico con propiedad cantidad a partir de items
    const productsCart = products.map(item => { return { ...item, quantity: products.filter(e => e.name === item.name).length } })
    const setProducts = new Set(productsCart.map(JSON.stringify))
    setQuantity(Array.from(setProducts).map(JSON.parse))
  }, [products])

   const addProduct= (product) =>{
      dispatch(addProducts(product))
       }
    const deleteProduct = (product)=>{
        const deleteItem = quantity.map(item => { return { ...item, quantity: product.quantity - 1 } })
        setQuantity(deleteItem)
    }

   return(
     <article className='container-cart-products'>
         <button onClick ={closeModalCart} className='close-cart'>Close</button>
        { quantity.map((product) =>{
        return(
            <div key={product.id} className='cart-products'> 
            <img className= 'image-product-cart' src={product.image} />
            <p className='name-product-cart'>{product.name}</p>
            <div className='container-price-button'>
            <p className='price-product-cart'>$ {product.price * product.quantity}</p>
            <button onClick={()=>{deleteProduct(product)}} className='delete-product-cart'>-</button>
            <span>{product.quantity}</span>
            <button onClick={()=>{addProduct(product)}} className='add-more-product-cart'>+</button>
          </div> 
          </div>
        )
     })
      }
     </article>
   )
}