import './style.css'
import axios from "axios"
import { ProductList } from "../ProductList/ProductList"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch} from 'react-redux'
import { addProducts } from '../../app/features/Product.slice'

export const PageProducts = () => {
   
    const [ db, setDb ] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        const data = async() =>{
    
        const url = 'https://api-rest-products.vercel.app/products'
        const response = await axios.get(url)
        return setDb(response.data)   
        }
     data()
    },[])

   const addProduct = (product) => {
    dispatch(addProducts(product))
   }
  
    return(
        <div className='container-page-products'>
            {
                db.map(product => {return (
                    <div className ='products-page' key={product.id}> 
                    <ProductList 
                    name={product.name}
                    image={product.image}
                    price={`$ ${product.price}`}
                    stock={product.countInStock}
                    addProduct={()=>{addProduct(product)}}
                        />
                    </div>
                )})
            }
        </div>
    )
    
}