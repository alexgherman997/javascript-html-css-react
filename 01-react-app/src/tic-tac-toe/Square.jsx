import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: null };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.player == null) {
              this.setState({ player: this.props.playerState });
              this.props.parentCallback();
            }
          }}
          className="square"
        >
          {this.state.player}
        </button>
      </div>
    );
  }
}

export default Square;
