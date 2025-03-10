import { Routes, Route } from 'react-router';
import { useState } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import GameCatalog from './components/game-catalog/GameCatalog.jsx';
import Register from './components/register/Register.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';
import GameEdit from './components/game-edit/GameEdit.jsx';
import GameDetails from './components/game-details/GameDetails.jsx';

function App() {
    const [email, setEmail] = useState('');

    const userLoginHandler = (email) => {
        setEmail(email);
    }

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/games' element={<GameCatalog />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/login' element={<Login onLogin={userLoginHandler}/>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/games/:gameId/details' element={<GameDetails />} />
                    <Route path='/games/:gameId/edit' element={<GameEdit />} />
                </Routes>
                
            </main>
        </div>
    )
}

export default App
