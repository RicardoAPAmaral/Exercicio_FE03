import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './Footer/Footer'
import SimpleCounter from './components/SimpleCounter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Header />
      <Home />
      <Footer/>
   
  </React.StrictMode>,
)
