// import React, { useState } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import jwt_decode from "jwt-decode";
function LinkedInPage() {
    return (
        <LinkedIn
            clientId="77rbdule0j1zwa"
            redirectUri={`${window.location.origin}/linkedin`}
            onSuccess={(code) => {
                console.log("hii from login")
                console.log(code);
                console.log(jwt_decode(""));
            }}
            onError={(error) => {
                console.log(error);
            }}
        >
            {({ linkedInLogin }) => (
                <img
                    onClick={linkedInLogin}
                    src={linkedin}
                    alt="Sign in with Linked In"
                    style={{ maxWidth: '180px', cursor: 'pointer' }}
                />
            )}
        </LinkedIn>
    );
}
export default LinkedInPage;