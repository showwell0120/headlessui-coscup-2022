import { Slide, CodePane, Box, Appear } from 'spectacle';

const HeadlssRollDice2 = () => (
  <Slide>
    <Appear>
      <CodePane language="jsx">
        {`
export const useProbability = ({ threshold }) => {
  const [state, setState] = React.useState(run());

  const handleChange = () => setState(run());

  return {
    rerun: handleChange,
    result: state.random < threshold,
  };
};
`}
      </CodePane>
    </Appear>
    <Box height={30}></Box>
    <Appear>
      <CodePane language="jsx">
        {`
export const RollDiceV2 = () => {
  const { rerun, result } = useProbability({threshold: 1 / 6});

  <div>
    <span onMouseOver={rerun}>Roll the dice!</span>
    {result ? <div>Big winner!</div> : <div>You win some, you lose most.</div>}
  </div>;
};
`}
      </CodePane>
    </Appear>
  </Slide>
);

export default HeadlssRollDice2;
