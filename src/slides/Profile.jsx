import {
  Heading,
  Image,
  FlexBox,
  UnorderedList,
  ListItem,
  Text,
  Link,
  Slide,
} from 'spectacle';

import BlogIcon from '../images/icon-blog.png';
import FBIcon from '../images/icon-fb.png';
import GitHubIcon from '../images/icon-github.png';
import Avatar from '../images/avatar.png';

const Profile = () => (
  <Slide>
    <FlexBox flexDirection="column" justifyContent="center" alignItems="center">
      <Heading fontSize={64}>About Yuri</Heading>
      <Image width={300} src={Avatar} />
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <UnorderedList>
          <ListItem fontSize={24}>Web Sr. Frontend, over 6 years.</ListItem>
          <ListItem fontSize={24}>I am a Reactive, also love TS.</ListItem>
          <ListItem fontSize={24}>
            I am an imaginer in{' '}
            <Link fontSize={24} href="https://migo.io/">
              Migo
            </Link>
            .
          </ListItem>
        </UnorderedList>
        <FlexBox>
          <Link href="https://yuri-journal.me/">
            <FlexBox height={40} marginRight={20}>
              <Image width={30} src={BlogIcon} />
              <Text fontSize={24}>Blog</Text>
            </FlexBox>
          </Link>

          <Link href="https://www.facebook.com/yurijournal.tw">
            <FlexBox height={40} marginRight={20}>
              <Image width={30} src={FBIcon} />
              <Text fontSize={24}>Facebook</Text>
            </FlexBox>
          </Link>
          <Link href="https://github.com/showwell0120">
            <FlexBox height={40}>
              <Image width={30} src={GitHubIcon} />
              <Text fontSize={24}>GitHub</Text>
            </FlexBox>
          </Link>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  </Slide>
);

export default Profile;
