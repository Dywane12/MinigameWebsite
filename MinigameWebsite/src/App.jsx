import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Game from './components/Game';

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='game' element={<Game />} />
            </Routes>
        </div>
    );
}

export default App;