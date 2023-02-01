import './App.css';
import { Mensaje } from './Mensaje';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Principal } from './Principal';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Principal />} / >
        <Route path='/mensaje' element={<Mensaje />} / >
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
