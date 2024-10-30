import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import WebFont from 'webfontloader';

WebFont.load({
  google:{
    families:['Poppins:200,400,700,900', 'Open Sans']
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
