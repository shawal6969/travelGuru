import React from 'react';

const ShowHotel = (props) => {
    const {name, img, features, facilities, offer, price} = props.hotelList;
    return (
        <div style={{display:'flex'}}>
            <div>
                <img style={{width: '270px', height: '188px'}} src={img} alt=""/>
            </div>
            <div style={{fontWeight: 'bold'}}>
                <p>{name}</p>
                <p>{features}</p>
                <p>{facilities}</p>
                <p>{offer}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default ShowHotel;