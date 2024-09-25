import axios from 'axios'

export default class ProductApi{
    getProducts() {
        return axios.get("http://localhost:8080/api/product/getProducts")
    }

    getProductById(id) {
        return axios.get("http://localhost:8080/api/product/getById?id=" + id)
    }
}