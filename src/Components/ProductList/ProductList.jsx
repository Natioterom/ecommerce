import './style.css'

export const ProductList = ({image, name,brand, price, stock, addProduct}) => {

const classButton = stock === 0 ? 'disable-button-add-product' : 'button-add-product'
const textButton = classButton === 'disable-button-add-product' ? 'Out of stock' : 'Add to car'
    return(
        <article className='art-products-list'>
        <div className='container-products-list'>
            <img className='product-img' src={image} alt={name} />
            <p className='product-brand'>{brand}</p>
            <h2 className='product-name'>{name}</h2>
            <div className='container-price-button-product'>
            <p className='product-price'>{price}</p>
            <button onClick={addProduct} className={classButton}>{textButton}</button>
        </div>
        </div>
        </article>
    )
}