import React from 'react';
import bookingdata from '../BookingData/BookingData'
import ShowHotel from '../ShowHotel/ShowHotel';
const Booking = () => {
    console.log(bookingdata);
    return (
        <div>
           {
               bookingdata.map(hotelList => <ShowHotel hotelList={hotelList}></ShowHotel>)
           }
        </div>
    );
};

export default Booking;