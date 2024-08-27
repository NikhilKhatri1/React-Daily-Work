import "./login.component.css";
export function LoginComponent() {
    return (
        <div className="login-container">
            <form className="login-form alert alert-warning alert-dismissible">
                <h2>User Login</h2>
                <button className="btn btn-close" data-bs-dismiss="alert"></button>
                <dl>
                    <dt>User Name:</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password:</dt>
                    <dd><input type="text" className="form-control" /></dd>
                </dl>
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}