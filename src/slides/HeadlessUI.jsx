import { Slide, Heading, OrderedList, Appear, ListItem } from 'spectacle';

const HeadlessUI = () => (
  <Slide>
    <Heading>
      How about <u>Headless UI</u> 🤔
    </Heading>
    <OrderedList>
      <Appear>
        <ListItem>
          Developers only need to focus on functional features.
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Users can full-control the appearance, in any way, in any style.
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Good way to release an indenpendent UI compoment.</ListItem>
      </Appear>
    </OrderedList>
  </Slide>
);

export default HeadlessUI;
