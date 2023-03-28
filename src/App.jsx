import './App.css'
import { PageProducts } from './Components/PageProducts/PageProducts'
import { Purchase }  from './Components/Purchase/Purchase'
import { Header } from './Components/Header/Header'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header 
      img= {('cart.png')}/>
      <Routes >
        <Route path='/' element={<PageProducts /> } />
        <Route path ='/purchase' element={<Purchase />} />
      </Routes>
    </div>
  )
}

export default App
