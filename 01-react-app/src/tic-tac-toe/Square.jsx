import React from 'react';

function Square(props) {
  return (
    <div>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
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
