import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SiteTheme } from "../App";
import Footer from "./Footer";

interface NotFoundProps {

}

const NotFound: FunctionComponent<NotFoundProps> = () => {
    let theme = useContext(SiteTheme)
    let navigate = useNavigate();
    return (<>
        <div className="background-box2 py-4" style={{ background: theme.background3 }}>
            <div className="container col-md-6 text-center">
                <h1 className="display-1" style={{ color: theme.color }}>404 Not Found</h1>
                <button className="btn btn-danger" onClick={() => navigate(-1)}>Return to Previous Page</button>
            </div>
        </div>
        <Footer />
    </>);
}

export default NotFound;