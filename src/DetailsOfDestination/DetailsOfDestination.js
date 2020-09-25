import React, {  } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../Fakedata/FakeData';
import './DetailsOfDestination.css'
const DetailsOfDestination = () => {
    let {id} = useParams();
    parseInt(id);
    const result = FakeData.find(place => place.id === parseInt(id));
    return (

            <Container fluid className='bg' style={{display: 'flex'}}>
               <div style={{width: '50%'}} className='halfContent'>
                    <h1 style={{color: 'white'}}>{result.heading}</h1>
                    <p style={{color: 'white'}}>{result.details}</p>
                    <Button variant="warning">Book Now</Button>
                </div>
                <div style={{width: '35%', marginLeft: '10%'}}>
                <Form style={{backgroundColor: 'white'}} className='collectData'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder=" " />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>To</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>from</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                   <Link to='/Booking'>
                    <Button  variant="warning" type="submit">
                            Booking
                        </Button>
                   </Link>
                </Form>
                </div>
            </Container>
    );
};

export default DetailsOfDestination;