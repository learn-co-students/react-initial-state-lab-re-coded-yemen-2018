import React from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      secondsLeft: props.initialCount

    }

  }
  render(){
    let title;
    if(this.state.secondsLeft === 0){
      title = 'Boom!';

    }else {
      title = `${this.state.secondsLeft} seconds left before I go boom!`;

    }
    return(
      <div>{title}</div>
    )
  }

}
