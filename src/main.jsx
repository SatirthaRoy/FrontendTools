import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReactLenis } from '@studio-freight/react-lenis'

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactLenis root>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ReactLenis>
)
