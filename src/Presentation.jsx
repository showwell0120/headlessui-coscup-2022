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
import BigCalendarPage1 from './slides/BigCalendarPage1';

import CSSVariety from './slides/CSSVariety';
import Meme from './slides/Meme';
import HeadlessUI from './slides/HeadlessUI';
import Profile from './slides/Profile';
import ECMABook from './slides/ECMABook';
import Migo from './slides/Migo';
import Migo1 from './slides/Migo1';
import NoHeadlessCoinFlip1 from './slides/NoHeadlessCoinFlip1';
import NoHeadlessCoinFlip2 from './slides/NoHeadlessCoinFlip2';
import CoinFlip from './slides/CoinFlip';
import HeadlessCoinFlip1 from './slides/HeadlessCoinFlip1';
import HeadlessCoinFlip2 from './slides/HeadlessCoinFlip2';
import HeadlessProbability from './slides/HeadlessProbability';
import HeadlessRollDice1 from './slides/HeadlessRollDice1';
import HeadlessRollDice2 from './slides/HeadlessRollDice2';
import HeadlessLink from './slides/HeadlessLink';
import ReactHooks from './slides/ReactHooks';
import ReactTable1 from './slides/ReactTable1';
import ReactTable2 from './slides/ReactTable2';
import ReactTableExample from './slides/ReactTableExample';
import ReactTableV8 from './slides/ReactTableV8';
import DiceRoll from './slides/DiceRoll';
import Conclusion from './slides/Conclusion';

import Meme1 from './images/meme.png';
import Meme2 from './images/meme-2.png';
import Meme3 from './images/meme-3.png';
import Meme4 from './images/meme-4.png';
import Meme5 from './images/meme-5.png';
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
    <BigCalendarPage1 />
    <CSSVariety />
    <Meme source={Meme1} />
    <HeadlessUI />
    <CoinFlip />
    <NoHeadlessCoinFlip1 />
    <NoHeadlessCoinFlip2 />
    <Meme source={Meme3} />
    <DiceRoll />
    <Meme source={Meme4} width="45%" />
    <Meme source={Meme5} width="40%" />
    <HeadlessCoinFlip1 />
    <HeadlessCoinFlip2 />
    <HeadlessProbability />
    <HeadlessRollDice1 />
    <HeadlessLink />
    <ReactHooks />
    <HeadlessRollDice2 />
    <ReactTable1 />
    <ReactTableExample />
    <ReactTable2 />
    <ReactTableV8 />
    <Conclusion />
    <Profile />
    <Migo />
    <Migo1 />
    <ECMABook />
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
