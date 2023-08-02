import { useFormik } from "formik";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup"
import { SiteTheme } from "../App";
import User from "../interfaces/User";
import { addCard } from "../services/cardServices";
import { successMsg } from "../services/feedbackServices";
import { getUserByEmail } from "../services/userServices";
import Footer from "./Footer";

interface NewCardProps {

}

const NewCard: FunctionComponent<NewCardProps> = () => {
    let [userInfo, setUserinfo] = useState<User>({
        id: 0,
        firstName: "",
        middleName: "",
        lastName: "",
        password: "",
        phone: "",
        email: "",
        image: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: 0,
        zip: 0,
        role: "",
    })
    useEffect(() => {
        getUserByEmail(JSON.parse(sessionStorage.getItem("userInfo") as string).email)
            .then((res) => {
                if (res.data.length) {
                    setUserinfo(res.data[0])
                }
            })
            .catch((err) => console.log(err))
    }, []);
    let theme = useContext(SiteTheme)
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { title: "", subtitle: "", description: "", phone: "", email: "", web: "", image: "", imageAlt: "", state: "", city: "", country: "", street: "", houseNumber: 0, zip: 0, },
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
            addCard({ ...values, userId: userInfo.id })
                .then((res) => {
                    { navigate("/") }
                    successMsg("Card Updated Succefully")
                })
                .catch((err) => console.log(err));
        }
    })
    return (<>
        <div className="background-box" style={{ background: theme.background3 }}>
            <div className="container col-md-4 text-center" >
                <form onSubmit={formik.handleSubmit}>
                    <h3 className="display-3" style={{ color: theme.color }}>AD<span style={{ color: theme.background2 }}>D C</span>ARD</h3>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Title</label>
                        {formik.touched.title && formik.errors.title && (
                            <p className="text-warning">{formik.errors.title}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="subtitle" onChange={formik.handleChange} value={formik.values.subtitle} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Subtitle</label>
                        {formik.touched.subtitle && formik.errors.subtitle && (
                            <p className="text-warning">{formik.errors.subtitle}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Description</label>
                        {formik.touched.description && formik.errors.description && (
                            <p className="text-warning">{formik.errors.description}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="phone" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Phone</label>
                        {formik.touched.phone && formik.errors.phone && (
                            <p className="text-warning">{formik.errors.phone}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Name"
                            name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Email</label>
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-warning">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="web" onChange={formik.handleChange} value={formik.values.web} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Web</label>
                        {formik.touched.web && formik.errors.web && (
                            <p className="text-warning">{formik.errors.web}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="image" onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Image</label>
                        {formik.touched.image && formik.errors.image && (
                            <p className="text-warning">{formik.errors.image}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="imageAlt" onChange={formik.handleChange} value={formik.values.imageAlt} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">ImageAlt</label>
                        {formik.touched.imageAlt && formik.errors.imageAlt && (
                            <p className="text-warning">{formik.errors.imageAlt}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="state" onChange={formik.handleChange} value={formik.values.state} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">State</label>
                        {formik.touched.state && formik.errors.state && (
                            <p className="text-warning">{formik.errors.state}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="city" onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">City</label>
                        {formik.touched.city && formik.errors.city && (
                            <p className="text-warning">{formik.errors.city}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="country" onChange={formik.handleChange} value={formik.values.country} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Country</label>
                        {formik.touched.country && formik.errors.country && (
                            <p className="text-warning">{formik.errors.country}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                            name="street" onChange={formik.handleChange} value={formik.values.street} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Street</label>
                        {formik.touched.street && formik.errors.street && (
                            <p className="text-warning">{formik.errors.street}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder="Name"
                            name="houseNumber" onChange={formik.handleChange} value={formik.values.houseNumber} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">House Number</label>
                        {formik.touched.houseNumber && formik.errors.houseNumber && (
                            <p className="text-warning">{formik.errors.houseNumber}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder="Name"
                            name="zip" onChange={formik.handleChange} value={formik.values.zip} onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Zip</label>
                        {formik.touched.zip && formik.errors.zip && (
                            <p className="text-warning">{formik.errors.zip}</p>
                        )}
                    </div>
                    <button type="submit" className="btn btn-success my-2 mt-3" disabled={!formik.isValid || !formik.dirty} style={{ color: theme.color2, background: theme.background2 }}> Add Card </button>
                </form>
                <button onClick={() => navigate(-1)} className="btn mb-4" style={{ color: theme.color, background: theme.background }}>Not Interested, Return Here <i className="fa-solid fa-arrow-pointer"></i></button>
            </div>
        </div>
        <Footer />
    </>);
}

export default NewCard;