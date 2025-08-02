import React from 'react'

function Button({
  children, 
  className,
  onClick = () => {},
  ...props
}) {
  return (
    <button 
      className={`outline-none font-semibold cursor-pointer p-3 bg-red-500 text-white my-5 hover:bg-white hover:text-red-500 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
