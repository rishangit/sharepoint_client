import { memo, FC } from "react";
import { Button, ButtonType } from "@primitives";

export interface AddNewType {
  text?: String;
  onClick:any;
}

const NewButton: FC<AddNewType> = ({ text = "Add New" , onClick}) => {
  const AddNewProps: ButtonType = {
    icon: "plus-outline",
    onClick,
  };

  return <Button {...AddNewProps}>{text}</Button>;
};

export default memo(NewButton);
