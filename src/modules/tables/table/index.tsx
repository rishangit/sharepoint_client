import React from 'react'
import * as SC from '../tables.styled'
import HeaderComponent, { HeaderType } from "@modules/header";

const header: HeaderType = {
    title: "Table Lists",
    subTitle: "this is Table Lists sub title",
    // actions: <NewButton onClick={() => onclick()} />,
  };

const AddTableListComponent = () => {
    
    return (
        <SC.TableListWrapper>
            <HeaderComponent {...header}/>
            
        </SC.TableListWrapper>
    )
}

export default AddTableListComponent
