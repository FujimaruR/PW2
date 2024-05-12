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
import PerfilUser from "./pages/PerfilUser";
import LandingPage from "./pages/LandingPage";
import AgregarJuego from "./pages/AgregarJuego";
import EditarJuego from "./pages/EditarJuego";
import DetallesJuego from "./pages/DetallesJuego";
import BusquedaUsuario from "./pages/BusquedaUsuario";
import BusquedaAdmin from "./pages/BusquedaAdmin";
import ListaJuegos from "./pages/ListaJuegos";
import DetallesUsuario from "./pages/DetallesUsuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
            <Route exact path="/Register" element={<Register />}/>
            <Route exact path="/EditPerfil" element={<EditPerfil />}/>
            <Route exact path="/VoteReview" element={<VoteReview />}/>
            <Route exact path="/CreateReview" element={<CreateReview />}/>
            <Route exact path="/Perfil_user" element={<Perfil_user/>}/>
            <Route exact path="/PerfilUser" element={<PerfilUser/>}/>
            <Route exact path="/LandingPage" element={<LandingPage />}/>
            <Route exact path="/AgregarJuego" element={<AgregarJuego />}/>
            <Route exact path="/EditarJuego" element={<EditarJuego />}/>
            <Route exact path="/DetallesJuego" element={<DetallesJuego />}/>
            <Route exact path="/BusquedaUsuario" element={<BusquedaUsuario />}/>
            <Route exact path="/BusquedaAdmin" element={<BusquedaAdmin />}/>
            <Route exact path="/ListaJuegos" element={<ListaJuegos />}/>
            <Route exact path="/DetallesUsuario" element={<DetallesUsuario />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
