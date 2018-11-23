import React, { Component } from 'react'
import axios from 'axios'
import Page from 'components/Page'
import SalesmanListItem from './SalesmanListItem'

export default class SalesmanList extends Component {
  state = {
      salesmen: []
  }
  componentDidMount() {
      console.log('salemanlist mounted')
      axios.get('http://localhost:5000/api/salesmen')
        .then(res => {
            let data = res.data
            console.log('resdata')
            this.setState({
                salesmen: data
            }, () => console.log('this state', this.state))
        })
  }
  render() {
    
    return (
        <Page
            title="Salesman List"
            breadcrumbs={[{ name: 'Salesman List', active: true }]}
            className="TablePage">
            
            <SalesmanListItem salesmen={this.state.salesmen}/>
            {/* <Row>
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
            </Row> */}
        </Page>
    )
  }
}
