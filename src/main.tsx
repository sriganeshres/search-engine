import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ResultContextProvider } from './contexts/ResultContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ResultContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ResultContextProvider>,
)
