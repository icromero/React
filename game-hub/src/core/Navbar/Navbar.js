import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><Link to="/" className='link'>Games-hub</Link></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="/" className='link'>Home</Link></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Games
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className='dropdown-item'> <Link to="/tictactoe" className='link-b'>Tictactoe</Link></li>
                  <li className='dropdown-item'> <Link to="/hangman" className='link-b'>Hangman</Link></li>
                  <li className='dropdown-item'> <Link to="/sudoku" className='link-b'>Sudoku</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;