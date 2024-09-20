import { useEffect, useState } from "react"
import { DataGrid } from "./GridDemo";


export function ConditionalRendering() {

    const [signedIn, setSignedIn] = useState(false);
    const [layout, setLayout] = useState('');


    function handleSignIn() {
        setSignedIn(true);
    }
    function handleSignout() {
        setSignedIn(false);
    }

    function handleLayoutChange(e) {
        setLayout(e.target.value);
    }

    return (
        <div className="container-fluid">
            <nav className="d-flex justify-content-between p-2 mt-3">
                <div className="fs-5 fw-bold">Shopper.</div>
                {
                    (signedIn === true) ? <div className="fs-5">
                        <span className="mx-3">Home</span>
                        <span className="mx-3">Shop</span>
                        <span className="mx-3">Pages</span>
                        <span className="mx-3">Blog</span>
                    </div>
                        : <div></div>
                }
                <div>
                    {
                        (signedIn === true) ? <button onClick={handleSignout} className="btn btn-danger">Signout</button> : <button className="btn btn-primary" onClick={handleSignIn}>Signin</button>
                    }
                </div>
            </nav>
            <section className="mt-4">
                <div className="my-2">
                    <select onChange={handleLayoutChange} className="form-select w-25" >
                        <option>Select Layout</option>
                        <option value="grid">Grid</option>
                        <option value="card">Card</option>
                    </select>
                </div>
                <DataGrid layout={layout} fields={["Name", "Price"]} data={[{ Name: "Samsung TV", Price: 45000.44 }, { Name: "Mobile", Price: 13000.44 }]} />
            </section>
        </div>
    )
}