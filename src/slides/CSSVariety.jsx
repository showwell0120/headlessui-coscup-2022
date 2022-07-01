import {
  Grid,
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  SlideLayout,
  Box,
} from 'spectacle';

import CSSLogo from '../images/logo-css.png';
import SASSLogo from '../images/logo-sass.jpeg';
import TailwindLogo from '../images/logo-tailwind.jpeg';
import StyledLogo from '../images/logo-styled-components.png';
import EmotionLogo from '../images/logo-emotion.jpeg';
import MUILogo from '../images/logo-meterial-ui.jpeg';

const CSSVariety = () => (
  <SlideLayout.TwoColumn
    right={
      <div style={{ alignContent: 'end' }}>
        <Grid
          gridTemplateColumns="20% 30% 30%"
          gridTemplateRows="33% 33% 33%"
          gridGap={20}
          height="100%"
        >
          <FlexBox alignItems="center" justifyContent="center">
            <Box src={CSSLogo} width={180} height={180} />
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <img alt="CSS" src={CSSLogo} width={180} height={180} />
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <img alt="SCSS" src={SASSLogo} width={180} height={180} />
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Box src={CSSLogo} width={180} height={180} />
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <img
              alt="Tailwind CSS"
              src={TailwindLogo}
              width={180}
              height={180}
            />
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <img
              alt="Styled Components"
              src={StyledLogo}
              width={180}
              height={180}
            />
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Box src={CSSLogo} width={180} height={180} />
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <img alt="emotion JS" src={EmotionLogo} width={180} height={180} />
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <img alt="Material UI" src={MUILogo} width={180} height={180} />
          </FlexBox>
        </Grid>
      </div>
    }
    left={
      <>
        <Heading fontSize={60}>CSS 開發的流派</Heading>
        <UnorderedList>
          <ListItem fontSize={32}>😐 Scratch from CSS</ListItem>
          <ListItem fontSize={32}>😃 pre-processor：SASS</ListItem>
          <ListItem fontSize={32}>😵 post-processor：PostCSS</ListItem>
          <ListItem fontSize={32}>😵 CSS-in-JS：styled-components</ListItem>
          <ListItem fontSize={32}>😵 Utility-first：Tailwind CSS</ListItem>
          <ListItem fontSize={32}>😵 UI library：Material UI</ListItem>
          <ListItem fontSize={32}>... ...</ListItem>
        </UnorderedList>
      </>
    }
  />
);

export default CSSVariety;
