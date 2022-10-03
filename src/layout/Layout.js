import React from 'react'
import NavDropDown from '../components/NavDropDown'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (

    <Container>
    <NavDropDown/>

     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
