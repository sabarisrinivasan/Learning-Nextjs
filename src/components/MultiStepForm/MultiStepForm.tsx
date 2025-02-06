import { ReactElement, useState } from "react";

export const MultiStepForm=(steps:ReactElement[])=>{
   const [currentStepIndex,setCurrentIndex]=useState(0)
     const next =()=>{
      setCurrentIndex(i=>{
         if(i>=steps.length -1) return i
         return i+1
      })
     }
     const back=()=>{
      setCurrentIndex(i=>{
         if(i<=0) return i
         return i-1
      })
     }
     const goto=(index:number)=>{
      setCurrentIndex(index)
     }
   return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    goto,
    steps
   }
}