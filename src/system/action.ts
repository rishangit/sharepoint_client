import { useDispatch } from "react-redux";

export const SET_BUSSY = 'SET_BUSSY';
export const SET_NAVIGATION = 'SYSTEM/SET_NAVIGATION'

export const setBussy = (payload: any) => ({ type: SET_BUSSY, payload });
export const setNavigation = (payload: any) => ({ type: SET_NAVIGATION, payload });

