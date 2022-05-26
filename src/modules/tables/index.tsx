import React from 'react'
import { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";

const TablesListComponent = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default memo(TablesListComponent);
