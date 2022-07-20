import { Slide, Quote, Image, FlexBox, Box, Link } from 'spectacle';

import ReactLogo from '../images/logo192.png';

const ReactHooks = () => (
  <Slide>
    <FlexBox flexDirection={'column'}>
      <Image src={ReactLogo} width="18%" />
      <Box height={60} />
      <Quote>
        <Link
          target="_blank"
          href="https://zh-hant.reactjs.org/docs/hooks-intro.html"
        >
          <strong style={{ color: 'yellow' }}>Hooks</strong>
        </Link>{' '}
        are a new addition in React 16.8. They let you use state and other React
        features without writing a class.
      </Quote>
      <Quote>
        Building your own Hooks lets you{' '}
        <strong>extract component logic into reusable functions.</strong>
      </Quote>
    </FlexBox>
  </Slide>
);

export default ReactHooks;
