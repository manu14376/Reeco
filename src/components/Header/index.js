import {BsCart} from 'react-icons/bs'

import {
  HeaderContainer,
  SubContainer1,
  UnorderedList,
  HeaderItem,
  SubContainer2,
  OrderDetailsContainer,
  Heading,
  SpanEl,
  OrderHeading,
  Button,
  ButtonsContainer,
} from './StyledComponents'

const Header = () => (
  <HeaderContainer>
    <SubContainer1>
      <UnorderedList>
        <HeaderItem visible>Reeco</HeaderItem>
        <HeaderItem>Store</HeaderItem>
        <HeaderItem>Orders</HeaderItem>
        <HeaderItem>Analytics</HeaderItem>
      </UnorderedList>
      <UnorderedList>
        <HeaderItem visible>
          <BsCart size={20} />
        </HeaderItem>
        <HeaderItem>Hello,James</HeaderItem>
      </UnorderedList>
    </SubContainer1>
    <SubContainer2>
      <OrderDetailsContainer>
        <Heading>
          Orders <SpanEl>Order 32457ABC</SpanEl>
        </Heading>
        <OrderHeading>Order 32457ABC</OrderHeading>
      </OrderDetailsContainer>
      <ButtonsContainer>
        <Button type="button">Back</Button>
        <Button type="button" confirm>
          Approve order
        </Button>
      </ButtonsContainer>
    </SubContainer2>
  </HeaderContainer>
)

export default Header
