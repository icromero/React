import React from 'react';
import './Tictactoe.css';


class Tictactoe extends React.Component {
        state = {
            isStarted: false,
            turn: 'X',
            board: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
            winner: ''

        }

        isPlaying = e => {
            const start = !this.state.isStarted;
            this.setState({
                isStarted: start
            });
        }
        handleClick = (row, col) => {
            if (this.state.board[col][row] !== null) {
                alert('The box is already mark');
                return;
            }
            let board = [...this.state.board];
            if (this.state.turn === 'X') {
                this.setTurn('O');
                board[col][row] = 'X';
            } else {
                this.setTurn('X');
                board[col][row] = 'O';
            }

            this.lookWinner(board);
            this.setCells(board);
        }

        handleRestart = () => {
            this.setWinner('');
            this.setCells([
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]);
            this.setTurn('X');
        }

        setTurn = (turn) => {
            const newTurn = turn;
            this.setState({
                turn: newTurn
            });
        }
        setCells = (playingBoard) => {
            const partyBoard = playingBoard;
            this.setState({
                board: partyBoard
            });
        }

        setWinner = (winner) => {
            const theWinner = !this.state.isWinner;
            this.setState({
                isWinner: theWinner,
                winner: winner
            });
        }

        Box = (col, row) => {
            return ( < div onClick = {
                    () => this.handleClick(col, row) }
                className = "col-3 m-2 board__box" > { this.state.board[row][col] } < /div>)
            }
            Board = () => {
                return (

                    <
                    div className = "container" >
                    <
                    h1 className = 'text-center fw-bold' > Tic Tac Toe < /h1> <
                    div className = "board text-center" >
                    <
                    button class = "btn btn-warning text-center"
                    onClick = { this.isPlaying } > Finish Match < /button> <
                    div className = "row  d-flex justify-content-center" > { this.Box(0, 0) } { this.Box(0, 1) } { this.Box(0, 2) } <
                    /div> <
                    div className = "row d-flex justify-content-center" > { this.Box(1, 0) } { this.Box(1, 1) } { this.Box(1, 2) } <
                    /div> <
                    div className = "row d-flex justify-content-center" > { this.Box(2, 0) } { this.Box(2, 1) } { this.Box(2, 2) } <
                    /div> {
                        this.state.isWinner && ( <
                            >
                            <
                            p className = 'text-white' > The winner is { this.state.winner } < /p>s <
                            button class = "btn btn-primary pull-center"
                            onClick = { this.handleRestart } > Play again < /button> <
                            />
                        )
                    } <
                    /div> <
                    p > Turn: { this.state.turn } < /p>

                    <
                    /div>


                );

            }

            lookWinner = (board) => {
                let crossX = 0;
                let crossO = 0;
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (board[i][j] === 'X') {
                            crossX++;
                        }
                        if (board[i][j] === 'O') {
                            crossO++;
                        }
                    }
                    if (crossX === 3) {
                        this.setWinner('X');
                    } else {
                        crossX = 0;
                    }
                    if (crossO === 3) {
                        this.setWinner('O');
                    } else {
                        crossO = 0;
                    }
                }
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (board[j][i] === 'X') {
                            crossX++;
                        }
                        if (board[j][i] === 'O') {
                            crossO++;
                        }
                    }
                    if (crossX === 3) {
                        this.setWinner('X');
                    } else {
                        crossX = 0;
                    }
                    if (crossO === 3) {
                        this.setWinner('O');
                    } else {
                        crossO = 0;
                    }
                }
                for (let i = 0; i < 2; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (board[j][j] === 'X') {
                            crossX++;
                        }
                        if (board[j][j] === 'O') {
                            crossO++;
                        }
                    }
                    if (crossX === 3) {
                        this.setWinner('X');
                    } else {
                        crossX = 0;
                    }
                    if (crossO === 3) {
                        this.setWinner('O');
                    } else {
                        crossO = 0;
                    }
                }
                for (let i = 0; i < 3; i++) {
                    for (let j = 2; j <= 0; j--) {
                        if (board[j][j] === 'X') {
                            crossX++;
                        }
                        if (board[j][j] === 'O') {
                            crossO++;
                        }

                    }
                    if (crossX === 3) {
                        this.setWinner('X');
                    } else {
                        crossX = 0;
                    }
                    if (crossO === 3) {
                        this.setWinner('O');
                    } else {
                        crossO = 0;
                    }
                }





            }

            render() {
                return (
                    this.state.isStarted ? this.Board() : < div class = "d-grid gap-2 m-5" > < button class = "btn btn-primary pull-center"
                    onClick = { this.isPlaying } > Start to play < /button></div >

                );
            }
        }

        export default Tictactoe;