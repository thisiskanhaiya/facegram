import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navigationbar from './Components/NavigationBar/Navigationbar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';

function App() {
  return (
    
    <div className='all container'>
      <Navigationbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>} />
    </Routes>
    </div>
 
  );
}

export default App;
