import React from 'react'
interface ButtonProps {
  label: string;
  onClick?: () => void;
}
const Button = ({label,onClick}:ButtonProps) => {
  return (
    <button className='px-4 py-4 bg-blue-500' onClick={onClick}>{label}</button>
  )
}

export default Button