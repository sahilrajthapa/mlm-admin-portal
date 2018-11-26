import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

class TransactionListItem extends Component {
  render() {
    const { transactions } = this.props
    let transactionList
    if (transactions.length > 0) {
        transactionList = transactions.map((transaction, i) => {
            return (
                <tr key={transaction.trans_id}>
                    <th scope="row">{i + 1}</th>
                    <td>{transaction.order_id}</td>
                    <td>{transaction.order_status}</td>
                    <td>{transaction.buyer_nick}</td>
                    <td>{transaction.receiver_name}</td>
                    <td>{transaction.receiver_mobile}</td>
                    <td>{transaction.product_name}</td>
                    <td><img src={transaction.product_img} alt={transaction.product_name} style={{ width: '50px'}} /></td>
                    <td>{transaction.delivery_company}</td>
                </tr>
            )
        })
    }

    return (
        <Row>
            <Col>
                <Card className="mb-3">
                    <CardHeader>Transaction </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <Card body>
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Order Id</th>
                                                <th>Order Status</th>
                                                <th>Buyer Nickname</th>
                                                <th>Receiver Name</th>
                                                <th>Receiver Mobile</th>
                                                <th>Product Name</th>
                                                <th>Product Image</th>
                                                <th>Delievery Company</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactionList}
                                        </tbody>
                                    </Table>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
  }
}

export default TransactionListItem
