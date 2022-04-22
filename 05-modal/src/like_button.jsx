'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return `You liked this.`;
    }

    // return e(
    //   'button',
    //   {
    //     onClick: () => this.setState({ liked: true }),
    //   },
    //   'Like'
    // );
    //function above written in jsx
    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

const domContainer = document.querySelector('#like-btn-container-react');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

// const domContainer2 = document.querySelector('#like-btn-container-react2');
// ReactDOM.render(e(LikeButton), domContainer2);
