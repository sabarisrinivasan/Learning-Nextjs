"use client";
import BasicDetails from "@/components/MultiStepForm/BasicDetails";
import Kyb from "@/components/MultiStepForm/Kyb";
import Kyc from "@/components/MultiStepForm/Kyc";
import { MultiStepForm } from "@/components/MultiStepForm/MultiStepForm";
import { FormEvent, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

type FormData={
name:string,
phoneNumber:string,
email:string,
aadharNumber:string,
panNumber:string,
passportNumber:string,
organizationName:string,
gstNumber:string,
organizationURL:string,

}


const InitialData:FormData={
  name:"",
  phoneNumber:"",
  email:"",
  aadharNumber:"",
  panNumber:"",
  passportNumber:"",
  organizationName:"",
  gstNumber:"",
  organizationURL:""
}

export default function Home() {

  const [data,setData]=useState(InitialData)

  const updatedFields=(fields:Partial<FormData>)=>{
    setData (prev=>{
     return {...prev,...fields}
    })
}
  const { steps, currentStepIndex, step, back, next } = MultiStepForm([
    <BasicDetails key="basicDetail" {...data} updatedFields={updatedFields} />,
    <Kyc key="kyc" {...data} updatedFields={updatedFields}/>,
    <Kyb key="kyb" {...data} updatedFields={updatedFields} />,
  ]);

  
  const onSubmit=(e:FormEvent)=>{
      e.preventDefault()
      next( )
  }
  return (
    <div className="h-dvh bg-[#F9FAFA] flex items-center justify-center">
     
      <div className=" bg-white h-[80%] w-[480px] border-2 p-7 rounded-md relative">
      {currentStepIndex !== 0 && (
        <button
          className="h-9.5 w-9.5 bg-gray-300 p-2 rounded-full"
          onClick={back}
        >
          <FaAngleLeft></FaAngleLeft>
        </button>
      )}
        <div className="flex items-center gap-3">
          <div>
            <p>
              page {currentStepIndex + 1}/{steps.length}
            </p>
            <form onSubmit={onSubmit}>{step}</form>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-14">
          <button
            className={`block bg-blue-500 rounded-md text-white`}
            onClick={next}
            type="submit"
          >
            {currentStepIndex !=steps.length -1 ? "save": "submit"}
          </button>
          <button className="block text-blue-500 rounded-md" onClick={next}>
            skip
          </button>
        </div>
      </div>
    </div>
  );
}
