import { FC } from "react";
import { Window, Dialog } from "@progress/kendo-react-dialogs";
import { PopupShade, Popwindow } from "./window.styled";

export interface PopupWindowProps {
  showOverLay?: boolean;
  initialHeight?: number;
  show?: boolean;
  onClose?: Function;
  children?: any;
  title: string;
  height?: any;
}

const PopupWindow: FC<PopupWindowProps> = ({
  showOverLay = true,
  initialHeight,
  show,
  onClose,
  title,
  children,
  height
}) => {
  const onCloseWindow = () => {
    onClose && onClose();
  };

  return (
    <>
      {show && (
        <>
          {showOverLay && <PopupShade/>}
          <Popwindow className="popwindow">
            <Window
              onClose={() => onCloseWindow()}
              initialHeight={initialHeight ? initialHeight : 550}
              initialWidth={800}
              title={title}
              height={height}
            >
              {children}
            </Window>
          </Popwindow>

        </>
      )}
    </>
  );
};

export default PopupWindow;
