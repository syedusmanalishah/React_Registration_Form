import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <div>
<Form>





      <Form.Group className="mb-3" controlId="formBasicEmail">

      

    <Container>
      <Row>
        <Col> <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" /></Col>
        <Col><Form.Label>FATHER’S NAME</Form.Label>
        <Form.Control type="text" placeholder="FATHER’S NAME " /></Col>
      </Row>
 




      <Row>
        <Col>       
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="Date" placeholder="Date of Birth" />
        </Col>
        <Col>      
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" />
        </Col>
      </Row>
     




  
      <Row>
        <Col lg={4} xs={12}>  
        <Form.Label>Domicile/District:</Form.Label>
        <Form.Control type="text" placeholder="Domicile/District:" />
        </Col>
        <Col lg={4} xs={12}>  
        <Form.Label>Contact No</Form.Label>
        <Form.Control type="number" placeholder="Contact No" />
        </Col>
        <Col lg={4} xs={12}>  
        <Form.Label>CNIC No</Form.Label>
        <Form.Control type="number" placeholder="CNIC No" />
        </Col>
      </Row>
     



     
 

   
      <Row>
        <Col>   
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" />
        </Col>
        <Col>  
        <Form.Label>Mailing Address</Form.Label>
        <Form.Control type="text" placeholder="Mailing Address" />
        </Col>
      </Row>
    
    


      
  
      <Row>
        <Col>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
        </Col>
        <Col>   
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Col>
      </Row>
     
<Row className="mt-3"  >
<Button style={{width:'20%' , marginLeft:'40%'}} variant="primary" type="submit">
        Submit
      </Button>
</Row>

    </Container>
      
      </Form.Group>

     
     
    </Form>
    </div>

  )
}

export default Hero



 /* <Form.Group className="mb-3" controlId="formBasicPassword">
     
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */