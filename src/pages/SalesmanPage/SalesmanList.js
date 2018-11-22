import React, { Component } from 'react'
import Page from 'components/Page';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

export default class SalesmanList extends Component {
  render() {
    return (
        <Page
            title="Salesman List"
            breadcrumbs={[{ name: 'Salesman List', active: true }]}
            className="TablePage">
            <Row>
                <Col>
                <Card className="mb-3">
                    <CardHeader>Salesman Level 1</CardHeader>
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
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark Otto</td>
                                <td>@mdo123</td>
                                <td>level-1</td>
                                <td>9862207137</td>
                                <td>Nepal</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob Thornton</td>
                                <td>@fat3456</td>
                                <td>level-1</td>
                                <td>9862207137</td>
                                <td>Nepal</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry Bird</td>
                                <td>@twitter345</td>
                                <td>level-1</td>
                                <td>9862207137</td>
                                <td>Nepal</td>
                                </tr>
                            </tbody>
                            </Table>
                        </Card>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card className="mb-3">
                    <CardHeader>Salesman Level 2</CardHeader>
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
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark Otto</td>
                                <td>@mdo123</td>
                                <td>level-2</td>
                                <td>9862207137</td>
                                <td>Nepal</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob Thornton</td>
                                <td>@fat3456</td>
                                <td>level-2</td>
                                <td>9862207137</td>
                                <td>Nepal</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry Bird</td>
                                <td>@twitter345</td>
                                <td>level-2</td>
                                <td>9862207137</td>
                                <td>Nepal</td>
                                </tr>
                            </tbody>
                            </Table>
                        </Card>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Page>
    )
  }
}
