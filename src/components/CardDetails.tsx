import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SiteTheme } from "../App";
import Card from "../interfaces/Card";
import { getCardById } from "../services/cardServices";
import Footer from "./Footer";

interface CardDetailsProps {

}

const CardDetails: FunctionComponent<CardDetailsProps> = () => {
    let theme = useContext(SiteTheme)
    let { id } = useParams();
    let navigate = useNavigate();
    let [card, setCard] = useState<Card>({
        title: "",
        subtitle: "",
        description: "",
        phone: "",
        email: "",
        web: "",
        image: "",
        imageAlt: "",
        state: "",
        city: "",
        street: "",
        houseNumber: 0,
        zip: 0
    })
    useEffect(() => {
        // get product by id
        getCardById(Number(id))
            .then((res) => setCard(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (<>
        <div className="background-box2 pt-5" style={{ background: theme.background3 }}>
            <div className="card text-center col-md-10 mx-auto" >
                <div className="card-header" style={{ color: theme.color, background: theme.background2 }}>
                    {card.subtitle}
                </div>
                <div className="card-body" style={{ background: theme.background }}>
                    <h5 className="card-title" style={{ color: theme.color3 }}><strong>{card.title}</strong></h5>
                    <p className="card-text" style={{ color: theme.color }}>{card.description}</p>
                    <p className="card-text" style={{ color: theme.color }}>Get In Touch: "{card.email}" or by Phone "{card.phone}"</p>
                </div>
                <div className="card-footer" style={{ color: theme.color, background: theme.background2 }}>
                    Address: {card.city}, {card.street} {card.houseNumber}.
                    <br />
                    <button onClick={() => navigate("/")} className="btn mt-2" style={{ color: theme.color, background: theme.background }}>Go Back</button>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default CardDetails;