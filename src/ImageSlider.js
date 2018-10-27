// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex : 0
    }
  }

  render() {
    const sms =       `I am on slide ${this.state.currentSlideIndex}`;

    return (
      <div>
      {sms}
      </div>
    )
  }
}
