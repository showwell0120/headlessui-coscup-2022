import { Slide, Image, Heading, FlexBox, Text, Box } from 'spectacle';

import MigoLOGO from '../images/logo-migo.svg';
import Migo1 from '../images/migo-1.png';
import Migo2 from '../images/migo-2.jpg';

const Migo = () => (
  <Slide>
    <FlexBox flexDirection="column" justifyContent="center" alignItems="center">
      <Heading fontSize={64}>About Migo</Heading>
      <FlexBox>
        <Image width={600} src={MigoLOGO} />
        <div>
          <Text fontSize={24} color="primary">
            在台灣，1G 吃到飽網路的成本是 $1 美金， 在印尼的成本卻是 $3
            美金，此價格導致寬頻在印尼就像奢侈品！
          </Text>
          <Text fontSize={24} color="primary">
            Migo 為了讓印尼的大眾消費者都能享有數位體驗，以低於傳統寬頻 1/100
            成本的技術，結合軟/硬體開放、供應鏈、數據管理、產品開發為新興市場打造數位平台，讓當地人無需消耗行動數據也能同樣享受到優質的數位體驗內容。
          </Text>
        </div>
      </FlexBox>
      <FlexBox>
        <Image width={360} src={Migo1} />
        <Box width={40}></Box>
        <Image width={340} src={Migo2} />
      </FlexBox>
    </FlexBox>
  </Slide>
);

export default Migo;
