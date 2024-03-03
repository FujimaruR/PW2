/*import logo from './logo.svg';*/
/*React*/
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
            <Route exact path="/Register" element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
