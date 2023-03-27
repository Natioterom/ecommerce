import './App.css'
import { PageProducts } from './Components/PageProducts/PageProducts'
import { Header } from './Components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header 
      img= {('cart.png')}/>
      <PageProducts />
    </div>
  )
}

export default App
