// your Bomb code here!

import React from 'react';
https://learn.co/tracks/re-coded-front-end-web-development/react/state-and-events/initial-state-lab#

class Bomb extends React.Component {

  constructor(props) {
    super(props) 

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    
    const content = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    
    return (
      <div>{content}</div>
    )
  }
}

export default Bomb;