import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const ROOT_ID = 'bmon-funnels-root'

function getOrCreateRoot() {
  let root = document.getElementById(ROOT_ID)
  if (root) return root

  root = document.createElement('div')
  root.id = ROOT_ID
  document.body.appendChild(root)
  return root
}

createRoot(getOrCreateRoot()).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
