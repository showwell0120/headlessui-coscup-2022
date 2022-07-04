import { Slide, FlexBox, Heading, Image } from 'spectacle';

const Meme = ({ source, title }) => (
  <Slide>
    {title && (
      <Heading margin="0px" color="primary" fontSize="48px">
        {title}
      </Heading>
    )}
    <FlexBox height="100%">
      <Image alt="meme" src={source} width="65%" />
    </FlexBox>
  </Slide>
);

export default Meme;
