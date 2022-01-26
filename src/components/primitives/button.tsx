import React, { MouseEventHandler } from 'react';
import { Button } from "@progress/kendo-react-buttons";

export interface ButtonProps {
  clicked?: MouseEventHandler;
  disabled?: boolean;
  themeColor?: 'primary' | 'base' | 'secondary';
  children?:any;
}

const ButtonComponent:React.FC<ButtonProps> = (props:ButtonProps)=>{
  const {themeColor,children, ...rest } = props;
  return (<Button {...rest} themeColor={themeColor || "primary"}>{ children }</Button>);
};

export default ButtonComponent;