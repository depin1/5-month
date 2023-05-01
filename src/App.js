import { Route, Routes } from 'react-router';
import './App.css';
import Cards from './ComponetA/CArds/Cards';
import ComponetA from './ComponetA/Component/ComponetA';
function App() {

  return (
    <>
      <Routes>
       <Route element={<ComponetA/>} path='/'/>
       <Route element={<Cards/>} path='news/:id'/>
      </Routes>
    </>
  );
}

export default App;
