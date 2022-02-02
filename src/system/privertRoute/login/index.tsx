import { FC, ComponentType } from "react";
import { useLocation, Navigate, Route, Router } from "react-router-dom";

export interface PrivertRouteProps {
  component: any;
  path?: string;
}
const PrivateRoute: FC<PrivertRouteProps> = ({
  component:RouteComponent,
  ...rest
}: PrivertRouteProps) => {
  const location = useLocation();
  let session = localStorage.getItem("session");

  session = 'aa';
  if (!session) {
    localStorage.setItem("redirectPath", location.pathname);
  }

  console.log('session', session)
  console.log('rest', rest)

    return session ? (      
      <RouteComponent {...rest} />
    ) : (
      <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
