 import { useNavigate } from 'react-router-dom'
import './style.css'
 import { useSelector } from "react-redux"
 
 export const Purchase = () => {

    const total = useSelector(state => state.total)
    const quantity = useSelector(state => state.finalQuantity)
    const navigate = useNavigate()
   
   const backToLandingPage = () => {
    navigate('/')
   }

    return(
        <><article className='container-total-purchase'>
            <div className='container-items-purchase'>
            {quantity.map((product) => {
                return (
                    <div key={product.id} className='purchase-products'>
                        <img className='image-product-purchase' src={product.image} />
                        <p className='name-product-purchase'>{product.quantity} / {product.name}</p>
                        <p className='price-product-purchase'>$ {(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                )
            })}
        </div>
        <h1 className='title-total-purchase'> Total Compra: ${(total).toFixed(2)}   </h1>
        <button className='btn-total-purchase' onClick={backToLandingPage}>Volver</button>
        </article>
        </>
    )
 }