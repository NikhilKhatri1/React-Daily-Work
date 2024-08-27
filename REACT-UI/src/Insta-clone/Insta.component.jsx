import "./Insta.component.css"

export function Insta() {
    return (
        <div className="row lgn">

            <div className="col-7">
                <img src="instaimg.png" alt="" />
            </div>
            <div className="col-5 border border-1 login-container">
                <div className="logo">
                    <h2>Instagram</h2>
                </div>
                <div className="User-detail">
                    <input type="text" placeholder="Phone number, username, email" id="userName" className="form-control my-2" />
                    <input type="password" placeholder="Password" id="password" className="form-control my-2" />
                    <button className="btn btn-primary rounded rounded-3 w-100 my-3">Log in</button>
                </div>
                <div className="social">
                    <div className="row divider">
                        <div className="col-5 line"></div>
                        <div className="col-2 fw-semibold text-secondary">OR</div>
                        <div className="col-5 line"></div>
                    </div>
                    <p className="fw-bold text-primary mt-4"><span className="bi bi-facebook me-2"></span>Log in with Facebook</p>
                    <p className="p-forget">Forget Password?</p>
                </div>
                <div className="Signup">
                    
                </div>
            </div>
        </div>
    )
}












export function Body() {
    return (
        <div>
            <LoginComponent />
            {/* <ImageComponent /> */}
        </div>
    )
}