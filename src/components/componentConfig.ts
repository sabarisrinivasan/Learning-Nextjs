export interface ButtonConfig {
    type: 'button';
    props: {
      label: string;
      onClick?: () => void;
    };
  }
  
  export interface InputConfig {
    type: 'input';
    props: {
      placeholder: string;
      value?: string;
      onChange?: (newValue: string) => void;
    };
  }
  export type ComponentConfig = ButtonConfig | InputConfig 
  export interface PageConfig {
    components: ComponentConfig[];
  }
  