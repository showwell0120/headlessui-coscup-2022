// article - https://www.merrickchristensen.com/articles/headless-user-interface-components

import { Text, FlexBox } from 'spectacle';

import React from 'react';
import { Probability } from './Probability';

import HeadsCoin from '../images/coin-heads.png';
import TailsCoin from '../images/coin-tail.png';

const flip = () => ({
  flipResults: Math.random(),
});

// Before Headless

export const CoinFlipV0 = () =>
  Math.random() < 0.5 ? <div>Heads</div> : <div>Tails</div>;

export const CoinFlipV1 = () =>
  Math.random() < 0.5 ? (
    <div>
      <img src={HeadsCoin} alt="Heads" />
    </div>
  ) : (
    <div>
      <img src={TailsCoin} alt="Tails" />
    </div>
  );

export const CoinFlipV2 = (
  // We'll default to false to avoid breaking the applications
  // current usage.
  { showLabels = false }
) =>
  Math.random() < 0.5 ? (
    <div>
      <img src={HeadsCoin} alt="Heads" />

      {/* Add these labels for the marketing site. */}
      {showLabels && <span>Heads</span>}
    </div>
  ) : (
    <div>
      <img src={TailsCoin} alt="Tails" />

      {/* Add these labels for the marketing site. */}
      {showLabels && <span>Tails</span>}
    </div>
  );

export const CoinFlipV3 = ({ showLabels = false, showButton = false }) => {
  const [state, setState] = React.useState(flip());

  const handleClick = () => setState(flip());

  return (
    <FlexBox>
      {showButton && (
        <button
          onClick={handleClick}
          style={{ width: 120, height: 64, fontSize: 30, marginRight: 120 }}
        >
          Reflip
        </button>
      )}
      {state.flipResults < 0.5 ? (
        <FlexBox>
          <img src={HeadsCoin} alt="Heads" width={72} />
          {showLabels && (
            <Text fontSize={30}>
              Heads &nbsp;
              <span style={{ fontSize: 16 }}>({state.flipResults})</span>
            </Text>
          )}
        </FlexBox>
      ) : (
        <FlexBox>
          <img src={TailsCoin} alt="Tails" width={72} />
          {showLabels && (
            <Text fontSize={30}>
              Tails &nbsp;
              <span style={{ fontSize: 16 }}>({state.flipResults})</span>
            </Text>
          )}
        </FlexBox>
      )}
    </FlexBox>
  );
};

export class _CoinFlipV3 extends React.Component {
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
            <img src={HeadsCoin} alt="Heads" />
            {this.props.showLabels && <span>Heads</span>}
          </div>
        ) : (
          <div>
            <img src={TailsCoin} alt="Tails" />
            {this.props.showLabels && <span>Tails</span>}
          </div>
        )}
      </>
    );
  }
}

// Enter Headless

export const CoinFlipLogic = ({ children }) => {
  const [state, setState] = React.useState(flip());

  const handleClick = () => setState(flip());

  return children({
    rerun: handleClick,
    isHeads: state.flipResults < 0.5,
  });
};

export const CoinFlipV4 = ({ showLabels = false, showButton = false }) => (
  <CoinFlipLogic>
    {({ rerun, isHeads }) => (
      <FlexBox>
        {showButton && (
          <button
            onClick={rerun}
            style={{ width: 120, height: 64, fontSize: 30, marginRight: 120 }}
          >
            Reflip
          </button>
        )}
        {isHeads ? (
          <FlexBox>
            <img src={HeadsCoin} alt="Heads" width={72} />
            {showLabels && <Text fontSize={30}>Heads</Text>}
          </FlexBox>
        ) : (
          <FlexBox>
            <img src={TailsCoin} alt="Tails" width={72} />
            {showLabels && <Text fontSize={30}>Tails</Text>}
          </FlexBox>
        )}
      </FlexBox>
    )}
  </CoinFlipLogic>
);

export class _CoinFlipV4 extends React.Component {
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
