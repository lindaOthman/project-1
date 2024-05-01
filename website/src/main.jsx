import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Login from './assets/componants/login/Login.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
