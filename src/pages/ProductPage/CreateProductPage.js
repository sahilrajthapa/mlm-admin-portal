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
import Select from 'react-select';
import axios from 'axios';
import uuidv4 from 'uuid/v4'
import Page from 'components/Page';
import ImageInputField from './ImageInputField'
import url from '../../config/url'

class CreateProductPage extends Component {
  state = {
    name: '',
    category: [],
    mainImage: '',
    productImg: [],
    details: '',
    deliveryInfo: '',
    imgInputField: []
  }

  onChange = (e) => {
    if (e.target.name.indexOf('productImg') !== -1) {
        let imgArr = [...this.state.productImg, e.target.value]
        this.setState({
        productImg: imgArr
    })
    } else {
      this.setState({
        [e.target.name]: e.target.value
    })
    }
    
  }

  onInputChange = (category) => {
    this.setState({
       category
    })
  }

  generateImgInput = () => {
    const imgInputField = [...this.state.imgInputField, ImageInputField]
    this.setState({
       imgInputField
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const { name, category, mainImage, productImg, details, deliveryInfo } = this.state
    const productData = {
      id: uuidv4(),
      name,
      category,
      mainImage,
      productImg,
      details,
      deliveryInfo
    }
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    axios.post(`${url.products}`, productData, { headers: headers })
      .then(() => {
        this.props.history.push('/product-list')
      })
      .catch(err => console.log('err', err))
  }

  render() {
    const { name, imgInputField, details, deliveryInfo } = this.state
    const options = [
      { label: "Health & Beauty", value: "Health & Beauty" },
      { label: "Electronic Devices", value: "Electronic Devices" },
      { label: "Electronic Accessories", value: "Electronic Accessories" },
      { label: "TV & Home Appliances", value: "TV & Home Appliances" },
      { label: "Babies & Toys", value: "Babies & Toys" },
      { label: "Home & Lifestyle", value: "Home & Lifestyle" },
      { label: "Watches & Accessories", value: "Watches & Accessories" },
      { label: "Men's Fashion", value: "Men's Fashion" }
    ];
    
  
    return ( 
      <Page
        title="Create Product"
        breadcrumbs={[{ name: 'Create Product', active: true }]}>
        <Row>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Create Product</CardHeader>
              <CardBody>
                <Form onSubmit={this.onFormSubmit}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.onChange}
                      id="name"
                      placeholder="Enter product name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="categories">
                      Categories
                  </Label>
                    <Select
                      isMulti
                      onChange={this.onInputChange}
                      options={options}
                    />
                  </FormGroup>
                  <FormGroup>
                   <Label for="exampleFile">Product Main Image</Label>
                   <Input type="file" name="mainImage"  onChange={this.onChange}/>                
                  </FormGroup>

                  <FormGroup>
                   <Label>Product Image</Label>
                   <Input type="file" name="productImg"  onChange={this.onChange}/>                
                  </FormGroup>

                   {imgInputField.map((ImageInput, index) => {
                      return <ImageInput key={index} onChange={this.onChange} index={index}/>
                   })}
                  
                  <FormGroup>
                    <Button type="Button" onClick={this.generateImgInput}>Add More Images</Button>
                  </FormGroup>

                  <FormGroup>
                    <Label for="details">Product Details</Label>
                    <Input type="textarea" name="details" value={details} onChange={this.onChange} />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label for="checkbox2">
                      Delivery Type
                    </Label>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="deliveryInfo" value="0" checked={deliveryInfo === "0"} onChange={this.onChange} /> Default
                      </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="deliveryInfo" value="1" checked={deliveryInfo === "1"} onChange={this.onChange} /> Postage
                      </Label>
                      </FormGroup>
                  </FormGroup>

                  <FormGroup>
                    <Button color="primary" type="submit" block>Submit</Button>
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

export default CreateProductPage

