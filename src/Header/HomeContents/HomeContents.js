import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import FakeData from '../../Fakedata/FakeData';
import PlaceDetail from '../../PlaceDetail/PlaceDetail';
import './HomeContents.css'

const HomeContents = () => {
    const [places, setPlaces] = useState(FakeData);
    console.log(FakeData);
    return (
          
          <Container fluid>
              <Row>
              <div className='bg'>
                        <div className='place'>
                            {
                                places.map(place => <PlaceDetail place={place}></PlaceDetail>)
                            }

                        </div>
                </div> 
              </Row>
        </Container>   
        
        
    );
};

export default HomeContents;