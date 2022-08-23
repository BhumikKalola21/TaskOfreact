import { Route } from 'react-router-dom'
import TheDashboard from "./components/UI/TheDashboard"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TheGoogle from "./components/Auth/TheGoogle";
import TheLinkedin from "./components/Auth/TheLinkedin";
function App() {
  return (
    <>
      <Route path="">
      <TheGoogle/><TheLinkedin/>
      </Route>
      <Route path="/dashboard">
        <TheDashboard />
      </Route>
    {/* <TheLinkedin></TheLinkedin>  */}
    </>
  );
}

export default App;
