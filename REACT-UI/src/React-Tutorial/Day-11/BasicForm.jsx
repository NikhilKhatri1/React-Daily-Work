import { useState } from "react";
import { useFormik } from "formik";

export function FormDemo() {
    const [msg, setMsg] = useState([]);

    const formik = useFormik({
        initialValues: {
            UserName: "",
            Age: "",
            City: ""
        },
        onSubmit: (values) => {
            // Update the msg state with the new user data
            setMsg([...msg, values]);
            console.log(values);
            formik.resetForm(); // Optional: Reset the form after submission
        }
    });

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input
                            type="text"
                            name="UserName"
                            value={formik.values.UserName}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dt>Age</dt>
                    <dd>
                        <input
                            type="text"
                            name="Age"
                            value={formik.values.Age}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select
                            name="City"
                            value={formik.values.City}
                            onChange={formik.handleChange}
                        >
                            <option value="">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="HYD">HYD</option>
                        </select>
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h4>Submitted Data:</h4>
                <ul>
                    {msg.map((item, index) => (
                        <li key={index}>
                            <strong>UserName:</strong> {item.UserName}, <strong>Age:</strong> {item.Age}, <strong>City:</strong> {item.City}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
