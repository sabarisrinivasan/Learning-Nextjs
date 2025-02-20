import React from 'react'


interface InputProps {
    placeholder: string;
    value?: string;
    onChange?: (newValue: string) => void;
  }
const Input = ({placeholder,value,onChange}:InputProps) => {
  return (
    <input className='px-4 py-4 pl-3' placeholder={placeholder} value={value} onChange={()=>onChange} />
  ) 
}

export default Input