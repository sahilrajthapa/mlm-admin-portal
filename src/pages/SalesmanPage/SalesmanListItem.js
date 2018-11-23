import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

export default class SalesmanListItem extends Component {

    componentWillReceiveProps() {
        console.log('componentwill recieve props')
    }
    
  render() {
    const { salesmen } = this.props
    let salesmanList
    if (salesmen.length > 0) {
       salesmanList = salesmen.map((salesman, i) => {
           return (
            <tr key={salesman._id}>
            <th scope="row">{i + 1}</th>
            <td>{salesman.name}</td>
            <td>{salesman.wechatId}</td>
            <td>{salesman.level}</td>
            <td>{salesman.phone}</td>
            <td>{salesman.address}</td>
            </tr>
           )
       })
    } 
    
    return (
        <Row>
        <Col>
        <Card className="mb-3">
            <CardHeader>Salesman</CardHeader>
            <CardBody>
            <Row>
                <Col>
                <Card body>
                    <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Wechat Id</th>
                        <th>Level</th>
                        <th>Phone</th>
                        <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>                          
                        {salesmanList}
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
