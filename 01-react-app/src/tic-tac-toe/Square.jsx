import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="square" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      </div>
    );
  }
}

// render() {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           if (
//             !this.props.arraySquare[this.props.value] &&
//             this.props.winnerState == false
//           ) {
//             this.props.arraySquare[this.props.value] = this.props.playerState;
//             // this.setState({ player: this.props.playerState });
//             this.props.parentCallback();
//           }
//         }}
//         className="square"
//       >
//         {this.props.arraySquare[this.props.value]}
//       </button>
//     </div>
//   );
// }
//}

export default Square;
