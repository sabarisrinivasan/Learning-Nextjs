import {create} from 'zustand'

type CounterStore = {
    count:number
    incrementAsync?:()=>Promise<void>
    increment:()=>void
    decrement:()=>void
}

export const useCounterStore = create<CounterStore>((set)=>({
    count:0,
    increment:()=>{
        set((state: { count: number })=>({count:state.count+1}))
    },
    incrementAsync:async()=>{
     await new Promise<void>((resolve) =>setTimeout(resolve,1000))
       set((state: { count: number })=>({count:state.count+1}))
    },
    decrement:()=>{
        set((state: { count: number })=>({count:state.count-1}))
    },

}))