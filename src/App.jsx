import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Order from './components/Order'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='grow ml-60 md:ml-64 lg:h-screen bg-gray-100 text-gray-900 '>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order" element={<Order />} />
            {/* Add more routes like: <Route path="/products" element={<Products />} /> */}
          </Routes>
        </div>
      </div>

      
    </div>
  )
}

export default App
