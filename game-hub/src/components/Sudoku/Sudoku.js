import React from 'react';
import './Sudoku.css';
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku';

class Sudoku extends React.Component {
    state = {
        isStarted: false,
        sudokuValues: [],
        originalSudokuBoard: [
            Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9)
        ],
        sudokuBoard: [
            Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9)
        ]

    }

    isPlaying = e => {
        const start = !this.state.isStarted;
        this.setState({
            isStarted: start
        });
        this.setSudokuBoard();
        this.setSudoku();
    }

    Board = () => {
        return (
            <div className="container">
                <h1 className='text-center fw-bold mt-3'>Sudoku</h1>
                <div className="board text-center">
                    <button class="btn btn-warning text-center" onClick={this.isPlaying}>Finish Match</button>
                    <table className='text-center mt-4'>
                        <tbody>
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                                    return <tr key={rIndex} className={(row + 1) % 3 === 0 ?'bBorder': ''}>
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                                            return <td key={rIndex + cIndex} className={(col + 1) % 3 === 0 ?'rBorder': ''}>
                                                <input onChange={(e) => this.onCellChange(e, row, col)}
                                                
                                                    value={this.state.sudokuBoard[row][col]}
                                                    className='cell fw-bold'
                                                    disabled={this.state.originalSudokuBoard[row][col]}
                                                />
                                            </td>
                                        })}

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <div className="buttons mt-2">
                        <button className="btn btn-info" onClick={this.checkSudoku()}>
                            check
                        </button>
                        
                        <button className="btn btn-success ms-2">
                            Solve
                        </button>
                        <button className="btn btn-warning ms-2">
                            reset
                        </button>

                    </div>
                </div>
            </div>
        );

    }

    deepCopy(matrix) {
        return JSON.parse(JSON.stringify(matrix));
    }

    onCellChange(element, row, col) {
        var val = parseInt(element.target.value) || -1;
        var grid = this.deepCopy(this.state.sudokuBoard);
        if (val === -1 || val >= 1 && val <= 9) {
            grid[row][col] = val;
        }
        this.state.sudokuBoard = grid;
    }

    setSudokuBoard() {
        var sudoku = require('sudoku');
        const newBoard = sudoku.makepuzzle();
        for (let i = 0; i < newBoard.length; i++) {
            if (newBoard[i] === null) {
                this.state.sudokuValues.push(null);
            } else {
                this.state.sudokuValues.push(newBoard[i]);

            }
        }
        this.state.originalSudokuBoard = this.state.sudokuBoard;
    };

    checkSudoku(){

    }

    setSudoku() {
        let sudokuValues = [...this.state.sudokuValues];
        let sudoku = [];
        let aux = 0;
        for (let index = 1; index <= sudokuValues.length; index++) {
            if (index % 9 == 0) {
                sudoku.push(sudokuValues.slice(aux, index));
                aux = index;
            }
        }
        this.state.sudokuBoard = sudoku;
    }

    render() {


        return (
            this.state.isStarted ? this.Board() : <div class="d-grid gap-2 m-5"><button class="btn btn-primary pull-center" onClick={this.isPlaying}>Start to play</button></div>
        );
    }
}

export default Sudoku;