import './App.css';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import Login from "./Component/Login"
import SignUp from './Component/SignUp';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element=<Login/> ></Route>
        <Route path="/signup" element=<SignUp/> ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
