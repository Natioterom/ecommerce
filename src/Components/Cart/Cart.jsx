import './styles.css'
import { useDispatch, useSelector } from "react-redux"
import { addProducts, deleteProducts} from '../../app/features/Product.slice'
import { useState, useEffect } from 'react'

export const Cart = ({closeModalCart}) => {
   const products = useSelector(state => state.products)
   const [ quantity, setQuantity ] = useState([])
   const dispatch = useDispatch()
   
   useEffect(() => {
    // Crear un array unico con propiedad cantidad a partir de products
    const productsCart = products.map(item => { return { ...item, quantity: products.filter(e => e.name === item.name).length } })
    const setProducts = new Set(productsCart.map(JSON.stringify))
    setQuantity(Array.from(setProducts).map(JSON.parse))
  }, [products])

   const addProduct= (product) =>{
      dispatch(addProducts(product))
       }
    const deleteProduct = (product)=>{
        const itemPosition = products.indexOf(products.find(el => el.name === product.name))
        if(product.quantity > 1){
       product.quantity = product.quantity  -1
       setQuantity([...quantity])
        const deleteProduct = products.filter((_, i) => products.indexOf(products[itemPosition]) !== i)
         dispatch(deleteProducts(deleteProduct))
        } else {
          setQuantity(quantity.filter((_, i) => quantity.indexOf(products[itemPosition]) !== i))
          const deleteProduct = products.filter((_, i) => products.indexOf(products[itemPosition]) !== i)
         dispatch(deleteProducts(deleteProduct))
        }
        
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