import { Slide, CodePane, FlexBox } from 'spectacle';

const HeadlessCoinFlip2 = () => (
  <Slide>
    <FlexBox height="100%">
      <CodePane language="jsx">
        {`
// UI is wrapped into the headless component and access logic via parameters.

export const CoinFlipV4 = ({ showLabels = false, showButton = false }) => (
  <CoinFlipLogic>
    {({ rerun, isHeads }) => (
      <>
        {showButton && <button onClick={rerun}>Reflip</button>}
        <button onClick={rerun}>Reflip</button>
        {isHeads ? (
          <div>
            <img src={HeadsCoin} alt="Heads" />
            {showLabels && <span>Heads</span>}
          </div>
        ) : (
          <div>
            <img src={TailsCoin} alt="Tails" />
            {showLabels && <span>Tails</span>}
          </div>
        )}
      </>
    )}
  </CoinFlipLogic>
);
`}
      </CodePane>
    </FlexBox>
  </Slide>
);

export default HeadlessCoinFlip2;
