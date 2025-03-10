import { Routes, Route } from 'react-router';
import { useState } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Home from './components/home/Home.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                
            </main>
        </div>
    )
}

export default App
