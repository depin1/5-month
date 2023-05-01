import { Route, Routes } from 'react-router';
import './App.css';
import Fatchdata from './Rescountry/Fatchdata/Fatchdata';
function App() {

  return (
    <>
      <Routes>
<Route element={<Fatchdata/>} path='/'/>
      </Routes>
    </>
  );
}

export default App;
