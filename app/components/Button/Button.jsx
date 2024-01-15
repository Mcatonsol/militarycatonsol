import React from 'react'

const Button = ({text, type, className, style}) => {
  return (
    <button type={type} className={className}
    style={style}
    >{text}</button>
  )
}

export default Button