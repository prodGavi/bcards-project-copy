import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiteTheme } from "../App";
import Card from "../interfaces/Card";
import { deleteCard, getCards } from "../services/cardServices";
import { successMsg } from "../services/feedbackServices";
import Footer from "./Footer";


interface HomeProps {
    isLoggedIn: any;
}

const Home: FunctionComponent<HomeProps> = ({ isLoggedIn }) => {
    let navigate = useNavigate();
    let theme = useContext(SiteTheme)
    let [bCards, setBCards] = useState<Card[]>([])
    useEffect(() => {
        getCards()
            .then((res) => setBCards(res.data))
            .catch((error) => console.log(error));
    });
    let handleDelete = (id: number) => {
        if (window.confirm("Are you sure?")) {
            deleteCard(id)
                .then((res) => {
                    successMsg("Product deleted successfully!");
                })
                .catch((err) => console.log(err));
        }
    };
    return (<>
        <div className="background-box2" style={{ background: theme.background3 }}>
            {isLoggedIn && (JSON.parse(sessionStorage.getItem("userInfo") as string).role == "admin" || JSON.parse(sessionStorage.getItem("userInfo") as string).role == "business") && <button className="btn btn-success addCardBtn" onClick={() => navigate("/addcard")}><i className="fa-solid fa-plus"></i></button>}
            {bCards.length ? (
                <div className="container pt-2 text-center">
                    <h1 className="display-1 titleText" style={{ color: theme.color }}>WEL<span style={{ color: theme.background2 }}>COM</span>E!</h1>
                    <div className="row">
                        {bCards.map((card: Card) => (
                            <div
                                key={card.id}
                                className="card col-md-4 mx-2 text-center"
                                style={{ background: theme.background, width: "18rem", color: theme.color }}
                            >
                                <Link to={`carddetails/${card.id}`}>
                                    <img style={{ width: "14rem", height: "14rem" }}
                                        src={card.image}
                                        className="card-img-top imgHover"
                                        alt={card.title}
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-subtitle mb-2 border-bottom border-white pb-2">
                                        <strong>{card.title}</strong>
                                    </h5>
                                    <span className="card-text"><span style={{ color: theme.color3 }}><strong>Phone Number:</strong></span> {card.phone}</span>
                                    <br />
                                    <span className="card-text"><span style={{ color: theme.color3 }}><strong>Email:</strong></span> {card.email}</span>
                                </div>
                                {isLoggedIn &&
                                    <div className="text-start mb-3 ms-2">
                                        {(JSON.parse(sessionStorage.getItem("userInfo") as string).role == "admin") && (
                                            <><Link to={`updatecard/${card.id}`} className="btn btn-warning mx-2 me-">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </Link>
                                                <Link to="" className="btn btn-danger me-5"
                                                    onClick={() => handleDelete(card.id as number)}>
                                                    <i className="fa-solid fa-light fa-trash"></i>
                                                </Link>
                                                <Link to="" className="btn me-3">
                                                </Link>
                                            </>
                                        )}
                                        {(JSON.parse(sessionStorage.getItem("userInfo") as string).role == "admin" || JSON.parse(sessionStorage.getItem("userInfo") as string).role == "business" || JSON.parse(sessionStorage.getItem("userInfo") as string).role == "user") && <>
                                            <span className="container text-end">
                                                <Link to="" className="btn btn-dark">
                                                    <i className="fa-regular fa-heart"></i>
                                                </Link>
                                            </span>
                                        </>}

                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No products</p>
            )}
        </div>
        <Footer />
    </>);
}

export default Home;