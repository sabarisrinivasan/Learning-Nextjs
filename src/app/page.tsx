"use client"
import { DynamicComponent } from "@/components/dynamicRendering"

import { PageConfig } from '../components/componentConfig';


const Home = () => {
  const pageConfig: PageConfig = {
    components: [
      {
        type: 'button',
        props: { label: 'Click Me!' },
      },
      {
        type: 'input',
        props: { placeholder: 'Type something...' },
      },
    ],
  };
  return (
    <div>
     {pageConfig.components.map((config, index) => (
        <DynamicComponent key={index} config={config} />
      ))}
    </div>
  )
}

export default Home