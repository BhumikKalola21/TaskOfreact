import { Route, Routes } from 'react-router-dom'
import TheDashboard from "./components/UI/TheDashboard"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TheGoogle from "./components/Auth/TheGoogle";
import { useEffect } from 'react';
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import { gapi } from 'gapi-script';
import LinkedInPage from "./components/Auth/LinkedInPage";

const clientId = "342648894086-0bga0to8lja5ki630hd6gqi7caadn7ke.apps.googleusercontent.com"
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  });
  return (
    <>

      <Routes>
        <Route path="/" element={< LinkedInPage />} />
        <Route exact path="/linkedin" element={<LinkedInCallback />} />
        <Route path="/dashboard" element={< TheDashboard />} />
        <Route path="/google" element={< TheGoogle /> }/>
      </Routes>
    </>
  );
}

export default App;
