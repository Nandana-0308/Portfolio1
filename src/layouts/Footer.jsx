import React from 'react'


const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-6   transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center">

        {/* Left Side (Logo + Name) */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span className="text-lg font-semibold">YourName</span>
        </div>

        {/* Right Side (Links) */}
        <div className="flex flex-col  gap-2 mt-4 md:mt-0 md:ml-auto">
          <div></div>
          <div></div>
          <div></div>

        </div>

        <div className="md:flex-col ">
          {/* {{
            {icon:Github,href:"#"},
            {icon:,href:"#"},
            {icon:,href:"#"}
          }} */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
