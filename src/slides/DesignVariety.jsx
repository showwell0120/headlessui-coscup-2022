import { Slide, Heading, Notes, Stepper, Image } from 'spectacle';

import Design1 from '../images/calendar-design-1.png';
import Design2 from '../images/calendar-design-2.jpeg';

const DesignVariety = () => (
  <Slide>
    <Heading margin="0px" color="primary" fontSize="48px">
      Fancy Mockups
    </Heading>
    <Stepper
      tagName="div"
      className="img-wrap"
      alwaysVisible
      values={[Design1, Design2]}
    >
      {(value, step, isActive) =>
        isActive ? (
          <Image alt={`${step}. login form design`} src={value} width="60%" />
        ) : null
      }
    </Stepper>
    <Notes>筆記...</Notes>
  </Slide>
);

export default DesignVariety;
