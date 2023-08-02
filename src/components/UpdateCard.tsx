import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../interfaces/Card";
import { getCardById, updateCard } from "../services/cardServices";
import * as yup from "yup"
import { useFormik } from "formik";
import { SiteTheme } from "../App";
import { successMsg } from "../services/feedbackServices";
import Footer from "./Footer";

interface UpdateCardProps {

}

const UpdateCard: FunctionComponent<UpdateCardProps> = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        // get product by id
        getCardById(Number(id))
            .then((res) => setCard(res.data))
            .catch((err) => console.log(err));
    }, []);
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
    let formik = useFormik({
        initialValues: { title: card.title, subtitle: card.subtitle, description: card.description, phone: card.phone, email: card.email, web: card.web, image: card.image, imageAlt: card.imageAlt, state: card.state, city: card.city, country: card.country, street: card.street, houseNumber: card.houseNumber, zip: card.zip, userId: card.userId },
        enableReinitialize: true,
        validationSchema: yup.object({
            title: yup.string().required().min(2),
            subtitle: yup.string().required().min(2),
            description: yup.string().required().min(2),
            phone: yup.string().required().min(10),
            email: yup.string().required().email(),
            web: yup.string().required().min(2),
            image: yup.string().required().min(2),
            imageAlt: yup.string().required().min(2),
            state: yup.string().min(2),
            country: yup.string().required().min(2),
            city: yup.string().required().min(2),
            street: yup.string().required().min(2),
            houseNumber: yup.number().required().min(1),
            zip: yup.number().required().min(5),
        }),
        onSubmit: (values) => {
            updateCard(values, Number(id))
                .then((res) => {
                    { navigate("/") }
                    successMsg("Card Updated Succefully")
                })
                .catch((err) => console.log(err));
        }
    })
    let theme = useContext(SiteTheme)
    return (<>
        <div className="background-box" style={{ background: theme.background3 }}>
            <div className="container col-md-6 text-center">
                <form onSubmit={formik.handleSubmit}>
                    <h3 className="display-3" style={{ color: theme.color }}>UPD<span style={{ color: theme.background2 }}>ATE</span> CARD</h3>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">title*</label>
                        {formik.touched.title && formik.errors.title && (
                            <p className="text-warning">{formik.errors.title}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="subtitle" onChange={formik.handleChange} value={formik.values.subtitle} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">subtitle</label>
                        {formik.touched.subtitle && formik.errors.subtitle && (
                            <p className="text-warning">{formik.errors.subtitle}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">description*</label>
                        {formik.touched.description && formik.errors.description && (
                            <p className="text-warning">{formik.errors.description}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="phone"
                            name="phone" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">phone*</label>
                        {formik.touched.phone && formik.errors.phone && (
                            <p className="text-warning">{formik.errors.phone}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Email*</label>
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-warning">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="image" onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Profile Image URL</label>
                        {formik.touched.image && formik.errors.image && (
                            <p className="text-warning">{formik.errors.image}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="imageAlt" onChange={formik.handleChange} value={formik.values.imageAlt} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Profile ImageAlt URL</label>
                        {formik.touched.imageAlt && formik.errors.imageAlt && (
                            <p className="text-warning">{formik.errors.imageAlt}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="state" onChange={formik.handleChange} value={formik.values.state} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">State</label>
                        {formik.touched.state && formik.errors.state && (
                            <p className="text-warning">{formik.errors.state}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="country" onChange={formik.handleChange} value={formik.values.country} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Country*</label>
                        {formik.touched.country && formik.errors.country && (
                            <p className="text-warning">{formik.errors.country}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="city" onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">City*</label>
                        {formik.touched.city && formik.errors.city && (
                            <p className="text-warning">{formik.errors.city}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="street" onChange={formik.handleChange} value={formik.values.street} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Street*</label>
                        {formik.touched.street && formik.errors.street && (
                            <p className="text-warning">{formik.errors.street}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" name="houseNumber" onChange={formik.handleChange} value={formik.values.houseNumber} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">House Number*</label>
                        {formik.touched.houseNumber && formik.errors.houseNumber && (
                            <p className="text-warning">{formik.errors.houseNumber}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" name="zip" onChange={formik.handleChange} value={formik.values.zip} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Zip Code*</label>
                        {formik.touched.zip && formik.errors.zip && (
                            <p className="text-warning">{formik.errors.zip}</p>
                        )}
                    </div>
                    <button type="submit" className="btn btn-success my-2 mt-3" disabled={!formik.isValid || !formik.dirty} style={{ color: theme.color2, background: theme.background2 }}>Update</button>
                </form>
                <button className="btn mt-2 mb-4" style={{ color: theme.color, background: theme.background }} onClick={() => navigate(-1)}>
                    Go Back</button>
            </div>
        </div>
        <Footer />
    </>);
}

export default UpdateCard;

