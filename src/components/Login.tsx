import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup"
import { SiteTheme } from "../App";
import { errorMsg, successMsg } from "../services/feedbackServices";
import { checkUser } from "../services/userServices";
import Footer from "./Footer";


interface LoginProps {
    setIsLoggedIn: Function
}

const Login: FunctionComponent<LoginProps> = (
    {
        setIsLoggedIn
    }
) => {
    let theme = useContext(SiteTheme)
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
        }),
        onSubmit: (values) => {
            checkUser(values)
                .then((res) => {
                    if (res.data.length) {
                        { navigate("/") }
                        setIsLoggedIn(true)
                        successMsg(`${values.email} Has Succesfully Logged In`);
                        sessionStorage.setItem(
                            "userInfo",
                            JSON.stringify({
                                email: res.data[0].email,
                                role: res.data[0].role,
                            })
                        );
                    } else {
                        errorMsg("Wrong User or Password");
                    }
                })
                .catch((error) => console.log(error))
        }
    })
    return (<>
        <div className="background-box2" style={{ background: theme.background3 }}>
            <div className="container col-md-4 text-center">
                <form onSubmit={formik.handleSubmit}>
                    <h3 className="display-3" style={{ color: theme.color }}>LO<span style={{ color: theme.background2 }}>GI</span>N</h3>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingInput">Email Address</label>
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-warning">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                        <label htmlFor="floatingPassword">Password</label>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-warning">{formik.errors.password}</p>
                        )}
                    </div>
                    <button type="submit" className="btn w-100 mt-3" style={{ color: theme.color2, background: theme.background2 }}>Login</button>
                </form>
                <button className="btn mt-2" style={{ color: theme.color, background: theme.background }} onClick={() => navigate("/register")}>
                    To Register</button>
            </div>
        </div>
        <Footer />
    </>);
}

export default Login;