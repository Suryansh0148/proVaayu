import React from 'react'

export default function Jobcard({title,location,description, onApply}) {
  return (
    <div className='bg-slate-900/90 border border-yellow-400 shadow-xl
                rounded-2xl p-4 hover:scale-105 transition transform duration-300 hover:shadow-amber-800/60'>
      <h2 className='text-2xl font-bold text-yellow-300'>{title}</h2>
  <p className='text-gray-500 dark:text-gray-300 mb-4'>{location}</p>
  <p className='text-gray-200 dark:text-gray-200 mb-4'>{description}</p>
  <d className="flex justify-center">
  <button onClick={onApply} className='bg-linear-to-r from-pink-500 to-purple-500  text-white font-semibold px-4 py-2 rounded-lg transition'>
    Apply Now
  </button></d>
    </div>
  )
}
