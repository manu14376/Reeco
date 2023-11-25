import styled from 'styled-components'

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  padding-left: 20px;
  text-align: center;
`
export const ProductHeading = styled.h1`
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 400;
  width: ${props => (props.width ? '280px' : '100px')};
  color: rgb(154, 155, 150);
`
export const IconButton = styled.button`
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  margin-right: 15px;
  color: rgb(154, 155, 150);
`

export const PopupContainer = styled.div`
  height: 180px;
  width: 400px;
  padding: 20px;

  border-radius: 5px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px rgb(179, 179, 170);
`

export const PopupHeading = styled.h1`
  font-family: 'roboto';
  font-size: 20px;
  margin: 0px;
  margin-bottom: 10px;
`
export const PopupHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PopupDescription = styled.p`
  font-size: 16px;
  font-family: 'roboto';
  margin-bottom: 25px;
`
export const EditContainer = styled.div`
  width: 700px;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px rgb(179, 179, 170);
`
export const EditDetailsContainer = styled.div`
  display: flex;
`
export const OptionsContainer = styled.button`
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid grey;
  padding: 8px;
  margin-right: 10px;
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
  border: 0px;
  font-size: 14px;
  padding: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
  margin: 8px;
`
