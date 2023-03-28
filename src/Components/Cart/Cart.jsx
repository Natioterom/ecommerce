import './styles.css'
import { useDispatch, useSelector } from "react-redux"
import { addProducts, deleteProducts, total, finalQuantity, showCart} from '../../app/features/Product.slice'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const Cart = ({closeModalCart}) => {

   const products = useSelector(state => state.products)
   const [ quantity, setQuantity ] = useState([])
   const dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
    // Crear un array unico con propiedad cantidad a partir de products
    const productsCart = products.map(item => { return { ...item, quantity: products.filter(e => e.name === item.name).length } })
    const setProducts = new Set(productsCart.map(JSON.stringify))
    setQuantity(Array.from(setProducts).map(JSON.parse))
  }, [products])

  //Añadir productos al carrito
   const addProduct= (product) =>{
      dispatch(addProducts(product))
       }
  //Eliminar productos del carrito
    const deleteProduct = (product)=>{
      //Se busca la posición del elemento que se selecciono 
        const itemPosition = products.indexOf(products.find(el => el.name === product.name))
        if(product.quantity > 1){
       product.quantity = product.quantity  -1
       //Set del array  con el nuevo valor de quantity
       setQuantity([...quantity])
        const deleteProduct = products.filter((_, i) => products.indexOf(products[itemPosition]) !== i)
         dispatch(deleteProducts(deleteProduct))
        } else {
          setQuantity(quantity.filter((_, i) => quantity.indexOf(products[itemPosition]) !== i))
          const deleteProduct = products.filter((_, i) => products.indexOf(products[itemPosition]) !== i)
         dispatch(deleteProducts(deleteProduct))
        }
        
    }
    const price = quantity.map(ele => ele.price * ele.quantity)
    const totalPrice = price.reduce((el, acc) => el + acc ,0)
    
    const buy = () => {
    dispatch(total(totalPrice))
    dispatch(finalQuantity(quantity))
    navigate('/purchase')
    dispatch(showCart(false))
    }
 
   return(
     <article className='container-cart-products'>
         <button onClick ={closeModalCart} className='close-cart'>Cerrar</button>
        { quantity.map((product) =>{
        return(
            <div key={product.id} className='cart-products'> 
            <img className= 'image-product-cart' src={product.image} />
            <p className='name-product-cart'>{product.name}</p>
            <div className='container-price-button'>
            <p className='price-product-cart'>$ {(product.price * product.quantity).toFixed(2)}</p>
            <button onClick={()=>{deleteProduct(product)}} className='delete-product-cart'>-</button>
            <span>{product.quantity}</span>
            <button onClick={()=>{addProduct(product)}} className='add-more-product-cart'>+</button>
          </div> 
          </div>
        )
     })
      }
      <div className='container-total-btn'>
      <h3 className='total-bill'>Total: ${totalPrice.toFixed(2)}</h3>
      <button className='btn-buy' onClick={buy}>Comprar</button>
      </div>
     </article>
   )
}