import { Routes, Route } from 'react-router';
import { useState } from 'react';
import './App.css';

import { UserContext } from './contexts/userContext.js';

import Header from './components/header/header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import GameCatalog from './components/game-catalog/GameCatalog.jsx';
import Register from './components/register/Register.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';
import GameEdit from './components/game-edit/GameEdit.jsx';
import GameDetails from './components/game-details/GameDetails.jsx';
import Logout from './components/logout/Logout.jsx';

function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    }

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler }}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/games' element={<GameCatalog />} />
                        <Route path='/games/create' element={<GameCreate />} />
                        <Route path='/login' element={<Login onLogin={userLoginHandler} />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/games/:gameId/details' element={<GameDetails />} />
                        <Route path='/games/:gameId/edit' element={<GameEdit />} />
                    </Routes>

                </main>
            </div>
        </UserContext.Provider>
    )
}

export default App;
