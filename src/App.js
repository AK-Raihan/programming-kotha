import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
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
        </Routes>
 
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
