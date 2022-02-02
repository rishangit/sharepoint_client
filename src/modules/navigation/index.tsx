import { memo ,FC} from 'react';
import {NaviWrapper} from './navigation.styled';

const NavigationComponent:FC = ()=>{

    return <NaviWrapper>Main navigation </NaviWrapper>
}

export default memo(NavigationComponent)