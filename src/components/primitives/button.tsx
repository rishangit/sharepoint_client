import React, { MouseEventHandler } from 'react';
import { Button } from "@progress/kendo-react-buttons";

export interface ButtonType {
  onClick?: MouseEventHandler;
  disabled?: boolean;
  themeColor?: 'primary' | 'base' | 'secondary';
  children?:any;
  icon?:string;
}

const ButtonComponent:React.FC<ButtonType> = (props:ButtonType)=>{
  const {themeColor,children, ...rest } = props;
  return (<Button {...rest} themeColor={themeColor || "primary"}>{ children }</Button>);
};

export default ButtonComponent;