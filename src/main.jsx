import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/Header.jsx'
import Home from './pages/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
)
