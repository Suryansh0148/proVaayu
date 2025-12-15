import React from 'react'
import { Link } from "react-router-dom";


export default function  Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        
        <p>© {new Date().getFullYear()} YourWebsite</p>

        <div className="flex gap-4">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/products" className="hover:text-white">Products</Link>
        </div>

    </div>
    </footer>
  )
}

