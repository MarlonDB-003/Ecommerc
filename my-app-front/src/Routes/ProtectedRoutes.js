import React from "react";
import Routering from "./routes";
import service from '../Service/conection';

const Service = new service();

const ProtectedRoutes = ({children}) => {
    const usuarioAutenticado = Service.usuarioAutenticado()
    return usuarioAutenticado ? children : <Routering/>
}

export default ProtectedRoutes;