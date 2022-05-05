import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="subscription d-flex flex-column justify-content-center align-items-center">
                    <h1 className='subscription__title text-white text-center'>Welcome to Game-Hub!</h1>
                    <h2 className='subscription__title text-white text-center'>Subscribe now</h2>
                    <div className="subscription__form">
                        <form action="" className="d-flex flex-row form-inline flex-column flex-sm-row">
                            <div className="form-group me-sm-2">
                                <input type="text" placeholder='Name' className="form-control" />
                            </div>
                            <div className="form-group me-sm-2">
                                <input type="text" placeholder='Email' className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className='btn btn-primary' value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main mt-5">
                    <div className="row">
                        <div class="card col-12 col-sm-6 col-md-4 mb-3">
                            <div className="tictactoe mt-3"></div>
                            <div class="card-body ">
                                <h5 class="card-title">Tic tac toe</h5>
                                <p class="card-text">A game played on a piece of paper in which two players write either O or X in a pattern of nine squares. It is won by the first player who places three Os or three Xs in a straight line.</p>
                                <Link to="/tictactoe">Let's Play it!</Link>
                            </div>
                        </div>
                        <div class="card col-12 col-sm-6 col-md-4 mb-3">
                        <div className="hangman mt-3"></div>
                            <div class="card-body ">
                                <h5 class="card-title">Hangman</h5>
                                <p class="card-text">A game for two in which one player tries to guess the letters of a word, the other player recording failed attempts by drawing a gallows and someone hanging on it, line by line.</p>
                                <Link to="/hangman">Let's Play it!</Link>
                            </div>
                        </div>
                        <div class="card col-12 col-sm-6 col-md-4 mb-3">
                        <div className="sudoku mt-3"></div>
                            <div class="card-body">
                                <h5 class="card-title">Sudoku</h5>
                                <p class="card-text">A game puzzle in which missing numbers are to be filled into a 9 by 9 grid of squares which are subdivided into 3 by 3 boxes so that every row, every column, and every box contains the numbers 1 through 9.</p>
                                <Link to="/sudoku">Let's Play it!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;