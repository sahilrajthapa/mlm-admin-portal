import React, { Component } from "react";
import matchSorter from 'match-sorter'
import axios from 'axios'
import ReactTable from "react-table";
import "react-table/react-table.css";
import Page from 'components/Page';
import url from '../../config/url';

class NewTransactionList extends Component {

    state = {
        transactionList: []
    }

    componentDidMount() {
        axios.get(`${url.orders}`)
            .then(res => {
                let data = res.data
                this.setState({
                    transactionList: data
                })
            })
    }
    render() {
        const { transactionList } = this.state;
        const orderStatus = (status) => {
            if (status === 2) {
                return 'Shipped'
            } else if (status === 3) {
                return 'Delivered'
            } else if (status === 5) {
                return 'Completed'
            } else if (status === 8) {
                return 'Dimensional right'
            }
        }
        return (
            <Page
                title="Transaction List"
                breadcrumbs={[{ name: 'Transaction List', active: true }]}>
                <ReactTable
                    data={transactionList}
                    filterable
                    columns={[
                        {
                            Header: "Order Day",
                            id: "order_create_time",
                            accessor: d => new Date(d.order_create_time).toDateString(),
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["order_create_time"] }),
                            filterAll: true
                        },
                        {
                            Header: "Order Status",
                            id: "order_status",
                            accessor: d => orderStatus(d.order_status),
                            filterMethod: (filter, rows) => {
                                console.log('match',  matchSorter(rows, filter.value, { keys: ["order_status"] }))
                                return matchSorter(rows, filter.value, { keys: ["order_status"] }) },
                            filterAll: true
                        },
                        {
                            Header: "Buyer Nickname",
                            id: "buyer_nick",
                            accessor: d => d.buyer_nick,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["buyer_nick"] }),
                            filterAll: true
                        },
                        {
                            Header: "Receiver Name",
                            id: "receiver_name",
                            accessor: d => d.receiver_name,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["receiver_name"] }),
                            filterAll: true
                        },
                        {
                            Header: "Receiver Mobile",
                            id: "receiver_mobile",
                            accessor: d => d.receiver_mobile,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["receiver_mobile"] }),
                            filterAll: true
                        },
                        {
                            Header: "Product Name",
                            id: "product_name",
                            accessor: d => d.product_name,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["product_name"] }),
                            filterAll: true
                        },
                        {
                            Header: "Product Image",
                            id: "product_img",
                            accessor: d => (<img src={d.product_img} alt={d.product_name} style={{ width: '50px' }} />),
                            filterable: false
                        },
                        {
                            Header: "Delivery Company",
                            id: "delivery_company",
                            accessor: d => d.delivery_company,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["delivery_company"] }),
                            filterAll: true
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </Page>
        );
    }
}

export default NewTransactionList