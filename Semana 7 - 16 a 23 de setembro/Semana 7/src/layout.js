import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="Pagina1">Página1</Link></li>
                    <li><Link to="Pagina2">Página2</Link></li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};

export default Layout;