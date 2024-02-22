import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter, Router } from 'react-router-dom'
import store from './Store/index.jsx'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
    </Provider>
   
  </React.StrictMode>,
)
