import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';


import Navbar from './core/Navbar';
import Home from './components/Home';
import Footer from './core/Footer';
import Tictactoe from './components/Tictactoe/Tictactoe';
import Sudoku from './components/Sudoku/Sudoku';
import Hangman from './components/Hangman/Hangman';

function App() {
    return ( <
        div className = 'container-fluid' >
        <
        Navbar / >
        <
        h1 > Welcome to React Router! < /h1> <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/tictactoe"
        element = { < Tictactoe / > }
        /> <
        Route path = "/sudoku"
        element = { < Sudoku / > }
        /> <
        Route path = "/hangman"
        element = { < Hangman / > }
        /> <
        /Routes> <
        Footer / >
        <
        /div>
    );
}

export default App;