import { Slide, CodePane, FlexBox } from 'spectacle';

const HeadlessCoinFlip3 = () => (
  <Slide>
    <FlexBox height="100%">
      <CodePane language="jsx">
        {`
// Let's abstract the headless component !

const run = () => ({
  random: Math.random(),
});

export const Probability = ({ children, threshold }) => {
  const [state, setState] = React.useState(run());

  const handleChange = () => setState(run());

  return children({
    rerun: handleChange,

    // By taking in a threshold property we can support
    // different odds!
    result: state.random < threshold,
  });
};
`}
      </CodePane>
    </FlexBox>
  </Slide>
);

export default HeadlessCoinFlip3;
