import React from 'react'

function Input({
    type = 'text',
    placeholder,
    value,
    classname  = '',
    onChange = ()=>{},
    ...props
}){;
  return (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${classname} outline-none w-full p-2 border-1 border-white rounded-sm text-md font-medium`}
          {...props}
        />
  )
}

export default Input;
