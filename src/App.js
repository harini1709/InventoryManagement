import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import Login from "./Component/Login"
import SignUp from './Component/SignUp';
import LandingPage from './Component/LandingPage';
import Dashboard from "./Component/Dashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element=<Login/> ></Route>
        <Route path="/signup" element=<SignUp/> ></Route>
        <Route path="/land" element=<LandingPage/> ></Route>
        <Route path="/dash" element=<Dashboard/> ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
