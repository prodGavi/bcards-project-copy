import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup"
import { SiteTheme } from "../App";
import { successMsg } from "../services/feedbackServices";
import { addUser } from "../services/userServices";
import Footer from "./Footer";

interface RegisterProps {
    setIsLoggedIn: Function
}

const Register: FunctionComponent<RegisterProps> = ({
    setIsLoggedIn
}) => {
    let theme = useContext(SiteTheme)
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { firstName: "", middleName: "", lastName: "", password: "", phone: "", email: "", image: "", state: "", country: "", city: "", street: "", houseNumber: 0, zip: 0, role: "user" },
        validationSchema: yup.object({
            firstName: yup.string().required().min(2),
            middleName: yup.string().min(2),
            lastName: yup.string().required().min(2),
            password: yup.string().required().min(8),
            phone: yup.string().required().min(10),
            email: yup.string().required().email(),
            image: yup.string().min(2),
            state: yup.string().min(2),
            country: yup.string().required().min(2),
            city: yup.string().required().min(2),
            street: yup.string().required().min(2),
            houseNumber: yup.number().required().min(1),
            zip: yup.number().required().min(5),
            role: yup.string().required().min(2),
        }),
        onSubmit: (values) => {
            addUser({ ...values })
                .then((res) => {
                    sessionStorage.setItem(
                        "userInfo",
                        JSON.stringify({
                            email: res.data.email,
                            role: res.data.role,
                        })
                    );
                    setIsLoggedIn(true)
                    { navigate("/") }
                    successMsg(`${values.email} has Succesfully Registered, Welcome!`);
                })
                .catch((error) => console.log(error))
        }
    })

    return (<>
        <div className="background-box" style={{ background: theme.background3 }}>
            <div className="container col-md-6 text-center">
                <form onSubmit={formik.handleSubmit}>
                    <h3 className="display-3" style={{ color: theme.color }}>REG<span style={{ color: theme.background2 }}>IST</span>ER</h3>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Firstname*</label>
                        {formik.touched.firstName && formik.errors.firstName && (
                            <p className="text-warning">{formik.errors.firstName}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="middleName" onChange={formik.handleChange} value={formik.values.middleName} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Middlename</label>
                        {formik.touched.middleName && formik.errors.middleName && (
                            <p className="text-warning">{formik.errors.middleName}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Lastname*</label>
                        {formik.touched.lastName && formik.errors.lastName && (
                            <p className="text-warning">{formik.errors.lastName}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingPassword">Password*</label>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-warning">{formik.errors.password}</p>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="phone" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Phone Number*</label>
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
                    <input
                        type="checkbox"
                        name="role"
                        value={formik.values.role}
                        checked={formik.values.role === "business"}
                        onChange={(e) => {
                            formik.setFieldValue("role", e.target.checked ? "business" : "user");
                        }}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="subscribeNews" className="mx-1">Sign up as Business</label>
                    <button type="submit" className="btn w-100 mt-3" style={{ color: theme.color2, background: theme.background2 }}>Register</button>
                </form>
                <button className="btn mt-2 mb-4" style={{ color: theme.color, background: theme.background }} onClick={() => navigate("/login")}>
                    Already Have an Account? Login Here</button>
            </div>
        </div>
        <Footer />
    </>);
}

export default Register;