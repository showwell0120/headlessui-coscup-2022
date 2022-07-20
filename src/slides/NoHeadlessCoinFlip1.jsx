import { Slide, CodePane, Box, Appear } from 'spectacle';

const NoHeadlessCoinFlip1 = () => (
  <Slide>
    <Appear>
      <CodePane language="jsx">
        {`
// Make prototype

const CoinFlipV0 = () => Math.random() < 0.5 ? <div>Heads</div> : <div>Tails</div>;
`}
      </CodePane>
    </Appear>

    <Box height={30}></Box>

    <Appear>
      <CodePane language="jsx">
        {`
  // We have design mockup. Let's add coin cover! 

  const CoinFlipV1 = () => Math.random() < 0.5 
    ? (<div><img src={HeadsCoin} alt="Heads" /></div>) 
    : (<div><img src={TailsCoin} alt="Tails" /></div>);
`}
      </CodePane>
    </Appear>

    <Box height={30}></Box>

    <Appear>
      <CodePane language="jsx">
        {`
  // New requirement : Another marketing page would like to show CoinFlip with label.
  
  export const CoinFlipV2 = ({ showLabels = false }) => Math.random() < 0.5
    ? (<div><img src={HeadsCoin} alt="Heads" />{showLabels && <span>Heads</span>}</div>)
    : (<div><img src={TailsCoin} alt="Tails" />{showLabels && <span>Tail</span>}</div>);
`}
      </CodePane>
    </Appear>
  </Slide>
);

export default NoHeadlessCoinFlip1;
