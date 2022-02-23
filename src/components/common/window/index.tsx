import { FC } from "react";
import { Window, Dialog } from "@progress/kendo-react-dialogs";

export interface PopupWindowProps {
  showOverLay?: boolean;
  onClose?: Function;
  children?:any;
  title : string,
}

const PopupWindow: FC<PopupWindowProps> = ({
  showOverLay = true,
  onClose,
  title,
  children,
}) => {

  const onCloseWindow = () => {
    onClose && onClose();
  };

  return (
    <>
      {showOverLay && <div className="k-overlay"></div>}
      <Window
        onClose={() => onCloseWindow()}
        initialHeight={600}
        initialWidth={800}
        title={title}
      >
        {children}
      </Window>
    </>
  );
};

export default PopupWindow;
