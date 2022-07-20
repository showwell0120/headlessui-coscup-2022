import { Slide, FlexBox, Heading, Image } from 'spectacle';

import CoinFlipGif from '../images/coinflip.gif';

const CoinFlip = () => (
  <Slide>
    <Heading margin="0px" color="primary" fontSize="48px">
      Hey man, I want this feature
    </Heading>
    <FlexBox height="100%">
      <Image alt="coin flip" src={CoinFlipGif} width="55%" />
    </FlexBox>
  </Slide>
);

export default CoinFlip;
