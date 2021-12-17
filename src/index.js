import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
  }
  
  class Board1 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
    }
  }
  
  class Board2 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0 + 9)}
              {this.renderSquare(1 + 9)}
              {this.renderSquare(2 + 9)}
            </div>
            <div className="board-row">
              {this.renderSquare(3 + 9)}
              {this.renderSquare(4 + 9)}
              {this.renderSquare(5 + 9)}
            </div>
            <div className="board-row">
              {this.renderSquare(6 + 9)}
              {this.renderSquare(7 + 9)}
              {this.renderSquare(8 + 9)}
            </div>
          </div>
        );
    }
  }
  
  class Board3 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0 + 9 * 2)}
              {this.renderSquare(1 + 9 * 2)}
              {this.renderSquare(2 + 9 * 2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3 + 9 * 2)}
              {this.renderSquare(4 + 9 * 2)}
              {this.renderSquare(5 + 9 * 2)}
            </div>
            <div className="board-row">
              {this.renderSquare(6 + 9 * 2)}
              {this.renderSquare(7 + 9 * 2)}
              {this.renderSquare(8 + 9 * 2)}
            </div>
          </div>
        );
    }
  }
  
  class Board4 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0 + 9 * 3)}
              {this.renderSquare(1 + 9 * 3)}
              {this.renderSquare(2 + 9 * 3)}
            </div>
            <div className="board-row">
              {this.renderSquare(3 + 9 * 3)}
              {this.renderSquare(4 + 9 * 3)}
              {this.renderSquare(5 + 9 * 3)}
            </div>
            <div className="board-row">
              {this.renderSquare(6 + 9 * 3)}
              {this.renderSquare(7 + 9 * 3)}
              {this.renderSquare(8 + 9 * 3)}
            </div>
          </div>
        );
    }
  }
  
  class Board5 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0 + 9 * 4)}
              {this.renderSquare(1 + 9 * 4)}
              {this.renderSquare(2 + 9 * 4)}
            </div>
            <div className="board-row">
              {this.renderSquare(3 + 9 * 4)}
              {this.renderSquare(4 + 9 * 4)}
              {this.renderSquare(5 + 9 * 4)}
            </div>
            <div className="board-row">
              {this.renderSquare(6 + 9 * 4)}
              {this.renderSquare(7 + 9 * 4)}
              {this.renderSquare(8 + 9 * 4)}
            </div>
          </div>
        );
    }
  }
  
  class Board6 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0 + 9 * 5)}
              {this.renderSquare(1 + 9 * 5)}
              {this.renderSquare(2 + 9 * 5)}
            </div>
            <div className="board-row">
              {this.renderSquare(3 + 9 * 5)}
              {this.renderSquare(4 + 9 * 5)}
              {this.renderSquare(5 + 9 * 5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6 + 9 * 5)}
              {this.renderSquare(7 + 9 * 5)}
              {this.renderSquare(8 + 9 * 5)}
            </div>
          </div>
        );
    }
  }
  
  class Board7 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0 + 9 * 6)}
              {this.renderSquare(1 + 9 * 6)}
              {this.renderSquare(2 + 9 * 6)}
            </div>
            <div className="board-row">
              {this.renderSquare(3 + 9 * 6)}
              {this.renderSquare(4 + 9 * 6)}
              {this.renderSquare(5 + 9 * 6)}
            </div>
            <div className="board-row">
              {this.renderSquare(6 + 9 * 6)}
              {this.renderSquare(7 + 9 * 6)}
              {this.renderSquare(8 + 9 * 6)}
            </div>
          </div>
        );
    }
  }
  
  class Board8 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0 + 9 * 7)}
              {this.renderSquare(1 + 9 * 7)}
              {this.renderSquare(2 + 9 * 7)}
            </div>
            <div className="board-row">
              {this.renderSquare(3 + 9 * 7)}
              {this.renderSquare(4 + 9 * 7)}
              {this.renderSquare(5 + 9 * 7)}
            </div>
            <div className="board-row">
              {this.renderSquare(6 + 9 * 7)}
              {this.renderSquare(7 + 9 * 7)}
              {this.renderSquare(8 + 9 * 7)}
            </div>
          </div>
        );
    }
  }
  
  class Board9 extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0 + 9 * 8)}
              {this.renderSquare(1 + 9 * 8)}
              {this.renderSquare(2 + 9 * 8)}
            </div>
            <div className="board-row">
              {this.renderSquare(3 + 9 * 8)}
              {this.renderSquare(4 + 9 * 8)}
              {this.renderSquare(5 + 9 * 8)}
            </div>
            <div className="board-row">
              {this.renderSquare(6 + 9 * 8)}
              {this.renderSquare(7 + 9 * 8)}
              {this.renderSquare(8 + 9 * 8)}
            </div>
          </div>
        );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(81).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      
      const moves = history.map((step, move) => {
          const desc = move ?
            'Go to move #' + move :
            'Go to game start';
          return (
              <li key={move}>
                  <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
          );
      });

      let status;
      if (winner) {
          status = 'Winner: ' + winner;
      } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
    
        
      return (
        <div className="game">
          <div className="game-board">
            <Board1
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            <Board2
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            <Board3
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            <Board4
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            <Board5
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            <Board6
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            <Board7
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            <Board8
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            <Board9
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

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
      [0 + 9, 1 + 9, 2 + 9],
      [3 + 9, 4 + 9, 5 + 9],
      [6 + 9, 7 + 9, 8 + 9],
      [0 + 9, 3 + 9, 6 + 9],
      [1 + 9, 4 + 9, 7 + 9],
      [2 + 9, 5 + 9, 8 + 9],
      [0 + 9, 4 + 9, 8 + 9],
      [2 + 9, 4 + 9, 6 + 9],
      [0 + 9 * 2, 1 + 9 * 2, 2 + 9 * 2],
      [3 + 9 * 2, 4 + 9 * 2, 5 + 9 * 2],
      [6 + 9 * 2, 7 + 9 * 2, 8 + 9 * 2],
      [0 + 9 * 2, 3 + 9 * 2, 6 + 9 * 2],
      [1 + 9 * 2, 4 + 9 * 2, 7 + 9 * 2],
      [2 + 9 * 2, 5 + 9 * 2, 8 + 9 * 2],
      [0 + 9 * 2, 4 + 9 * 2, 8 + 9 * 2],
      [2 + 9 * 2, 4 + 9 * 2, 6 + 9 * 2],
      [0 + 9 * 3, 1 + 9 * 3, 2 + 9 * 3],
      [3 + 9 * 3, 4 + 9 * 3, 5 + 9 * 3],
      [6 + 9 * 3, 7 + 9 * 3, 8 + 9 * 3],
      [0 + 9 * 3, 3 + 9 * 3, 6 + 9 * 3],
      [1 + 9 * 3, 4 + 9 * 3, 7 + 9 * 3],
      [2 + 9 * 3, 5 + 9 * 3, 8 + 9 * 3],
      [0 + 9 * 3, 4 + 9 * 3, 8 + 9 * 3],
      [2 + 9 * 3, 4 + 9 * 3, 6 + 9 * 3],
      [0 + 9 * 4, 1 + 9 * 4, 2 + 9 * 4],
      [3 + 9 * 4, 4 + 9 * 4, 5 + 9 * 4],
      [6 + 9 * 4, 7 + 9 * 4, 8 + 9 * 4],
      [0 + 9 * 4, 3 + 9 * 4, 6 + 9 * 4],
      [1 + 9 * 4, 4 + 9 * 4, 7 + 9 * 4],
      [2 + 9 * 4, 5 + 9 * 4, 8 + 9 * 4],
      [0 + 9 * 4, 4 + 9 * 4, 8 + 9 * 4],
      [2 + 9 * 4, 4 + 9 * 4, 6 + 9 * 4],
      [0 + 9 * 5, 1 + 9 * 5, 2 + 9 * 5],
      [3 + 9 * 5, 4 + 9 * 5, 5 + 9 * 5],
      [6 + 9 * 5, 7 + 9 * 5, 8 + 9 * 5],
      [0 + 9 * 5, 3 + 9 * 5, 6 + 9 * 5],
      [1 + 9 * 5, 4 + 9 * 5, 7 + 9 * 5],
      [2 + 9 * 5, 5 + 9 * 5, 8 + 9 * 5],
      [0 + 9 * 5, 4 + 9 * 5, 8 + 9 * 5],
      [2 + 9 * 5, 4 + 9 * 5, 6 + 9 * 5],
      [0 + 9 * 6, 1 + 9 * 6, 2 + 9 * 6],
      [3 + 9 * 6, 4 + 9 * 6, 5 + 9 * 6],
      [6 + 9 * 6, 7 + 9 * 6, 8 + 9 * 6],
      [0 + 9 * 6, 3 + 9 * 6, 6 + 9 * 6],
      [1 + 9 * 6, 4 + 9 * 6, 7 + 9 * 6],
      [2 + 9 * 6, 5 + 9 * 6, 8 + 9 * 6],
      [0 + 9 * 6, 4 + 9 * 6, 8 + 9 * 6],
      [2 + 9 * 6, 4 + 9 * 6, 6 + 9 * 6],
      [0 + 9 * 7, 1 + 9 * 7, 2 + 9 * 7],
      [3 + 9 * 7, 4 + 9 * 7, 5 + 9 * 7],
      [6 + 9 * 7, 7 + 9 * 7, 8 + 9 * 7],
      [0 + 9 * 7, 3 + 9 * 7, 6 + 9 * 7],
      [1 + 9 * 7, 4 + 9 * 7, 7 + 9 * 7],
      [2 + 9 * 7, 5 + 9 * 7, 8 + 9 * 7],
      [0 + 9 * 7, 4 + 9 * 7, 8 + 9 * 7],
      [2 + 9 * 7, 4 + 9 * 7, 6 + 9 * 7],
      [0 + 9 * 8, 1 + 9 * 8, 2 + 9 * 8],
      [3 + 9 * 8, 4 + 9 * 8, 5 + 9 * 8],
      [6 + 9 * 8, 7 + 9 * 8, 8 + 9 * 8],
      [0 + 9 * 8, 3 + 9 * 8, 6 + 9 * 8],
      [1 + 9 * 8, 4 + 9 * 8, 7 + 9 * 8],
      [2 + 9 * 8, 5 + 9 * 8, 8 + 9 * 8],
      [0 + 9 * 8, 4 + 9 * 8, 8 + 9 * 8],
      [2 + 9 * 8, 4 + 9 * 8, 6 + 9 * 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
