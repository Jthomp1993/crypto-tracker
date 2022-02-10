import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Account from './pages/Account';
import SignUp from './pages/SignUp';
import Exchanges from './pages/Exchanges';
import Navbar from './components/layout/Navbar';
import SnackbarComponent from './components/layout/SnackbarComponent';

import { SnackbarProvider } from './context/SnackbarContext';
import { CoinsProvider } from './context/CoinsContext';

function App() {
  return (
    <BrowserRouter>
    <SnackbarProvider>
        <CoinsProvider>
            <Navbar />
            <SnackbarComponent />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exchanges' element={<Exchanges />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
            </CoinsProvider>
        </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
