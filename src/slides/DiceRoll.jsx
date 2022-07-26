import { Slide, Heading, OrderedList, Appear, ListItem } from 'spectacle';

const DiceRoll = () => (
  <Slide>
    <Heading>
      Features of <u>{`<DiceRoll />`}</u>
    </Heading>
    <OrderedList>
      <Appear>
        <ListItem>✅ Wants to "re-run" the odds.</ListItem>
      </Appear>
      <Appear>
        <ListItem>✅ Has 2 kinds of results.</ListItem>
      </Appear>
      <Appear>
        <ListItem>❎ Has a totally different interface.</ListItem>
      </Appear>
      <Appear>
        <ListItem>❎ Has different odds.</ListItem>
      </Appear>
    </OrderedList>
  </Slide>
);

export default DiceRoll;
