import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import Footer from './Componenets/Footer/Footer';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home';
import Blog from './Componenets/Blog/Blog';
import Eror from './Componenets/Eror/Eror';
import Login from './Componenets/Login/Login';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/Profile' element={<Blog/>}/>
       <Route path='/eror404' element={<Eror/>} />
       <Route path="*" element={<Navigate to="/eror404"/> }  />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
