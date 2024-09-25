import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

export default function CartSummary() {
    return(
        <div>
            <Dropdown item text='Sepetim'>
            <DropdownMenu>
              <DropdownItem>Acer Laptop</DropdownItem>
              <DropdownItem>Asus Laptop</DropdownItem>
              <DropdownItem>Dell laptop</DropdownItem>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item as={NavLink} to="/cart"> Sepete Git </Dropdown.Item>
            </DropdownMenu>
          </Dropdown>   
        </div>
    )
}