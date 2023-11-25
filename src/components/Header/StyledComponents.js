import styled from 'styled-components'

export const HeaderContainer = styled.div`
  box-shadow: 0 0 5px 5px rgb(179, 179, 170);
  margin-bottom: 20px;
  height: 130px;
  width: 100%;
`
export const SubContainer1 = styled.div`
  background-color: rgb(6, 92, 14);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0px;
`
export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  align-items: center;
`

export const HeaderItem = styled.li`
  list-style: none;
  font-family: 'roboto';
  font-size: ${props => (props.visible ? '25px' : '16px')};
  font-weight: ${props => (props.visible ? '600' : '300')};
  color: white;
  margin: 20px;
  opacity: ${props => (props.visible ? '1' : '0.7')};
`

export const SubContainer2 = styled.div`
  background-color: white;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`
export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h2`
  font-size: 14px;
  font-family: 'roboto';
  color: rgb(179, 179, 170);
  font-weight: 300;
`
export const SpanEl = styled.span`
  text-decoration: underline;
  font-size: 14px;
  font-family: 'roboto';
  color: rgb(179, 179, 170);
  margin-left: 10px;
`
export const OrderHeading = styled.h1`
  font-size: 20px;
  font-family: 'roboto';
  margin: 0px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`

export const Button = styled.button`
  color: ${props => (props.confirm ? 'white' : 'rgb(6, 92, 14)')};
  background-color: ${props => (props.confirm ? 'rgb(6, 92, 14)' : 'white')};
  font-family: 'roboto';
  border: ${props => (props.confirm ? '0px' : '1px solid rgb(6, 92, 14)')};
  font-size: 14px;
  padding: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
  margin: 8px;
`
