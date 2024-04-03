/*import logo from './logo.svg';*/
/*React*/
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import EditPerfil from "./pages/EditPerfil";
import VoteReview from "./pages/VoteReview";
import CreateReview from "./pages/CreateReview";
import Perfil_user from "./pages/Perfil_user";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
            <Route exact path="/Register" element={<Register />}/>
            <Route exact path="/Edit_user" element={<EditPerfil />}/>
            <Route exact path="/VoteReview" element={<VoteReview />}/>
            <Route exact path="/CreateReview" element={<CreateReview />}/>
            <Route exact path="/Perfil" element={<Perfil_user />}/>
            <Route exact path="/LandingPage" element={<LandingPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
