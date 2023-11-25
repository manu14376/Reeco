import {Component} from 'react'
import {GoSearch} from 'react-icons/go'
import {HiOutlinePrinter} from 'react-icons/hi'

import Header from '../Header'
import Product from '../Product'

import {
  HomeContainer,
  ShippingDetailsContainer,
  Card,
  CardHeading,
  CardDescription,
  ProductsContainer,
  SearchContainer,
  InputEl,
  Button,
  TopBar,
  OptionsContainer,
  ProductsDetails,
  ProductCard,
  ProductHeading,
} from './StyledComponents'

const ItemsList = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg',
    productName:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid',
    brand: 'Hormel Black Labelmany',
    price: '$60.67/6+1LB',
    quantity: '0*6 + 1LB',
    total: 0,
    status: '',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg',
    productName:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid',
    brand: 'Hormel Black Labelmany',
    price: '$60.67/6+1LB',
    quantity: '0*6 + 1LB',
    total: 0,
    status: '',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg',
    productName:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid',
    brand: 'Hormel Black Labelmany',
    price: '$60.67/6+1LB',
    quantity: '0*6 + 1LB',
    total: 0,
    status: '',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg',
    productName:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid',
    brand: 'Hormel Black Labelmany',
    price: '$60.67/6+1LB',
    quantity: '0*6 + 1LB',
    total: 0,
    status: '',
  },
  {
    id: 5,
    imageUrl:
      'https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg',
    productName:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid',
    brand: 'Hormel Black Labelmany',
    price: '$60.67/6+1LB',
    quantity: '0*6 + 1LB',
    total: 0,
    status: '',
  },
  {
    id: 6,
    imageUrl:
      'https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg',
    productName:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid',
    brand: 'Hormel Black Labelmany',
    price: '$60.67/6+1LB',
    quantity: '0*6 + 1LB',
    total: 0,
    status: '',
  },
  {
    id: 7,
    imageUrl:
      'https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg',
    productName:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid',
    brand: 'Hormel Black Labelmany',
    price: '$60.67/6+1LB',
    quantity: '0*6 + 1LB',
    total: 0,
    status: '',
  },
  {
    id: 8,
    imageUrl:
      'https://res.cloudinary.com/ddbbnsrnd/image/upload/v1700836566/Avocado_Hass_qbxism.jpg',
    productName:
      'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid',
    brand: 'Hormel Black Labelmany',
    price: '$60.67/6+1LB',
    quantity: '0*6 + 1LB',
    total: 0,
    status: '',
  },
]

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />

        <ShippingDetailsContainer>
          <Card>
            <CardHeading>Supplier</CardHeading>
            <CardDescription>East coast fruits & vegetables</CardDescription>
          </Card>
          <hr />
          <Card>
            <CardHeading>Shipping date</CardHeading>
            <CardDescription>Thu, Feb 10th</CardDescription>
          </Card>
          <hr />
          <Card>
            <CardHeading>Total</CardHeading>
            <CardDescription>$ 15,028.3</CardDescription>
          </Card>
          <hr />
          <Card>
            <CardHeading>Category</CardHeading>
            <CardDescription>East coast fruits & vegetables</CardDescription>
          </Card>
          <hr />
          <Card>
            <CardHeading>Department</CardHeading>
            <CardDescription>300-444-678</CardDescription>
          </Card>
          <hr />
          <Card>
            <CardHeading>Status</CardHeading>
            <CardDescription>Awaiting your approvel</CardDescription>
          </Card>
        </ShippingDetailsContainer>
        <ProductsContainer>
          <TopBar>
            <SearchContainer>
              <InputEl type="search" placeholder="Search..." />
              <GoSearch />
            </SearchContainer>
            <OptionsContainer>
              <Button>AddItem</Button>
              <HiOutlinePrinter size={25} color="green" />
            </OptionsContainer>
          </TopBar>
          <ProductsDetails>
            <ProductCard>
              <ProductHeading width>Product name</ProductHeading>
              <ProductHeading>Brand</ProductHeading>
              <ProductHeading>Price</ProductHeading>
              <ProductHeading>Quantity</ProductHeading>
              <ProductHeading>Total</ProductHeading>
              <ProductHeading width>Status</ProductHeading>
            </ProductCard>
            <hr />
            {ItemsList.map(each => (
              <Product key={each.id} details={each} />
            ))}
          </ProductsDetails>
        </ProductsContainer>
      </HomeContainer>
    )
  }
}

export default Home
