import { Slide, Image, Link } from 'spectacle';

import Screenshot from '../images/headless-link.png';

const HeadlessLink = () => (
  <Slide>
    <Link
      href="https://www.merrickchristensen.com/articles/headless-user-interface-components/"
      target="_blank"
    >
      <Image height={'45%'} src={Screenshot} />
    </Link>
  </Slide>
);

export default HeadlessLink;
