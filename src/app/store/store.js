import { configureStore } from '@reduxjs/toolkit'

import ProductList from '../features/Product.slice'

export  const store = configureStore({ reducer:ProductList })