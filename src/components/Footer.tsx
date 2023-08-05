import { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";
import { SiteTheme } from "../App";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    let theme = useContext(SiteTheme)
    return (<>
        <footer className="text-center footer" style={{ color: theme.color, background: theme.background }}>
            <div className="container pt-4">
                <section className="">
                    <Link
                        className="btn btn-link btn-floating btn-lg m-1 footerIcon"
                        to="https://www.facebook.com/profile.php?id=100007185407196"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{
                            color: theme.color
                        }}
                    ><i className="fab fa-facebook-f"></i></Link>
                    <Link
                        className="btn btn-link btn-floating btn-lg m-1 footerIcon"
                        to="https://twitter.com/prodgavii"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{
                            color: theme.color
                        }}
                    ><i className="fab fa-twitter"></i></Link>
                    <Link
                        className="btn btn-link btn-floating btn-lg m-1 footerIcon"
                        to="https://gaviport.netlify.app/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{
                            color: theme.color
                        }}
                    ><i className="fab fa-google"></i></Link>
                    <Link
                        className="btn btn-link btn-floating btn-lg m-1 footerIcon"
                        to="https://www.instagram.com/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{
                            color: theme.color
                        }}
                    ><i className="fab fa-instagram"></i></Link>
                    <Link
                        className="btn btn-link btn-floating btn-lg m-1 footerIcon"
                        to="https://github.com/prodGavi"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{
                            color: theme.color
                        }}
                    ><i className="fab fa-github"></i></Link>
                </section>
            </div>
            <div className="text-center p-3" style={{
                color: theme.color
            }}>
                © 2023 Copyright:
                <p className=""> Gavi Inc.</p>
            </div>
        </footer>
    </>);
}

export default Footer;