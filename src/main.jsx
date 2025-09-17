import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WelcomeClock from "./Components/WelcomeClock";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <WelcomeClock />
  </StrictMode>,
)
