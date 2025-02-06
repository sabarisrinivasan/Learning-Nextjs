import React from 'react'
type kycFormData ={
    aadharNumber:string,
    panNumber:string,
    passportNumber:string
}
type UserFormProps =kycFormData & {
    updatedFields:(fields:Partial<kycFormData>)=>void
}
function Kyc({aadharNumber,panNumber,passportNumber,updatedFields}:UserFormProps) {
  return (
    <div  className='flex flex-col gap-5 mt-5'>
        <label htmlFor="">aadhar number </label>
        <input autoFocus type="text" value={aadharNumber} onChange={(e)=>updatedFields({aadharNumber:e.target.value})}/>
        <label htmlFor="">pan number </label>
        <input type="text"  value={panNumber} onChange={(e)=>updatedFields({panNumber:e.target.value})}/>
        <label htmlFor="">passport number</label>
        <input type="text" value={passportNumber} onChange={(e)=>updatedFields({passportNumber:e.target.value})} />
    </div>
  )
}

export default Kyc