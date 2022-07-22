import { Probability, useProbability } from './Probability';

export const RollDiceV2 = () => {
  const { rerun, result } = useProbability({ threshold: 1 / 6 });

  <div>
    <span onMouseOver={rerun}>Roll the dice!</span>
    {result ? <div>Big winner!</div> : <div>You win some, you lose most.</div>}
  </div>;
};

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
