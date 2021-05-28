import React from 'react'
import ReactDOM from 'react-dom'
import App from "./Root/App";

import 'Root/index.sass'


console.log('%cWelcome to console; I hope it keep itself clean!', 'color: #00A987')


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
