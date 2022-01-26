import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import './App.css';
import { Button, ButtonProps } from '@primitives';
import AuthComponent from './modules/auth'
import  LoginComponent  from './modules/auth/login'

function App() {
  const btnHellowProps: ButtonProps = {
    themeColor: 'primary',
    disabled: true,
  };

  return (
    <BrowserRouter>
      {/* <Helmet>
        <title>AIRSTATE</title>
      </Helmet> */}
      <Routes>
        <Route path="/" element={<AuthComponent/>} >
        {/* <Route path="/login" element={<LoginComponent/>}/> */}
        {/* <Route path="/" component={MainComponent}></Route> */}
        {/* <PrivateRouteLoggedUser path="/" component={MainComponent} /> */}
            <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          } />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
