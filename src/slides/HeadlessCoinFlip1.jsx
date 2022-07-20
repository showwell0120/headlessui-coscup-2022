import { Slide, CodePane, FlexBox } from 'spectacle';
import { CoinFlipV4 } from '../components/CoinFlip';

const HeadlessCoinFlip1 = () => (
  <Slide>
    <FlexBox height="100%">
      <CodePane language="jsx">
        {`
    // Let' s try Headless UI !
    // Make this component do not render anything, just process logic

    export const CoinFlipLogic = ({ children }) => {
      const [state, setState] = React.useState(flip());

      const handleClick = () => setState(flip());

      return children({
        rerun: handleClick,
        isHeads: state.flipResults < 0.5,
      });
    };
`}
      </CodePane>
    </FlexBox>
    {/* <CoinFlipV4 showButton={true} showLabels={true} /> */}
  </Slide>
);

export default HeadlessCoinFlip1;
