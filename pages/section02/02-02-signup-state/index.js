import { useState } from 'react';

export default function SignupStatePage() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ emailError, setEmailError ] = useState("No Error");

    function onChangeEmail(event) {
        setEmail(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onClickSignup(event) {
        console.log(email);
        console.log(password);

        if(email.includes("@") === false) {
            setEmailError("Please correct email address!");
        } else {
            alert('Success!');
        }

    }

    return (
        <>
            E-mail: <input type="text" onChange={onChangeEmail}/>
            <div>{emailError}</div>
            Password: <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>Sign Up</button>
        </>
    )
}