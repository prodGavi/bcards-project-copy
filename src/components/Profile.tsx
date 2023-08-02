import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SiteTheme } from "../App";
import User from "../interfaces/User";
import { getUserByEmail } from "../services/userServices";
import Footer from "./Footer";

interface ProfileProps {

}

const Profile: FunctionComponent<ProfileProps> = () => {
    let theme = useContext(SiteTheme)
    let [userInfo, setUserinfo] = useState<User>()
    useEffect(() => {
        getUserByEmail(JSON.parse(sessionStorage.getItem("userInfo") as string).email)
            .then((res) => {
                if (res.data.length) {
                    setUserinfo(res.data[0])
                }
            })
            .catch((err) => console.log(err))
    }, []);
    return (<>
        <div className="background-box2" style={{ background: theme.background3 }}>
            <div className="container col-md-5 py-3" >
                <div className="card mx-3" style={{ background: theme.background }}>
                    <div className="row g-0">
                        <div className="col-md-4 text-center py-4">
                            <i className="fa-solid fa-user userIcon" style={{ color: theme.color }}></i>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title border-bottom border-white" style={{ color: theme.color }}>Hi, {userInfo?.firstName} {userInfo?.lastName}</h5>
                                <p className="card-text" style={{ color: theme.color }}><strong style={{ color: theme.color3 }}>User Email:</strong> "{userInfo?.email}"</p>
                                <p className="card-text" style={{ color: theme.color }}><strong style={{ color: theme.color3 }}>User Phone:</strong> "{userInfo?.phone}"</p>
                                <p className="card-text" style={{ color: theme.color }}><strong style={{ color: theme.color3 }}>User Role:</strong> "{userInfo?.role}"</p>
                                <p className="card-text" style={{ color: theme.color }}><strong style={{ color: theme.color3 }}>Profile Img Url:</strong> "{userInfo?.image}"</p>
                                <p className="card-text" style={{ color: theme.color }}><strong style={{ color: theme.color3 }}>User Address:</strong> {userInfo?.city}, {userInfo?.houseNumber} {userInfo?.street} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default Profile;