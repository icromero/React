import React from 'react';
import './Hangman.css';

class Hangman extends React.Component {
    Key = (letter) => {
        return (<div onClick={() => this.handleClick(letter)} className="letter">{letter}</div>)
    }

    Clue = (match='') => {
        return (<input type="text" className='clue' value={match} disabled />);
    }

    Letters = (letter) => {
        return (<li class="list-group-item">{letter}</li>);
    }
    Layout = () => {
        return (

            <div className="container">
                <h1 className='text-center fw-bold mt-3'>Hangman</h1>
                <div className="board text-center">
                    <button class="btn btn-warning text-center mb-3" onClick={this.isPlaying}>Finish Match</button>
                    <div className="row  d-flex justify-content-center">
                        <div className="col-12 col-sm-10">
                            <div className="d-flex flex-row justify-content-center align-items-center text-center">
                                {this.printClues()}
                            </div>
                            <h3 className='text-white mt-2'>Keyboard</h3>
                            <div className="keyboard d-flex flex-wrap flex-row justify-content-center align-items-center text-center">

                                {this.Key('a')}
                                {this.Key('b')}
                                {this.Key('c')}
                                {this.Key('d')}
                                {this.Key('e')}
                                {this.Key('f')}
                                {this.Key('g')}
                                {this.Key('h')}
                                {this.Key('i')}
                                {this.Key('j')}
                                {this.Key('k')}
                                {this.Key('l')}
                                {this.Key('m')}
                                {this.Key('n')}
                                {this.Key('ñ')}
                                {this.Key('o')}
                                {this.Key('p')}
                                {this.Key('q')}
                                {this.Key('r')}
                                {this.Key('s')}
                                {this.Key('t')}
                                {this.Key('u')}
                                {this.Key('v')}
                                {this.Key('w')}
                                {this.Key('x')}
                                {this.Key('y')}
                                {this.Key('z')}

                            </div>


                        </div>
                        <div className=" col-12 col-sm-2">
                            <h3 className='text-white mt-2'>Tries {this.state.mistake} of 6</h3>
                            <h3 className='text-white mt-2'>Used letter</h3>
                            <div className="history">
                                <ul class="list-group">
                                    {this.printUsedLetters()}
                                </ul>

                            </div>
                        </div>
                    </div>
                    {this.state.clue.join('') === this.state.word && (
                        <>
                            <p className='text-white'>Congratulations! you've guess</p>s
                            <button class="btn btn-primary pull-center" onClick={this.handleRestart}>Play again</button>
                        </>
                    )}
                    {this.state.mistake === 6 && (
                        <>
                            <p className='text-white'>Sorry, you've lose</p>s
                            <button class="btn btn-primary pull-center" onClick={this.handleRestart}>Play again</button>
                        </>
                    )}
                </div>
            </div>
        );

    }


    state = {
        isStarted: false,
        words: ['bee',
            'eagle',
            'antelope',
            'spider',
            'squirrel',
            'tuna',
            'ostrich',
            'owl',
            'goat',
            'camel',
            'zebra',
            'chimpanzee',
            'dolphin',
            'hedgehog',
            'seal',
            'garlic',
            'cod',
            'broccoli',
            'artichoke',
            'hazelnut'],
        clue: [],
        word: '',
        usedLetters: [],
        mistake: 0

    }

    setClue(clue) {
        const currentClue = clue;
        this.setState({
            clue: currentClue
        });
    }

    setUsedLetters(usedl) {
        const letters = usedl;
        this.setState({
            usedLetters: letters
        });
    }

    isPlaying = () => {
        const start = !this.state.isStarted;
        const ran = parseInt(Math.random() * 20);
        const word = this.state.words[ran];
        this.setState({
            isStarted: start,
            word: word,
            clue: Array(word.length)
        });
    }

    addMistake() {
        const newCount = this.state.mistake + 1;
        this.setState({
            mistake: newCount
        });
    }

    handleClick = (letter) => {
        console.log(this.state.word)
        if (this.state.mistake < 6) {

            let usedLetters = [...this.state.usedLetters];
            let word = this.state.word;
            let clue = [...this.state.clue];
            if (usedLetters.includes(letter)) {
                alert("You've already mention that letter");
            } else {
                usedLetters.push(letter);
                if (word.includes(letter)) {
                    let index = this.lookMatch(word, letter);
                    for (let i = 0; i < index.length; i++) {
                        clue[index[i]] = letter;
                    }
                    this.setClue(clue);
                } else {
                    this.addMistake();
                }

            }
            this.setUsedLetters(usedLetters);
        }


    }
    handleRestart = () => {
        const ran = parseInt(Math.random() * 20);
        const word = this.state.words[ran];
        this.setState({
            isStarted: true,
            word: word,
            clue: Array(word.length),
            usedLetters: [],
            mistake: 0
        });

        this.setState({
            
        })
        this.Layout();
    }

    lookMatch(word, letter) {
        let words = word.split('');
        let index = [];
        let idx = words.indexOf(letter);
        while (idx != -1) {
            index.push(idx);
            idx = words.indexOf(letter, idx + 1);
        }

        return index;

    }

    printClues = () => {
        let elements = [];
        for (let i = 0; i < this.state.clue.length; i++) {
            elements.push(this.Clue(this.state.clue[i]));
        }
        return elements;
    }

    printUsedLetters = () => {
        let letters = [];
        if (this.state.usedLetters) {
            for (let i = 0; i < this.state.usedLetters.length; i++) {
                letters.push(this.Letters(this.state.usedLetters[i]));
            }
        }

        return letters;
    }

    render() {
        return (
            this.state.isStarted ? this.Layout() : <div class="d-grid gap-2 m-5"><button class="btn btn-primary pull-center" onClick={this.isPlaying}>Start to play</button></div>

        );
    }
}

export default Hangman;