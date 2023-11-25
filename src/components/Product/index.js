import {TiTick} from 'react-icons/ti'
import {RxCross2} from 'react-icons/rx'
import Popup from 'reactjs-popup'

import {
  ProductCard,
  ProductHeading,
  IconButton,
  PopupContainer,
  PopupHeading,
  PopupHeadingContainer,
  PopupDescription,
  EditContainer,
  EditDetailsContainer,
  OptionsContainer,
  Button,
  ButtonsContainer,
} from './StyledComponents'
import './index.css'

const Product = props => {
  const {details} = props
  const {imageUrl, productName, brand, price, quantity, total} = details
  return (
    <>
      <ProductCard>
        <img src={imageUrl} alt={productName} className="product-image" />
        <ProductHeading width>{productName}</ProductHeading>
        <ProductHeading>{brand}</ProductHeading>
        <ProductHeading>{price}</ProductHeading>
        <ProductHeading>{quantity}</ProductHeading>
        <ProductHeading>{total}</ProductHeading>
        <ProductHeading width>
          <IconButton>
            <TiTick size={25} />
          </IconButton>
          <Popup
            modal
            trigger={
              <IconButton>
                <RxCross2 size={18} />
              </IconButton>
            }
          >
            {close => (
              <PopupContainer>
                <PopupHeadingContainer>
                  <PopupHeading>Missing product</PopupHeading>
                  <IconButton type="button" onClick={() => close()}>
                    <RxCross2 size={18} />
                  </IconButton>
                </PopupHeadingContainer>
                <PopupDescription>
                  Is Chicken Breast Fillets, Boneless...urgent?
                </PopupDescription>
                <IconButton type="button" onClick={() => close()}>
                  No
                </IconButton>
                <IconButton type="button" onClick={() => close()}>
                  Yes
                </IconButton>
              </PopupContainer>
            )}
          </Popup>
          <Popup modal trigger={<IconButton>Edit</IconButton>}>
            {close => (
              <EditContainer>
                <PopupHeadingContainer>
                  <PopupHeading>
                    Chicken Breast fillets, Boneless Marinated 6 Ounce Raw,
                    Invivid...
                  </PopupHeading>
                  <IconButton type="button" onClick={() => close()}>
                    <RxCross2 size={18} />
                  </IconButton>
                </PopupHeadingContainer>
                <PopupDescription>American Ronald</PopupDescription>
                <EditDetailsContainer>
                  <img
                    src="https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg"
                    alt="fruit"
                    className="image"
                  />
                  <div>
                    <PopupDescription>Price ($)</PopupDescription>
                    <PopupDescription>Quantity</PopupDescription>
                    <PopupDescription>Total</PopupDescription>
                  </div>
                </EditDetailsContainer>
                <PopupDescription>Choose reason(Optional)</PopupDescription>
                <OptionsContainer>Missing product</OptionsContainer>
                <OptionsContainer>Quantity is not the same</OptionsContainer>
                <OptionsContainer>Price is not the same</OptionsContainer>
                <OptionsContainer>other</OptionsContainer>
                <ButtonsContainer>
                  <Button type="button" onClick={() => close()}>
                    Cancel
                  </Button>
                  <Button type="button" confirm>
                    Send
                  </Button>
                </ButtonsContainer>
              </EditContainer>
            )}
          </Popup>
        </ProductHeading>
      </ProductCard>
      <hr />
    </>
  )
}

export default Product
