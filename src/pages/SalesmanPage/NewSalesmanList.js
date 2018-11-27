import React, { Component } from "react";
import matchSorter from 'match-sorter'
import axios from 'axios'
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class NewSalesmanList extends Component {

    state = {
        salesmen: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/salesmen')
            .then(res => {
                let data = res.data
                this.setState({
                    salesmen: data
                })
            })
    }
    render() {
        const { salesmen } = this.state;

        return (
            <div>
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
                            accessor: d => (<Button color="primary" type="submit" tag={Link}
                            to={`/edit-salesman/${d._id ? d._id : d.id}`} >Edit</Button>),
                            filterable: false
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

export default NewSalesmanList