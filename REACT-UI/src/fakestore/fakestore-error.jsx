import { Link } from "react-router-dom";


export function FakestoreError(){
    return(
        <div className="text-danger">
            <h2>Invalid Password</h2>
            <Link to="/login">Try again</Link>
        </div>
    )
}