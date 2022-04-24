import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      playerState: 'X',
      winner: false,
    };
    this.arraySquare = new Array(9).fill(null);
  }

  //TODO understand this approch, try using arrow function
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
    // this.state.squares[i] = 'X';
  }
  //   this.setState({ playerState: this.state.playerState == 'X' ? 'O' : 'X' });

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = !this.checkWinner()
      ? `Next player: ${this.state.playerState}`
      : `Winner: ${this.state.playerState == 'X' ? 'O' : 'X'}`;

    return (
      <div className="board">
        <div className="status">{status}</div>
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

  checkWinner = () => {
    if (!this.state.winner) {
      if (
        (this.arraySquare[0] == 'X' &&
          this.arraySquare[1] == 'X' &&
          this.arraySquare[2] == 'X') ||
        (this.arraySquare[0] == 'O' &&
          this.arraySquare[1] == 'O' &&
          this.arraySquare[2] == 'O')
      ) {
        this.state.winner = true;
      }
      if (
        (this.arraySquare[3] == 'X' &&
          this.arraySquare[4] == 'X' &&
          this.arraySquare[5] == 'X') ||
        (this.arraySquare[3] == 'O' &&
          this.arraySquare[4] == 'O' &&
          this.arraySquare[5] == 'O')
      ) {
        this.state.winner = true;
      }
      if (
        (this.arraySquare[6] == 'X' &&
          this.arraySquare[7] == 'X' &&
          this.arraySquare[8] == 'X') ||
        (this.arraySquare[6] == 'O' &&
          this.arraySquare[7] == 'O' &&
          this.arraySquare[8] == 'O')
      ) {
        this.state.winner = true;
      }
      if (
        (this.arraySquare[0] == 'X' &&
          this.arraySquare[3] == 'X' &&
          this.arraySquare[6] == 'X') ||
        (this.arraySquare[0] == 'O' &&
          this.arraySquare[3] == 'O' &&
          this.arraySquare[6] == 'O')
      ) {
        this.state.winner = true;
      }
      if (
        (this.arraySquare[1] == 'X' &&
          this.arraySquare[4] == 'X' &&
          this.arraySquare[7] == 'X') ||
        (this.arraySquare[1] == 'O' &&
          this.arraySquare[4] == 'O' &&
          this.arraySquare[7] == 'O')
      ) {
        this.state.winner = true;
      }
      if (
        (this.arraySquare[2] == 'X' &&
          this.arraySquare[5] == 'X' &&
          this.arraySquare[8] == 'X') ||
        (this.arraySquare[2] == 'O' &&
          this.arraySquare[5] == 'O' &&
          this.arraySquare[8] == 'O')
      ) {
        this.state.winner = true;
      }
      if (
        (this.arraySquare[0] == 'X' &&
          this.arraySquare[4] == 'X' &&
          this.arraySquare[8] == 'X') ||
        (this.arraySquare[0] == 'O' &&
          this.arraySquare[4] == 'O' &&
          this.arraySquare[8] == 'O')
      ) {
        this.state.winner = true;
      }
      if (
        (this.arraySquare[2] == 'X' &&
          this.arraySquare[4] == 'X' &&
          this.arraySquare[6] == 'X') ||
        (this.arraySquare[2] == 'O' &&
          this.arraySquare[4] == 'O' &&
          this.arraySquare[6] == 'O')
      ) {
        this.state.winner = true;
      }
    }
    return this.state.winner;
  };
  // handleCallback = () => {
  //   this.setState({ playerState: this.state.playerState == 'X' ? 'O' : 'X' });
  // };

  // onClick = i => {
  //   if (!this.arraySquare[i] && !this.winnerState) {
  //     this.arraySquare[i] = this.playerState;
  //   }
  //   this.setState({ playerState: this.state.playerState == 'X' ? 'O' : 'X' });

  //   return this.arraySquare[i];
  // };
}

export default Board;
