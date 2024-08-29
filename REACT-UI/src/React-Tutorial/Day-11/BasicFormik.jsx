import { useFormik } from "formik";

export function BasicFormik() {
    function ValidateUser(formData) {
        var errors = { UserName: "" };
        if (formData.UserName.length === 0) {
            errors.UserName = 'User Name is Required';
        }
        else {
            if (formData.UserName.length < 4) {
                errors.UserName = 'User Name is Too Short';
            }
            else {
                errors.UserName = '';
            }
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            UserName: ''
        },
        validate: ValidateUser,
        onSubmit: (user) => {
            console.log(user);
        }
    })

    return (
        <div className="p-4 m-4">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input name="UserName" type="text" onChange={formik.handleChange} /></dd>
                    <dd>{formik.errors.UserName}</dd>
                </dl>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}