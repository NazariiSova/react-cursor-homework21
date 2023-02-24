import React from "react";
import Nav from "../components/Nav";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";


import SingInPage from "../pages/SingIn/SingIn.page";
import SingUpPage from "../pages/SingUp/SingUp.page";

const Routes = () => {
    return(
    <div>
        <Nav />
        <ReactRouterRoutes>
            <Route path="/SingIn" element={<SingInPage/>} />
            <Route path="/SingUp" element={<SingUpPage/>} />
        </ReactRouterRoutes>
    </div>
    );
};

export default Routes;