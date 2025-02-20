import React from 'react';
import { ComponentConfig } from './componentConfig';
import Button from './Button/Button';
import Input from './Input';

interface DynamicComponentProps {
  config: ComponentConfig;
}


export const DynamicComponent: React.FC<DynamicComponentProps> = ({ config }) => {
    switch (config.type) {
      case 'button': {
        const { label, onClick } = config.props; 
        return <Button label={label} onClick={onClick} />;
      }
      case 'input': {
        const { placeholder, value, onChange } = config.props;
        return <Input placeholder={placeholder} value={value} onChange={onChange} />;
      }
      default:
        return <div>Unknown component type</div>;
    }
  };