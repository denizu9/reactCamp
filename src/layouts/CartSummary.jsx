import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Label,
} from 'semantic-ui-react'

export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)  // Bu noktada sepet bizim elimizde. State'i aldık cart'tan. Bu noktada redux'a abone olundu.



    return(
        <div>
            <Dropdown item text='Sepetim'>
            <DropdownMenu>
              {
                cartItems.map( (cartItem) => (
                  <DropdownItem>
                    {cartItem.product.productName}
                    <Label>
                      {cartItem.quantity}
                    </Label>
                    </DropdownItem>
                ))
              }
              
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item as={NavLink} to="/cart"> Sepete Git </Dropdown.Item>
            </DropdownMenu>
          </Dropdown>   
        </div>
    )
}