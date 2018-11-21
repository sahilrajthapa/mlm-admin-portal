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
      <Page>
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
                    placeholder="Enter your name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="wechatid">Wechat Id</Label>
                  <Input
                    type="text"
                    name="wechatid"
                    id="wechatid"
                    placeholder="Enter your wechat Id"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
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
