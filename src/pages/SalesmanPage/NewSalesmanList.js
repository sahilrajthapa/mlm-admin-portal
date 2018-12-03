import React, { Component } from "react";
import matchSorter from 'match-sorter'
import axios from 'axios'
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import Page from 'components/Page';
import url from '../../config/url'

class NewSalesmanList extends Component {

    state = {
        salesmen: []
    }

    componentDidMount() {
        axios.get(`${url.salesmen}`)
            .then(res => {
                let data = res.data
                this.setState({
                    salesmen: data
                })
            })
    }

    deleteSalesman = (id) => {
      axios.delete(`${url.salesmen}/${id}`)
         .then(() => {
            let filterSalesmen =  this.state.salesmen.filter(salesman => {
                 return salesman.id !== id
             })
            
             this.setState({
                 salesmen: filterSalesmen
             })
         })
    }

    render() {
        const { salesmen } = this.state;

        return (
            <Page
                title="Salesmen List"
                breadcrumbs={[{ name: 'Salesmen List', active: true }]}>
                <ReactTable
                    data={salesmen}
                    filterable
                    columns={[
                        {
                            Header: "Name",
                            id: "name",
                            accessor: d => d.name,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["name"] }),
                            filterAll: true
                        },
                        {
                            Header: "Wechat Id",
                            id: "wechatId",
                            accessor: d => d.wechatId,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["wechatId"] }),
                            filterAll: true
                        },
                        {
                            Header: "Salesman Level",
                            id: "level",
                            accessor: d => d.level,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["level"] }),
                            filterAll: true
                        },
                        {
                            Header: "Phone",
                            id: "phone",
                            accessor: d => d.phone,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["phone"] }),
                            filterAll: true
                        },
                        {
                            Header: "Address",
                            id: "address",
                            accessor: d => d.address,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["address"] }),
                            filterAll: true
                        },
                        {
                            Header: "",
                            id: "button",
                            accessor: d => (<Button color="primary" size="sm" block tag={Link}
                            to={`/edit-salesman/${d.id}`} >Edit</Button>),
                        },
                        {
                            Header: "",
                            id: "button2",
                            accessor: d => (<Button color="danger" size="sm" block onClick={() => this.deleteSalesman(d.id)}>Delete</Button>),
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