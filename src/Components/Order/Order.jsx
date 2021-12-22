import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './../../App';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import LoggedInUser from './../LoggedInUser/LoggedInUser';
import Spinner from './../../Spinner/Spinner';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[booking,setBooking] = useState({})
    useEffect(() => {
        const url = "http://localhost:5000/booking?email="+loggedInUser.email
        axios(url)
        .then(data=> setBooking(data.data))
    }, [])
    return (
        <>
        <Header/>
        {booking.length === 0 && <Spinner/>}
        <section className="container order-section">
   
        <LoggedInUser/> 
 
        {booking.length > 0 ? (
          <article className="m-5">
            <h5>Your Orders : {booking.length}</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Author</th>
                  <th>PlaceDate</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.productName}</td>
                    <td>{booking.author}</td>
                    <td>{booking.placeDate}</td>
                    <td>{booking.quantity}</td>
                    <td>{"$" + booking.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </article>
        ) : (
          <article className="m-5">
            <h3>You have no any order! Please order some thing</h3>
            <Button
                as={Link}
                to="/"
                variant="primary"
                className="mt-3"
                type="button"
              >
                Order Something
              </Button>
          </article>
        )}
      </section>
      </>
    );
};

export default Order;