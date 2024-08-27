import { useState } from "react";

export function FormDemo() {
    const [User, setUser] = useState({ UserName: "", Age: "", City: "" });

    function handleUserName(e) {
        setUser(prevState => ({
            ...prevState,
            UserName: e.target.value
        }));
    }

    function handleAge(e) {
        setUser(prevState => ({
            ...prevState,
            Age: e.target.value
        }));
    }

    function handleSelect(e) {
        setUser(prevState => ({
            ...prevState,
            City: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(User);
        setUser({ UserName: "", Age: "", City: "" });
    }

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input
                            type="text"
                            value={User.UserName}
                            onChange={handleUserName}
                            id="username"
                        />
                    </dd>
                    <dt>Age</dt>
                    <dd>
                        <input
                            type="text"
                            value={User.Age}
                            onChange={handleAge}
                            id="age"
                        />
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select
                            value={User.City}
                            onChange={handleSelect}
                            id="city"
                        >
                            <option value="">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="HYD">HYD</option>
                        </select>
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
