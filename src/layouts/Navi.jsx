import React, { Component, useState} from 'react'
import {
  MenuMenu,
  MenuItem,
  Menu,
  Container
} from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

export default function Navi() {

    const {cartItems} = useSelector(state => state.cart)

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        navigate("/")

    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return(
        <div>
            <Container>
             <Menu inverted >
        <MenuItem
          name='home'
        />
        <MenuItem
          name='messages'
        />

        <MenuMenu position='right'>
          
            {cartItems.length > 0 && <CartSummary></CartSummary>}

        </MenuMenu>
        {
            isAuthenticated ? <SignedIn signOut={handleSignOut}></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>
        }
      </Menu>
      </Container>
        </div>
    )
}