import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
  
import Page from 'components/Page';
class CreateSalesmanPage extends Component {
  render() {
    return (
        <Page 
          title="Create Salesman"
          breadcrumbs={[{ name: 'Create Salesman', active: true }]}>
          <Row>
            <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Create Salesman</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter salesman name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="wechatid">Wechat Id</Label>
                    <Input
                      type="text"
                      name="wechatid"
                      id="wechatid"
                      placeholder="Enter salesman wechat Id"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="level">Level</Label>
                    <Input
                      type="text"
                      name="level"
                      id="level"
                      placeholder="Enter salesman level"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter salesman address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter salesman phone number"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary" block>Submit</Button>
                  </FormGroup>

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default CreateSalesmanPage
