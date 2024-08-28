import { useState } from "react";

export function Form() {
    const [form, setForm] = useState({
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
                            setForm({ ...form, firstName: e.target.value });
                        }}
                        className="form-control" style={{ height: "40px", width: "200px" }}
                        value={form.firstName}
                    />
                </label>
            </div>
            <div className="mb-3">
                <label className="d-flex align-items-center justify-content-between">
                    Last Name:
                    <input type="text"
                        onChange={e => {
                            setForm({ ...form, lastName: e.target.value })
                        }}
                        className="form-control" style={{ height: "40px", width: "200px" }}
                        value={form.lastName}
                    />
                </label>
            </div>
            <div className="mb-3">
                <label className="d-flex align-items-center justify-content-between">
                    Email:
                    <input type="text"
                        onChange={e => {
                            setForm({ ...form, Email: e.target.value })
                        }}
                        className="form-control" style={{ height: "40px", width: "200px" }}
                        value={form.Email}
                    />
                </label>
            </div>
            <div>
                <p>Name : {form.firstName} {form.lastName}</p>
                <p>Email : {form.Email}</p>
            </div>
        </div>
    )

}