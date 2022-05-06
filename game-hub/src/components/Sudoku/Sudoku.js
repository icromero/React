import React from 'react';
import './Sudoku.css';


class Sudoku extends React.Component {
    state = {
        isStarted: false,
        sudokuValues: [],
        originalSudokuBoard: [
            Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9)
        ],
        sudokuBoard: [
            Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9)
        ],
        sudokuSolution: [],
        isChecked: false,
        isSolved: false,
        isReset: false

    }

    isPlaying = (e) => {
        const start = !this.state.isStarted;
        this.setState({
            isStarted: start
        });
        this.setSudokuBoard();
        this.setSudoku(this.state.sudokuValues);
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
                                    return <tr key={rIndex} className={(row + 1) % 3 === 0 ? 'bBorder' : ''}>
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                                            return <td key={rIndex + cIndex} className={(col + 1) % 3 === 0 ? 'rBorder' : ''}>
                                                <input onChange={(e) => this.onCellChange(e, row, col)}
                                                    maxLength="1"
                                                    value={this.state.isSolved ? this.state.sudokuBoard[row][col] : this.state.sudokuBoard[row][col]}
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
                        <button className="btn btn-info" onClick={() => this.checkSudoku()} disabled={this.state.isSolved}>
                            check
                        </button>
                        {this.state.isChecked && (
                            <>
                                <button className="btn btn-success ms-2" onClick={() => this.solveSudoku()} >
                                    Solve
                                </button>
                                <button className="btn btn-warning ms-2" onClick={() => this.resetSudoku()}>
                                    reset
                                </button>
                            </>
                        )}


                    </div>
                </div>
            </div>
        );

    }

    deepCopy(matrix) {
        return JSON.parse(JSON.stringify(matrix));
    }

    onCellChange(element, row, col) {
        var val = parseInt(element.target.value);
        var grid = this.deepCopy(this.state.sudokuBoard);
        if ( val >= 0 && val < 9) {
            grid[row][col] = val;
        }
        this.state.sudokuBoard = grid;
    }

    checkSudoku() {
        console.log(this.state.sudokuSolution)
        this.setState({
            isChecked: true
        });
        const sudokuBoard = [...this.state.sudokuBoard];
        const sudokuSolvedValues = [...this.state.sudokuSolution];
        const sudokuBoardValues = [];
        var correct = 0;
        for (let i = 0; i < sudokuBoard.length; i++) {
            for (let j = 0; j < sudokuBoard[i].length; j++) {
                sudokuBoardValues.push(sudokuBoard[i][j])
            }
        }

        for (let i = 0; i < sudokuSolvedValues.length; i++) {
            if (sudokuSolvedValues[i] == sudokuBoardValues[i]) {
                correct++;
            }
        }
        if (correct === 81) {
            alert('Congratulations you are the winner')
        } else {
            alert("It's not correct, try again")
        }
    }
    solveSudoku() {
        this.setSudoku(this.state.sudokuSolution);
        this.setState({
            isSolved: true
        });


    }
    resetSudoku() {
        this.setSudokuBoard();
        this.setSudoku(this.state.sudokuValues);
        window.location.reload(false);

    }
    setSudokuBoard() {
        var sudoku = require('sudoku');
        const newBoard = sudoku.makepuzzle();
        const solved = sudoku.solvepuzzle(newBoard);
        this.state.sudokuSolution = solved;
        for (let i = 0; i < newBoard.length; i++) {
            if (newBoard[i] === null) {
                this.state.sudokuValues.push(null);
            } else {
                this.state.sudokuValues.push(newBoard[i]);

            }
        }
        this.state.originalSudokuBoard = this.state.sudokuBoard;

    };



    setSudoku(value) {
        let sudokuValues = value;
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