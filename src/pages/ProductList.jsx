import React, { useState, useEffect } from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from 'semantic-ui-react'
import ProductApi from '../api/ProductApi'
import { Link } from 'react-router-dom'

export default function ProductList() {

    const [products, setProducts] = useState([])

    useEffect( () => {
        let productApi = new ProductApi()
        productApi.getProducts().then(product => setProducts(product.data))
    }, [])

    

    return(
        <div>
             <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Ürün Adı</TableHeaderCell>
        <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
        <TableHeaderCell>Ürün Açıklaması</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
        {
            products.map( product => (
                <TableRow key={product.id}>
                <TableCell><Link to={`/products/${product.id}`}>{product.productName}</Link></TableCell>
                <TableCell>{product.unitPrice}</TableCell>
                <TableCell>{product.information}</TableCell>
              </TableRow>
            ) )
        }
     
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableHeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <MenuItem as='a' icon>
              <Icon name='chevron left' />
            </MenuItem>
            <MenuItem as='a'>1</MenuItem>
            <MenuItem as='a'>2</MenuItem>
            <MenuItem as='a'>3</MenuItem>
            <MenuItem as='a'>4</MenuItem>
            <MenuItem as='a' icon>
              <Icon name='chevron right' />
            </MenuItem>
          </Menu>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
        </div>
    )
}