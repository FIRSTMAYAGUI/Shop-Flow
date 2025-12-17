import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import AppLayout from './layouts/AppLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product' element={<ProductList />}/>
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  )
}

export default App
