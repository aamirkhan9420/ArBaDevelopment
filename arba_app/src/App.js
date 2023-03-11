
import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/routes/AllRoutes';

function App() {
  let location=useLocation()
  return (
    <div className="App">
      {
      location.pathname!="/login"&&location.pathname!="/signup"?
       <Navbar />:""
      }
     
       <AllRoutes />
    </div>
  );
}

export default App;
