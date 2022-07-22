import { Slide, CodePane, FlexBox } from 'spectacle';

const HeadlessRollDice1 = () => (
  <Slide>
    <FlexBox height="100%">
      <CodePane language="jsx">
        {`
// Now we can implement <RollDice /> in a easy way!

export const RollDiceV1 = () => (
  // Six Sided Dice
  <Probability threshold={1 / 6}>
    {({ rerun, result }) => (
      <div>
        {/* She was able to use a different event! */}
        <span onMouseOver={rerun}>Roll the dice!</span>
        {/* Totally different interface! */}
        {result ? (
          <div>Big winner!</div>
        ) : (
          <div>You win some, you lose most.</div>
        )}
      </div>
    )}
  </Probability>
);
`}
      </CodePane>
    </FlexBox>
  </Slide>
);

export default HeadlessRollDice1;
