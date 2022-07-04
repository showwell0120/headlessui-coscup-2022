import React from 'react';
import Probability from './Probability';

const flip = () => ({
  flipResults: Math.random(),
});

// Before Headless

const CoinFlipV0 = () =>
  Math.random() < 0.5 ? <div>Heads</div> : <div>Tails</div>;

const CoinFlipV1 = () =>
  Math.random() < 0.5 ? (
    <div>
      <img src="/heads.svg" alt="Heads" />
    </div>
  ) : (
    <div>
      <img src="/tails.svg" alt="Tails" />
    </div>
  );

const CoinFlipV2 = (
  // We'll default to false to avoid breaking the applications
  // current usage.
  { showLabels = false }
) =>
  Math.random() < 0.5 ? (
    <div>
      <img src="/heads.svg" alt="Heads" />

      {/* Add these labels for the marketing site. */}
      {showLabels && <span>Heads</span>}
    </div>
  ) : (
    <div>
      <img src="/tails.svg" alt="Tails" />

      {/* Add these labels for the marketing site. */}
      {showLabels && <span>Tails</span>}
    </div>
  );

class CoinFlipV3 extends React.Component {
  static defaultProps = {
    showLabels: false,
    // We don't repurpose `showLabels`, we aren't animals, after all.
    showButton: false,
  };

  state = flip();

  handleClick = () => {
    this.setState(flip);
  };

  render() {
    return (
      // Use fragments so people take me seriously.
      <>
        {this.props.showButton && (
          <button onClick={this.handleClick}>Reflip</button>
        )}
        {this.state.flipResults < 0.5 ? (
          <div>
            <img src="/heads.svg" alt="Heads" />
            {this.props.showLabels && <span>Heads</span>}
          </div>
        ) : (
          <div>
            <img src="/tails.svg" alt="Tails" />
            {this.props.showLabels && <span>Tails</span>}
          </div>
        )}
      </>
    );
  }
}

// Enter Headless

export class CoinFlipV4 extends React.Component {
  state = flip();

  handleClick = () => {
    this.setState(flip);
  };

  render() {
    return this.props.children({
      rerun: this.handleClick,
      isHeads: this.state.flipResults < 0.5,
    });
  }
}

export const CoinFlipV5 = ({ children }) => (
  <Probability threshold={0.5}>
    {({ rerun, result }) =>
      children({
        isHeads: result,
        rerun,
      })
    }
  </Probability>
);
