import React, { useState } from 'react'
import './formStyle.css'


const Form = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')


    const validate = (e) => {
        e.preventDefault()
        if (username.length > 8) {
            setErrorUsername("")
            setUserColor("green")
        } else {
            setErrorUsername("Username must be 8 letters long")
            setUserColor("red");
        }
        if (email.includes('@gmail')) {
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail("Email must be @gmail");
            setEmailColor('red')
        }
        if (password.length > 8) {
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword("Weak Password : password must be greater then 8 letters")
            setPasswordColor('red')
        }
        if (confirmPassword !== '' && confirmPassword === password) {
            setErrorConfirmPassword("")
            setConfirmPasswordColor('green')
        } else {
            setErrorConfirmPassword("not matched with password")
            setConfirmPasswordColor('red')
        }
    }

    return (
        <div>
            <div className="card">
                <div className="card-image"></div>
                <form>
                    <input
                        type="text"
                        placeholder='Name'
                        style={{ borderColor: userColor }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p className='error'>{errorUsername}</p>
                    <input
                        type="text"
                        placeholder='email'
                        style={{ borderColor: emailColor }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className='error'>{errorEmail}</p>
                    <input type="text" placeholder='password'
                        style={{ borderColor: passwordColor }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='error'>{errorPassword}</p>
                    <input type="text" placeholder='Confirm password'
                        style={{ borderColor: confirmPasswordColor }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p className='error'>{errorConfirmPassword}</p>


                    <button className='submit-btn' onClick={validate}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form