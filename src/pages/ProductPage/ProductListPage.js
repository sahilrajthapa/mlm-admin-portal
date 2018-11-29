import React, { Component } from "react";
import matchSorter from 'match-sorter'
import axios from 'axios'
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import Page from 'components/Page';

class NewSalesmanList extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/products')
            .then(res => {
                let data = res.data
                this.setState({
                    products: data
                })
            })
    }

    deleteProduct = (id) => {
      axios.delete(`http://localhost:3001/products/${id}`)
         .then(() => {
            let filterProducts =  this.state.products.filter(product => {
                 return product.id !== id
             })
            
             this.setState({
                 products: filterProducts
             })
         })
    }

    render() {
        const { products } = this.state;

        return (
            <Page
                title="Products List"
                breadcrumbs={[{ name: 'Products List', active: true }]}>
                <ReactTable
                    data={products}
                    filterable
                    columns={[
                        {
                            Header: "Product Name",
                            id: "name",
                            accessor: d => d.name,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["name"] }),
                            filterAll: true
                        },
                        {
                            Header: "Category",
                            id: "category",
                            accessor: d => d.category.map((cat, i) => {
                                return  (
                                <p key={i}>{cat.value}</p>
                                )
                            }) ,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["category"] }),
                            filterAll: true
                        },
                        {
                            Header: "Product Main Image",
                            id: "main image",
                            accessor: d =>  (<img src={d.mainImage} alt={d.name} style={{ width: '75px' }} />),
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["main image"] }),
                            filterable: false
                        },
                        {
                            Header: "Product Image",
                            id: "image",
                            accessor: d =>  d.productImg.map((image, i) => {
                               return  (
                               <p key={i} style={{textAlign: 'center'}}>
                                    <img src={image} alt={`product${i}`} style={{ width: '75px' }} />
                               </p>
                               ) 
                            }),
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["image"] }),
                            filterable: false
                        },
                        {
                            Header: "Details",
                            id: "details",
                            accessor: d => d.details,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["details"] }),
                            filterable: false
                        },
                        {
                            Header: "",
                            id: "button",
                            accessor: d => (<Button color="primary" size="sm" block tag={Link}
                            to={`/edit-product/${d.id}`} >Edit</Button>),
                            filterable: false
                        },
                        {
                            Header: "",
                            id: "button2",
                            accessor: d => (<Button color="danger" size="sm" block onClick={() => this.deleteSalesman(d.id)}>Delete</Button>),
                            filterable: false
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </Page>
        );
    }
}

export default NewSalesmanList