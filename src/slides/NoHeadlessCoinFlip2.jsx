import { Slide, CodePane, Box } from 'spectacle';
import {
  CoinFlipV0,
  CoinFlipV1,
  CoinFlipV2,
  CoinFlipV3,
} from '../components/CoinFlip';

const NoHeadlessCoinFlip2 = () => (
  <Slide>
    <CodePane language="js">
      {`export const flip = () => ({
  flipResults: Math.random(),
});
`}
    </CodePane>
    <Box height={30}></Box>
    <Box height={320} overflow="scroll">
      <CodePane language="jsx" highlightRanges={[3, [4, 5], [9, 10]]}>
        {`
  // New requirement again! In another marketing page, users can reflip this coin.
  
  export const CoinFlipV3 = ({ showLabels = false, , showButton = false }) => {
    const [state, setState] = React.useState(flip());
    const handleClick = () => setState(flip());

    return (
      <>
        {showButton && <button onClick={handleClick}>Reflip</button>}
        {state.flipResults < 0.5 ? (
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
    );
  }
`}
      </CodePane>
    </Box>
    <Box height={30}></Box>
    <CoinFlipV3 showButton={true} showLabels={true} />
  </Slide>
);

export default NoHeadlessCoinFlip2;
