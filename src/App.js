import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Exchanges from './pages/Exchanges';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/account' element={<Account />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
