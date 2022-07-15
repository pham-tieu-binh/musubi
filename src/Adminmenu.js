import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Menu1 from "./ServicesProvided/Menu1";
import Menu2 from "./ServicesProvided/Menu2";
import Menu3 from "./ServicesProvided/Menu3";
import Menu4 from "./ServicesProvided/Menu4";

export default function Adminmenu() {
    return (
        <div>
            <Routes>

                <Route path="/about" element={<Layout2 />}>
                    <Route path="/about/Adminmenu/Menu1" element={<Menu1 />} />
                    <Route path="/about/Adminmenu/Menu2" element={<Menu2 />} />
                    <Route path="/about/Adminmenu/Menu3" element={<Menu3 />} />
                    <Route path="/about/Adminmenu/Menu4" element={<Menu4 />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout2() {
    return (
        <div className="menu4">
            <ul>
                <li>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/about/Adminmenu/Menu1">訪問介護とは</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/about/Adminmenu/Menu2">ご利用までの流れ</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/about/Adminmenu/Menu3">利用料金 </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/about/Adminmenu/Menu4">事業所案内</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}