import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ShippingDetailsContainer = styled.div`
  height: 120px;
  width: 80%;
  display: flex;
  box-shadow: 0 0 2px 2px rgb(222, 224, 210);
  border-radius: 5px;
`
export const Card = styled.div`
  height: 150px;
  width: 200px;
  padding: 5px;
  text-align: center;
`
export const CardHeading = styled.h3`
  font-size: 14px;
  color: rgb(154, 155, 150);
  font-weight: 500;
  font-family: 'roboto';
`
export const CardDescription = styled.p`
  font-size: 16px;
  font-family: 'roboto';
  font-weight: 500;
`
export const ProductsContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  border: 1px solid rgb(154, 155, 150);
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;
`

export const SearchContainer = styled.div`
  padding: 5px;
  padding-right: 8px;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(154, 155, 150);
  border-radius: 15px;
`

export const InputEl = styled.input`
  padding: 5px;
  border: 0px;
`
export const Button = styled.button`
  color: rgb(6, 92, 14);
  background-color: white;
  font-family: 'roboto';
  border: 1px solid rgb(6, 92, 14);
  font-size: 14px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
  margin-right: 40px;
  font-weight: bold;
`
export const TopBar = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProductsDetails = styled.div`
  width: 100%;
  border: 1px solid rgb(154, 155, 150);
  border-radius: 10px;
  margin-bottom: 20px;
`

export const ProductCard = styled.div`
  display: flex;
  padding-left: 20px;
`
export const ProductHeading = styled.h1`
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 400;
  width: ${props => (props.width ? '350px' : '100px')};
  color: rgb(154, 155, 150);
`
