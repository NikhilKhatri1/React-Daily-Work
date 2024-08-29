
import { useFormik } from "formik";

export function ConditionalForm() {

    function ValidateUser(formData) {
        var errors = { UserName: '', Age: '', City: '', Mobile: '' };

        if (formData.UserName.length === 0) {
            errors.UserName = 'User Name Required';
        } else {
            if (formData.UserName.length < 4) {
                errors.UserName = 'Name too short';
            } else {
                errors.UserName = ' ';
            }
        }

        if (formData.Age === "") {
            errors.Age = 'Age Required';
        } else {
            if (isNaN(formData.Age)) {
                errors.Age = 'Age must be a number';
            } else {
                errors.Age = ' ';
            }
        }

        if (formData.City === '-1') {
            errors.City = 'Please select your city';
        } else {
            errors.City = ' ';
        }

        if (formData.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = '';
        } else {
            errors.Mobile = 'Invalid Mobile';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            City: '',
            Mobile: ''
        },
        validate: ValidateUser,
        onSubmit: (user) => {
            console.log(user);
        }
    })

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}