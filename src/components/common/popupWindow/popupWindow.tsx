import { FC } from "react";
import * as React from "react";
import { Window } from "@progress/kendo-react-dialogs";

import { useDispatch, useSelector } from 'react-redux';

interface popupsTypes {
    visible: boolean,
    content: React.ReactElement
    title: string,
    onClose: any,

}

const PopupWindow: FC = () => {
    const {popupWindow : { visible,content,onClose}}= useSelector((state : any) => state.systemReducer)
    // console.log('window', content)
    const dispatch = useDispatch();

    return visible && <Window onClose={onClose}  >
        {content}
    </Window>
}
export default PopupWindow