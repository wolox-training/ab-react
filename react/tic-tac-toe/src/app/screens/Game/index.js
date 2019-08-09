import React, { Component } from 'react';

import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0,
    winner: ''
  }

  handleJumpTo = (stepNumber) => () => {
    this.setState({
      stepNumber,
      xIsNext: stepNumber % 2 === 0
    });
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleValue = (i) => () => {
    if (!this.state.winner) {
      this.setState((prevState) => {
        const { history, xIsNext } = prevState;
        const historyLength = history.length;
        const squares = history[historyLength - 1].squares.slice();
        if (squares[i]) {
          return null;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        const winner = this.calculateWinner(squares);
        return {
          winner,
          history: history.concat([{ squares }]),
          xIsNext: !xIsNext,
          stepNumber: historyLength
        };
      });
    }
  }

  render() {
    const { winner, history, stepNumber } = this.state;
    const { squares } = history[stepNumber];
    let status = '';
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    const moves = history.map((step, move) => {
      const desc = `${move ? `Go to move # ${move}` : 'Go to game start'}`;
      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          <button type="button" onClick={this.handleJumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board onClick={this.handleValue} squares={squares} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
