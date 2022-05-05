import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className='bg-dark text-white text-center'>
                <div className="container-fluid">
                    <nav className="row">
                        <a href="#" className="col-12 col-md-3 fw-bold text-decoration-none text-center text-reset text-uppercase d-flex aling-items-center">
                            Game-Hub
                        </a>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="fw-bold text-uppercase ">Games</li>
                            <li ><Link to="/tictactoe" className='link'>Tictactoe</Link></li>
                            <li ><Link to="/hangman" className='link'>Hangman</Link></li>
                            <li ><Link to="/sudoku" className='link'>Sudoku</Link></li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="fw-bold text-uppercase ">Contact</li>
                            <li>Camino Zambrano, 824, 0º C</li>
                            <li>A Quintanilla</li>
                            <li>+34 665 66 7504</li>
                            <li>games.hub@hispavista.com</li>
                        </ul>
                        <ul className="col-12 col-md-3  list-unstyled">
                            <li className="fw-bold text-uppercase ">Social Media</li>
                            <li>
                                <li ><a href="#" className="text-decoration-none text-reset">Facebook</a></li>
                                <li ><a href="#" className="text-decoration-none text-reset">Twitter</a></li>
                                <li ><a href="#" className="text-decoration-none text-reset">Instagram</a></li>
                            </li>
                        </ul>
                    </nav>
                </div>

            </footer>
        );
    }
}

export default Footer;