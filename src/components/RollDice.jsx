import Probability from './Probability';

const RollDice = ({ children }) => (
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

export default RollDice;
