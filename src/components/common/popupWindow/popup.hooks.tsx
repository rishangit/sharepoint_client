import { useDispatch } from 'react-redux';
import { useState } from 'react';

const usePopup = () => {
    const dispatch = useDispatch()
    const [component , setComponet] = useState()
    
    const show = () => {
        dispatch({ type: 'SET_POPUPWINDOW', payload: { visible: true } })
    }
    const hide = () => {
        dispatch({ type: 'SET_POPUPWINDOW', payload: { visible: false } })
    }
    const setContent = (content) => {
        setComponet(component)
    }
    return {
        show, hide , setContent
    }
}
export default usePopup