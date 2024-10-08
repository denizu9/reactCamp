import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from "semantic-ui-react";
import ProductApi from '../api/ProductApi';

export default function ProductDetail() {

  let {id} = useParams()

  const [product, setProduct] = useState({})

  useEffect( () => {
    let productApi = new ProductApi()
    productApi.getProductById(id).then(product => setProduct(product.data))
  }, [])

  return (
    <div>
       <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.id}</Card.Meta>
            <Card.Description>
              <strong>{product.unitPrice}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
