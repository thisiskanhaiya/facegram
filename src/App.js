import './App.css';
import Home from './Components/Home';
import Navigationbar from './Components/NavigationBar/Navigationbar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';

function App() {
  return (
      <div className='all container'>
      
      <Navigationbar/>
      <Registration/>
      {/* <Login/> */}
      </div>
  );
}

export default App;
