import {Meta, StoryObj} from '@storybook/react'
import ButtonComponent from "@/components/Button/Button";
import { ComponentProps } from "react";
import { fn } from '@storybook/test';

type StoryProps =ComponentProps<typeof ButtonComponent>

const meta:Meta<StoryProps>={
    component:ButtonComponent,
    tags: ['autodocs'],
    args:{onclick: fn()}
    
}
export default meta

type Story = StoryObj<StoryProps>

export const Primary:Story={
     args:{
        children:"clickMe"
     },
     render :(args)=>{
        return <ButtonComponent {...args}></ButtonComponent>
     }
     
}
export const Secondary:Story={
    args:{
        ghost:true,
        children:"clickMe"
    }
}

export const link :Story ={
    args:{
        type:"link",
        children:"clickMe"
    }
}

export const text :Story={
    args:{
        type:"text",
        children:"ClickMe"
    }
}

export const dashed :Story={
    args:{
        type:"dashed",
        children:"ClickMe"
    }
}

