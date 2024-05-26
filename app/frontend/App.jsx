import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div>
      <h1 className='text-gray-500'>Hello, Vite!</h1>
      <p>Visit the guide for more information: <a href="https://vite-ruby.netlify.app/guide/rails" target="_blank" rel="noopener noreferrer">https://vite-ruby.netlify.app/guide/rails</a></p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
