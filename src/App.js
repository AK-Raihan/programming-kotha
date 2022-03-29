import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="">
      
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route> 
          <Route exact path={`/services`} element={<PrivateRoute><Services /> </PrivateRoute>}></Route>
          <Route path="/login" element={<Login />}>
          </Route> 
          <Route path="/register" element={<Register />}>
          </Route> 
        </Routes>
        <Footer/>
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
