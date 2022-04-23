import React from 'react';
import Square from './Square';

class Board extends React.Component {
  // TODO add array of 9 nulls for constructor for state and to find
  //the winner
  constructor(props) {
    super(props);
    this.state = { playerState: 'X' };
  }

  handleCallback = () => {
    this.setState({ playerState: this.state.playerState == 'X' ? 'O' : 'X' });
  };

  renderSquare(i) {
    return (
      <Square
        value={i}
        playerState={this.state.playerState}
        parentCallback={this.handleCallback}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.playerState}`;
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
}

export default Board;
