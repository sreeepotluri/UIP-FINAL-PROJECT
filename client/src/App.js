import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Brands from "./components/pages/Brands.js";
import Regarding from "./components/pages/Regarding.js";
import Navbar from "./components/pages/Navbar.js";
import Login from "./components/pages/Login.js";
import Register from "./components/pages/Register.js";
import Profile from "./components/pages/Profile.js";
import { UserProvider } from './context/userContext';


const brands = [
  {
      id: 123,
      title: "Adidas"
  },
  {
      id: 456,
      title: "puma"
  },
  {
      id: 789,
      title: "Reebok"
  },
]



function App() {
  return (
    <div className="App">

    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Regarding />} />
          <Route path = "brands" element={<Brands brands={brands}/>}/>
          <Route path = "register" element={<Register />}/>
          <Route path = "login" element={<Login />}/>
          <Route path = "profile" element={<Profile />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </div>
  );
}

export default App;