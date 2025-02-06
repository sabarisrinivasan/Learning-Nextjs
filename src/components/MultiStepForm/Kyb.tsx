import React from "react";
type basicFormData = {
  organizationName: string;
  gstNumber: string;
  organizationURL: string;
};
type UserFormProps = basicFormData & {
  updatedFields: (fields: Partial<basicFormData>) => void;
};
const Kyb = ({organizationName,gstNumber,organizationURL,updatedFields}:UserFormProps) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <label htmlFor="">organization name</label>
      <input
        autoFocus
        type="text"
        name=""
        id=""
        placeholder="organization name"
        value={organizationName}
        onChange={(e)=>updatedFields({organizationName:e.target.value})}
      />
      <label htmlFor="">GST number</label>
      <input type="text" name="" id="" placeholder="GST number" value={gstNumber} onChange={(e)=>updatedFields({gstNumber:e.target.value})} />
      <label htmlFor="">organization url</label>
      <input type="text" name="" id="" placeholder="organization url"  value={organizationURL} onChange={(e)=>updatedFields({organizationURL:e.target.value})}/>
    </div>
  );
};

export default Kyb;
