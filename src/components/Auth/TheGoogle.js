import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
const clientId = '342648894086-0bga0to8lja5ki630hd6gqi7caadn7ke.apps.googleusercontent.com'
const TheGoogle = () => {
    const [signIn, setSignIn] = useState(false)
    const navigate = useNavigate();
    const onSuccess = (res) => {
        console.log("login success", res.profileObj)
        if (res.profileObj) {
            setSignIn(true)
            navigate('/dashboard');
        }
    }
    const onFailure = (res) => {
        console.log("login fail", res)
    }
    return (
        <>
            <div id="signInButton">
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    // cookiePolicy={'single_host_origin'}
                    isSignedIn={signIn}
                />
            </div>
        </>
    )
}
export default TheGoogle;