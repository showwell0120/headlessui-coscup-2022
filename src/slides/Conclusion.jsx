import { Slide, Heading, OrderedList, Appear, ListItem } from 'spectacle';

const Conclusion = () => (
  <Slide>
    <Heading>Conclusion</Heading>
    <OrderedList>
      <Appear>
        <ListItem>
          Headless UI implements <i>Separation of concerns(SoC).</i>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Use HOOKs to pull the function logics away from UI.</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Headless UI is a good way to reuse the function logics and support all
          kinds of styling.
        </ListItem>
      </Appear>
    </OrderedList>
  </Slide>
);

export default Conclusion;
