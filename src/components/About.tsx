import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SiteTheme } from "../App";
import Footer from "./Footer";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    let navigate = useNavigate()
    let theme = useContext(SiteTheme)
    return (<>
        <div className="background-box2 pt-5" style={{ background: theme.background3 }}>
            <div className="card text-center col-md-10 mx-auto" >
                <div className="card-header" style={{ color: theme.color, background: theme.background2 }}>

                </div>
                <div className="card-body" style={{ background: theme.background }}>
                    <h5 className="card-title p-4" style={{ color: theme.color3 }}>Welcome to <strong>"G.O.B.S."</strong> your one-stop platform for professionally designed business cards tailored to meet the needs of both potential employees and customers. Our website offers a place to help individuals and businesses make a lasting first impression. Whether you're a job seeker looking to showcase your skills and contact information or a company aiming to promote your brand, G.O.B.S. has got you covered.</h5>
                    <p className="card-text" style={{ color: theme.color }}>
                        G.O.B.S. caters to businesses looking to showcase their brand identity and leave a lasting impression on potential clients and partners. Our platform offers a place specifically designed for businesses, enabling them to incorporate their logo, company detail, and a compelling tagline to create a cohesive and professional representation of their brand. With the ability to add contac information and links to the company's website, businesses can easily direct interested parties to explore their products and services further.

                        G.O.B.S. takes pride in offering high-quality print services, ensuring that the final product matches the excellence of the chosen design.
                    </p>
                    <p className="card-text" style={{ color: theme.color3 }}>
                        In conclusion, G.O.B.S. serves as a comprehensive platform that caters to both job seekers and businesses, providing a diverse selection of customizable templates to create visually appealing and professional business cards. With a focus on design aesthetics, ease of use, and print quality, G.O.B.S. empowers individuals to make meaningful connections in their professional journey while assisting businesses in showcasing their brand identity to potential customers and partners. Step into the world of personalized networking and branding with G.O.B.S. – where impactful connections begin.
                    </p>
                </div>
                <div className="card-footer" style={{ color: theme.color, background: theme.background2 }}>
                    <div className="text-center" style={{
                        color: theme.color
                    }}>
                        © 2023 Copyright:
                        <p className=""> Gavi Inc.</p>
                    </div>
                    <button onClick={() => navigate("/")} className="btn mt-1" style={{ color: theme.color, background: theme.background }}>Go Back</button>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default About;