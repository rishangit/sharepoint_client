import { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";


const GroupComponent = () => {

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default memo(GroupComponent);