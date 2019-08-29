import React, { Component } from 'react';

import { calculateWinner } from '../../../../../utils/utils';
import { winnerLines } from '../../../../../constants/constants';

import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: true,
    stepNumber: 0,
    winner: ''
  };

  handleJumpTo = stepNumber => () => {
    this.setState({
      stepNumber,
      xIsNext: stepNumber % 2 === 0
    });
  };

  handleValue = i => () => {
    const { history, winner } = this.state;
    if (!winner) {
      const squares = [...history[history.length - 1].squares];
      if (!squares[i]) {
        this.setState(({ xIsNext }) => {
          squares[i] = xIsNext ? 'X' : 'O';
          return {
            winner: calculateWinner(squares, winnerLines),
            history: [...history, { squares }],
            xIsNext: !xIsNext,
            stepNumber: history.length
          };
        });
      }
    }
  };

  render() {
    const { winner, history, stepNumber, xIsNext } = this.state;
    const { squares } = history[stepNumber];
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    const moves = history.map((step, move) => {
      const desc = `${move ? `Go to move # ${move}` : 'Go to game start'}`;
      return (
        <li key={step.squares.toString()}>
          <button type="button" onClick={this.handleJumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    return (
      <div className={styles.game}>
        <Board onClick={this.handleValue} className={styles.gameBoard} squares={squares} />
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
