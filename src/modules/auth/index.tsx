import React from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';
import LoginComponent from './login';


const AuthComponent = () => {
  return (
    <div>
      AuthComponent
     <Routes>
    <Route  path="login" element={<LoginComponent/>} />
      {/* <Route path="/register" component={RegisterComponent} /> */}
      {/* <Navigate  to={'/login'} />*/} 
    </Routes> 
    </div>
  );
};
export default AuthComponent;
