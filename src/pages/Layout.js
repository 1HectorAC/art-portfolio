import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* Sider bar panel (Desktop version.) */}
            <div className="visibledesktop">
                <div className="sidePanel w-25 h-100">
                    <div className="sidePanelContent text-center">
                        <div className="mx-auto">
                            <img className="profileImage" src={require("../images/userImageSmall.jpg")}   alt=""></img>
                        </div>
                        <h3><i>Hector Acosta</i></h3>
                        <hr style={{ color: "white" }} />
                        <NavLink className={({ isActive }) => isActive ? "btn activeButton1" : "btn inactiveButton1"}  to="/">
                            Gallery
                        </NavLink><br />
                        <NavLink className={({ isActive }) => isActive ? "btn activeButton1" : "btn inactiveButton1"} to="/About" >
                            About
                        </NavLink><br />
                        <NavLink className={({ isActive }) => isActive ? "btn activeButton1" : "btn inactiveButton1"}  to="/Contact">
                            Contact
                        </NavLink><br />
                        <hr style={{ color: "white" }} />
                        <p><i>Website by: Hector Acosta</i></p>
                    </div>
                </div>
            </div>

            {/* Sider bar panel (Mobile version.) */}
            <div className="visibledevice text-center mobileSidePanel">
                <br />
                <div className="mx-auto">
                <img className="profileImage" src={require("../images/userImageSmall.jpg")}   alt=""></img>
                </div>
                <h3><i>Hector Acosta</i></h3>
                <hr />
                <p><i>Website by: Hector Acosta</i></p>
            </div>
            <div className="visibledevice sticky-top container">
                <div className="smallNavbar">
                    <div className="row text-center">
                        <div className="col-4">
                        <NavLink className={({ isActive }) => isActive ? "btn activeButton1v2" : "btn inactiveButton1v2"} to="/" exact="true">
                            Gallery
                        </NavLink>
                        </div>
                        <div className="col-4">
                        <NavLink className={({ isActive }) => isActive ? "btn activeButton1v2" : "btn inactiveButton1v2"} to="/About" exact="true">
                            About
                        </NavLink>
                        </div>
                        <div className="col-4">
                        <NavLink className={({ isActive }) => isActive ? "btn activeButton1v2" : "btn inactiveButton1v2"} to="/Contact" exact="true">
                            Contact
                        </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
};
export default Layout;