import { FunctionComponent, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SiteTheme } from "../App";
import { successMsg } from "../services/feedbackServices";

interface NavbarProps {
    isLoggedIn: any;
    setIsLoggedIn: Function;
}

const Navbar: FunctionComponent<NavbarProps> = ({
    isLoggedIn, setIsLoggedIn
}) => {
    let navigate = useNavigate()
    let theme = useContext(SiteTheme)
    return (<>
        <nav className="navbar navbar-expand-lg" style={{ color: theme.color, background: theme.background }}>
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand navBarLogo" style={{ color: theme.color3 }}>G<i className="fa-solid fa-circle-down" style={{ color: theme.color }}></i>B<span style={{ color: theme.color }}>S</span></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: theme.color }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3 float-background" >
                            <NavLink className="nav-link active" aria-current="page" to="/about" style={{ color: theme.color }}>About</NavLink>
                        </li>
                        {isLoggedIn && <><li className="nav-item mx-3 float-background" >
                            <NavLink className="nav-link active" aria-current="page" to="/favorites" style={{ color: theme.color }}>Favorites</NavLink>
                        </li>
                            {(JSON.parse(sessionStorage.getItem("userInfo") as string).role == "admin" || JSON.parse(sessionStorage.getItem("userInfo") as string).role == "business") && <><li className="nav-item mx-3 float-background" >
                                <NavLink className="nav-link active" aria-current="page" to="/mycards" style={{ color: theme.color }}>Your Cards</NavLink>
                            </li>
                            </>}

                            {(JSON.parse(sessionStorage.getItem("userInfo") as string).role == "admin" || JSON.parse(sessionStorage.getItem("userInfo") as string).role == "business" || JSON.parse(sessionStorage.getItem("userInfo") as string).role == "user") && <><li className="nav-item mx-3" >
                                <NavLink className="nav-link active" aria-current="page" to="/profile" style={{ color: theme.color3 }} ><i className="fa-solid fa-user"></i> Profile</NavLink>
                            </li></>}


                        </>}
                    </ul>


                    {!isLoggedIn && <><form className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-1 float-background2" >
                                <NavLink className="nav-link active" aria-current="page" to="/login" style={{ color: theme.color3 }}><i className="fa-solid fa-arrow-right-to-bracket"></i> <strong>Login</strong></NavLink>
                            </li>
                            <li className="nav-item mx-1 float-background2" >
                                <NavLink className="nav-link active" aria-current="page" to="/register" style={{ color: theme.color3 }}><i className="fa-solid fa-user"></i> <strong>Register</strong></NavLink>
                            </li>
                        </ul>
                    </form></>}
                    {isLoggedIn && <><button className="btn btn-outline-secondary" style={{ color: theme.color3 }} onClick={() => {
                        setIsLoggedIn(false)
                        navigate("/")
                        sessionStorage.removeItem("userInfo")
                        successMsg("You Have Logged Out");
                    }}><i className="fa-solid fa-right-from-bracket"></i> Logout</button></>}
                </div>
            </div>
        </nav>

    </>);
}

export default Navbar;