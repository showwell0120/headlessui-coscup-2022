import { Slide, FlexBox } from 'spectacle';
import Image from '../images/meme.png';

const Meme = () => (
  <Slide>
    <FlexBox height="100%">
      <img alt="meme" src={Image} width="60%" />
    </FlexBox>
  </Slide>
);

export default Meme;
