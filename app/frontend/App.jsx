import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
