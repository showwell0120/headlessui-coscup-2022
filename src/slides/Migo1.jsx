import {
  Slide,
  Image,
  Heading,
  FlexBox,
  UnorderedList,
  ListItem,
  Link,
} from 'spectacle';

import QRCode from '../images/qrcode-migo.png';

const Migo1 = () => (
  <Slide>
    <FlexBox flexDirection="column" justifyContent="center" alignItems="center">
      <Heading fontSize={72}>Migo wants you</Heading>
      <FlexBox>
        <Image width={450} src={QRCode} />
        <Link
          target="_blank"
          href="https://jobs.lever.co/migo-2?location=Taipei+City,+Taiwan&utm_source=lever&utm_medium=odelia+linkedin&utm_campaign=DIGITIMES+CH+post"
        >
          <UnorderedList>
            <ListItem fontSize={52}>Backend Engineer</ListItem>
            <ListItem fontSize={52}>Software QA</ListItem>
            <ListItem fontSize={52}>SRE</ListItem>
          </UnorderedList>
        </Link>
      </FlexBox>
    </FlexBox>
  </Slide>
);

export default Migo1;
