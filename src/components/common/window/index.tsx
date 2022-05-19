import { FC } from "react";
import { Window, Dialog } from "@progress/kendo-react-dialogs";
import { PopupShade } from "./window.styled";

export interface PopupWindowProps {
  showOverLay?: boolean;
  initialHeight?: number;
  show?: boolean;
  onClose?: Function;
  children?: any;
  title: string;
}

const PopupWindow: FC<PopupWindowProps> = ({
  showOverLay = true,
  initialHeight,
  show,
  onClose,
  title,
  children,
}) => {
  const onCloseWindow = () => {
    onClose && onClose();
  };

  return (
    <>
      {show && (
        <>
          {showOverLay && <PopupShade/>}
          <Window
            onClose={() => onCloseWindow()}
            initialHeight={initialHeight ? initialHeight : 550}
            initialWidth={800}
            title={title}
          >
            {children}
          </Window>
        </>
      )}
    </>
  );
};

export default PopupWindow;
