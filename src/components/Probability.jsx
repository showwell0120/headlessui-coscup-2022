import React from 'react';

const run = () => ({
  random: Math.random(),
});

class Probability extends React.Component {
  state = run();

  handleClick = () => {
    this.setState(run);
  };

  render() {
    return this.props.children({
      rerun: this.handleClick,

      // By taking in a threshold property we can support
      // different odds!
      result: this.state.random < this.props.threshold,
    });
  }
}

export default Probability;
