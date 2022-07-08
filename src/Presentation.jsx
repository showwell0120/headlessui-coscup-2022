import React from 'react';
import {
  FlexBox,
  Heading,
  SpectacleLogo,
  Link,
  FullScreen,
  AnimatedProgress,
  Slide,
  Deck,
  Box,
  Image,
} from 'spectacle';

import Home from './slides/Home';
import DesignVariety from './slides/DesignVariety';
import BigCalendarPage from './slides/BigCalendarPage';
import CSSVariety from './slides/CSSVariety';
import Meme from './slides/Meme';
import HeadlessUI from './slides/HeadlessUI';
import Profile from './slides/Profile';
import ECMABook from './slides/ECMABook';
import Migo from './slides/Migo';
import Migo1 from './slides/Migo1';

import NoHeadlessCoinFlip1 from './slides/NoHeadlessCoinFlip1';
import NoHeadlessCoinFlip2 from './slides/NoHeadlessCoinFlip2';

import Meme1 from './images/meme.png';
import Meme2 from './images/meme-2.png';
import QRCode from './images/qrcode.png';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Home />
    <Meme source={Meme2} title="Our Stakeholders Want ..." />
    <BigCalendarPage />
    <DesignVariety />
    <CSSVariety />
    <Meme source={Meme1} />
    <HeadlessUI />
    <NoHeadlessCoinFlip1 />
    <NoHeadlessCoinFlip2 />

    <Profile />
    <ECMABook />
    <Migo />
    <Migo1 />

    <Slide>
      <FlexBox height="100%" flexDirection={'column'}>
        <Heading margin="0px" fontSize="64px">
          This slide is made by
        </Heading>
        <Link href="https://formidable.com/open-source/spectacle/">
          <SpectacleLogo size={360} />
        </Link>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection={'column'}>
        <Heading margin="0px" fontSize="64px" color="primary">
          Thanks for your attention 👋
        </Heading>
        <Image src={QRCode} width="40%" />
      </FlexBox>
    </Slide>
  </Deck>
);

export default Presentation;
