import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import Home from './Components/Home';
import Navigationbar from './Components/NavigationBar/Navigationbar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';
import Facegram from './Components/Facegram'

function App() {
  return (
    
    <div className='container all'>
      <Navigationbar/>
    <Routes>
      <Route path='/home' element={<Facegram/>}/>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>} />
      <Route path='/add' element={<Add/>} />
    </Routes>
    </div>
 
  );
}

export default App;
