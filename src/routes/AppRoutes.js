import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import Home from "../pages/home";
import Monitora from "../pages/monitoramento";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <LoginPage/> }  path="/" exact />
                <Route element = { <Home/> }  path="/home" />
                <Route element = { <Monitora/> }  path="/monitoramento" />
            </Routes>
        </BrowserRouter>
    )
 }
 
 export default Rotas;