import './index.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { Navbar } from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import Notes from './pages/Notes';

function App() {

  return (
    <div >
      <Navbar/>
      <Routes>
        <Route element={<PrivateRoutes/>} >
          <Route path='/notes' element={<Notes/>} />
        </Route>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
