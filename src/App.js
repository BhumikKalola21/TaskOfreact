import { Route,Routes } from 'react-router-dom'
import TheDashboard from "./components/UI/TheDashboard"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TheGoogle from "./components/Auth/TheGoogle";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
// import TheLinkedin from "./components/Auth/TheLinkedin";

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
        <Route path="/" element={< TheGoogle /> }/>
        <Route path="/dashboard" element={< TheDashboard /> }/>
      </Routes>
    </>
  );
}

export default App;
