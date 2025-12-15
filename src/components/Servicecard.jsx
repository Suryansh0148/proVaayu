import React from 'react'

export default function Servicecard({ title, description, iconName }) {

  const iconPath = `/services/${iconName}.png`; // works ONLY if icons are in public/services/

  return (
    <div
  className="
    bg-[#0B1020]/70
    backdrop-blur-md
    border border-yellow-400/60
    rounded-3xl
    shadow-lg shadow-black/40
    p-6
    text-white
    hover:scale-[1.03]
    hover:shadow-yellow-500/40
    transition-all duration-300
  "
>
      {/* bg-slate-900/90 border border-yellow-400 shadow-xl
                rounded-2xl p-6 hover:scale-105 transition transform duration-300 hover:shadow-yellow-400/40 */}
      <div className="flex justify-center items-center">      
      <img
        src={iconPath}
        alt={title}
        className='w-28 h-28 mb-4 object-contain'
        onError={(e) => { e.target.style.display = 'none'; }}
      /></div>

      <h3 className='text-xl text-cyan-400 font-semibold mb-2'>{title}</h3>
      <p className='text-blue-100'>{description}</p>
    </div>
  )
}
