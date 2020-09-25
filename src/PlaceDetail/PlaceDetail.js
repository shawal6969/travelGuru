import React, {  } from 'react';
import { Link } from 'react-router-dom';


const PlaceDetail = (props) => {
    console.log(props.place.id);
    const { img,  id} = props.place;
    return (
        <div>
           <Link to={`/DetailsOfDestination/${id}`}>
                <img src={img} alt=""/>
           </Link>
        </div>
    );
};

export default PlaceDetail;