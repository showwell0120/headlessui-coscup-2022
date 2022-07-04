import { Slide, Image, Heading, FlexBox } from 'spectacle';

import MigoLOGO from '../images/logo-migo.svg';

const Migo = () => (
  <Slide>
    <FlexBox flexDirection="column" justifyContent="center" alignItems="center">
      <Heading fontSize={64}>About Migo</Heading>
      <Image width={300} src={MigoLOGO} />
    </FlexBox>
  </Slide>
);

export default Migo;
