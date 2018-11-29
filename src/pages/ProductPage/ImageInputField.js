import React from 'react'
import {
    FormGroup,
    Input
  } from 'reactstrap';

const ImageInputField = ({index, onChange}) => (
    <FormGroup>
      <Input type="file" name={`productImg${index}`}  onChange={onChange}/>        
    </FormGroup>
   )

export default ImageInputField
