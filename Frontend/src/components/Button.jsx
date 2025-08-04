import React from 'react'

function Button({
  children, 
  className,
  onClick = () => {},
  ...props
}) {
  return (
    <button 
      className={`${className} outline-none font-semibold cursor-pointer p-3 shadow-md`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
