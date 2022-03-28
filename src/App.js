import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="">
      
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route> 
        </Routes>
 
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
