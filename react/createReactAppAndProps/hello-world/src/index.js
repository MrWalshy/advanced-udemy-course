import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square, Board, & Game are 'React Component Classes'
function Square(props) {
    return (
        <button
            // Set class 'square-win' if isWinning is true
            className={"square " + (props.isWinning ? "square-win" : null)}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        // Passing a prop called value to the Square
        return <Square
            // props 'value' and 'onClick' are being passed down from Board to Square
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
            key={"Square " + i}
            // isWinning prop being passed down to Square
            // If winningSquares array includes i, then isWinning is true
            isWinning={this.props.winningSquares.includes(i)}
        />;
    }

    renderRow(n) {
        let row = [];

        for (let i = n; i < n + 3; i++) {
            row.push(this.renderSquare(i));
        }
        return row;
    }

    renderRows(squares) {
        let fullBoard = [];
        for (let i = 0; i < squares; i += 3) {
            fullBoard.push(<div className="board-row" key={"rowStartingSquare " + i}>
                    {this.renderRow(i)}</div>);
        }
        return fullBoard;
    }

    render() {
        return (
            <div>{this.renderRows(9)}</div>
        );
    }
}

class Game extends React.Component {
    // Setting the initial state
    // Square & Board component states are held in Game
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
            orderDescending: true
        };
    }

    handleClick(i) {
        const locations = [
            [1, 1],
            [2, 1],
            [3, 1],
            [1, 2],
            [2, 2],
            [3, 2],
            [1, 3],
            [2, 3],
            [3, 3]
        ];
        // Throws away the old future history if we 'go back in time'
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        // Creating a copy of squares and modifying that
        // Data change without mutation of the original object has many advantages
        const squares = current.squares.slice();
        // Check for win or if square clicked is not null
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            // concat() method doesn't mutate the original array
            history: history.concat([{
                squares: squares,
                location: locations[i]
            }]),
            // Update the current step, ensures the same move isn't showed after a new one is made
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            // Sets xIsNext to true if new stepNumber is even
            xIsNext: (step % 2) === 0
        });
    }

    handleHistoryOrder(event) {
        if (event.target.value.toLowerCase() === 'ascending') {
            this.setState({
                orderDescending: false
            })
        } else {
            this.setState({
                orderDescending: true
            })
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';

            return (
                // move is a unique identifier
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {move === this.state.stepNumber ? <b>{desc}</b> : desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner.player;
        // if all the squares at the current move do not include null
        } else if (!current.squares.includes(null)) {
            status = "Draw";
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    // Pass winningSquares prop down to Board
                    winningSquares={winner ? winner.line : []}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                
                <ol>{this.state.orderDescending ? moves : moves.reverse()}</ol>
                <select id="order" onChange={event => this.handleHistoryOrder(event)}>
                    <option value="descending">Descending</option>
                    <option value="ascending">Ascending</option>
                </select>
            </div>
        </div>
        );
    }
}

// Helper Function
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i = 0; i < lines.length; i++){
        // a, b, c are set to the values of the specified line
        const [a, b, c] = lines[i];
        // The first squares[a] is testing whether 'a' is equal to 'null'
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return { player: squares[a], line: [a, b, c]};
        }
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  