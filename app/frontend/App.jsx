import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteComponent from './components/Routes.jsx'

const App = () => {
  return (
    <>
      <RouteComponent />
    </>
  )
}

setTimeout(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}, 1000)

