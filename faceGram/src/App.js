import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import Home from './Components/Home';
import Navigationbar from './Components/NavigationBar/Navigationbar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';

function App() {
  return (
    
    <div className='container all'>
      <Navigationbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>} />
      <Route path='/add' element={<Add/>} />
    </Routes>
    </div>
 
  );
}

export default App;
