import { Route, Routes } from 'react-router';
import './App.css';
import Practicing from './lesson-52/Forpracticing';
import Page from './Page/Page';
function App() {

  return (
    <div className="App">
    <Routes>
      <Route element={<Practicing/>} path='/'/>
      <Route path="/alpha/:ccn3" element={<Page />}/>
    </Routes>
    </div>
  );
}

export default App;
