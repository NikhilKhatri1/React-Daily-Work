import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function FakestoreLogin(){


    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password:''
        },
        onSubmit:(user)=>{
            if(user.Password==="admin"){
                setCookie('userid', user.UserId, { expires: new Date('2024-09-19') });
                navigate("/");
            } else {
                navigate("/error");
            }
        }
    })

    return(
        <div>
           <form className="w-25" onSubmit={formik.handleSubmit}>
            <h3>User Login</h3>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" name="UserId" onChange={formik.handleChange} className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" onChange={formik.handleChange} className="form-control" /></dd>
            </dl>
            <button type="submit" className="btn btn-warning w-100">Login</button>
           </form>
           <div>
             <Link to="/">Home</Link>
           </div>
        </div>
    )
}