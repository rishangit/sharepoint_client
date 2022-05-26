import { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";


const ContentTpyesComponent = () => {

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default memo(ContentTpyesComponent);