import { useState } from "react";

export function Form() {
    const [count, setCount] = useState({
        firstName: "Alice",
        lastName: "Bob",
        Email: 'AliceBob123@gmail.com'
    });

    return (
        <div className="w-25 m-4 p-4 border border-2">
            <div className="mb-3">
                <label className="d-flex align-items-center justify-content-between">
                    <p className="mt-2">First Name:</p>
                    <input type="text"
                        onChange={e => {
                            setCount({ ...count, firstName: e.target.value });
                        }}
                        className="form-control" style={{ height: "40px", width: "200px" }}
                    />
                </label>
            </div>
            <div className="mb-3">
                <label className="d-flex align-items-center justify-content-between">
                    Last Name:
                    <input type="text"
                        onChange={e => {
                            setCount({ ...count, lastName: e.target.value })
                        }}
                        className="form-control" style={{ height: "40px", width: "200px" }}
                    />
                </label>
            </div>
            <div className="mb-3">
                <label className="d-flex align-items-center justify-content-between">
                    Email:
                    <input type="text"
                        onChange={e => {
                            setCount({ ...count, Email: e.target.value })
                        }}
                        className="form-control" style={{ height: "40px", width: "200px" }}
                    />
                </label>
            </div>
        </div>
    )

}