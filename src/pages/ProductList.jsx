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
  Button,
} from 'semantic-ui-react'
import ProductApi from '../api/ProductApi'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import {toast } from "react-toastify"

export default function ProductList() {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])

    useEffect( () => {
        let productApi = new ProductApi()
        productApi.getProducts().then(product => setProducts(product.data))
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`Ürün ${product.productName} sepete eklendi`)
    }

    return(
        <div>
             <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Ürün Adı</TableHeaderCell>
        <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
        <TableHeaderCell>Ürün Açıklaması</TableHeaderCell>
        <TableHeaderCell></TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
        {
            products.map( product => (
                <TableRow key={product.id}>
                <TableCell><Link to={`/products/${product.id}`}>{product.productName}</Link></TableCell>
                <TableCell>{product.unitPrice}</TableCell>
                <TableCell>{product.information}</TableCell>
                <TableCell><Button onClick={() => handleAddToCart(product)}>Sepete Ekle</Button></TableCell>
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