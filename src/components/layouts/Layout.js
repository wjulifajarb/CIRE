import React from "react";

import Rutas from "../../rutas/rutas";
import Footer from "../layouts/Footer"
import Header from "./Header"

const Layout = () =>{
    return(
        <div>
            <Header/>
            <div>
                <Rutas/>
            </div>

            <Footer/>
        </div>
    )
}

export default Layout;