import React from 'react'

type basicFormData ={
    name:string,
    phoneNumber:string,
    email:string
}
type UserFormProps =basicFormData & {
    updatedFields:(fields:Partial<basicFormData>)=>void
}
const BasicDetails = ({name,phoneNumber,email,updatedFields}:UserFormProps) => {
  return (
    <div className='flex flex-col gap-5 mt-5' >
        <label htmlFor="">name</label>
        <input autoFocus type="text" placeholder='name' className='w-full' value={name} onChange={(e)=>updatedFields({name:e.target.value})}/>
        <label htmlFor="">phone number</label>
        <input type="text" placeholder='phone number' value={phoneNumber} onChange={(e)=>updatedFields({phoneNumber:e.target.value})} />
        <label htmlFor="">email</label>
        <input type="text" placeholder='email'  value={email} onChange={(e)=>updatedFields({email:e.target.value})}/>
    </div>
  )
}

export default BasicDetails