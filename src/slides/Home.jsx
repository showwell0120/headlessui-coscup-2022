import { Slide, FlexBox, Heading, Notes } from 'spectacle';

const Home = () => (
  <Slide>
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" fontSize="96px">
        ✨<i>Dive into Headless UI with react-table</i> ✨
      </Heading>
      <Heading margin="0px" color="primary" fontSize="48px">
        COSCUP 2022 | 帶您讀源碼
      </Heading>
      <Heading margin="16px 32px" color="primary" fontSize="24px">
        July.31, 2022 &nbsp;&nbsp;&nbsp;&nbsp; 🙋‍♀️&nbsp;Present by: Yuri Tsai
      </Heading>
    </FlexBox>
    <Notes>
      暖場打招呼，簡單帶過兩大主題
      <ol>
        <li>Headless UI</li>
        <li>react-table</li>
      </ol>
    </Notes>
  </Slide>
);

export default Home;
