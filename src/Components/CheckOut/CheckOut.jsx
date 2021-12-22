import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './CheckOut.css'
import { Button } from 'react-bootstrap';
import { UserContext } from './../../App';
import {useHistory, Link} from 'react-router-dom';
import Spinner from './../../Spinner/Spinner';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedBook,setSelectedBook] = useState({})
    const {bookId}= useParams();
    const history = useHistory()
    useEffect(() =>{
        axios(`http://localhost:5000/book/${bookId}`)
        .then(data=> setSelectedBook(data.data))
       },[bookId])

       const handleCheckOut =()=>{

        const orderDetails = {
            orderBy: loggedInUser.name,
            orderOwnerEmail: loggedInUser.email,
            productName: selectedBook.name,
            placeDate: new Date().toLocaleDateString(),
            quantity: 1,
            author: selectedBook.author,
            price: selectedBook.price
          };

          const url = `http://localhost:5000/addOrder`
          fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
              body: JSON.stringify(orderDetails)
          })
          .then(res => res.json())
          .then(data => {
            if (data) {
              history.replace("/order");
            }
          })

       }
   
    return (
        <div >
        <Header/>
        {selectedBook.length > 0 && <Spinner/>}
        <section className="container px-5 main">
        <article>
          <h2 className="mt-5 text-dark">CheckOut</h2>
  
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-4 mb-5">
              <img src={selectedBook.image} className="w-50" alt={selectedBook.name} />
            </div>
            <div className="col-md-7 py-5 py-md-0">
              <h4>Name: {selectedBook.name}</h4>
              <div className="my-4 d-flex  justify-content-between align-items-center">
                <h5>Author: {selectedBook.author}</h5>
                <h5>Quantity: 1</h5>
              </div> 
  
              <div className="d-flex  justify-content-between align-items-center">
                <h5>Price: {selectedBook.price}</h5>
                <h5>Total: {selectedBook.price}</h5>
              </div>
              <Button
              variant="success"
              className="m-auto mt-4 d-block "
              onClick={handleCheckOut}
            >
              Checkout
            </Button>
             
            </div>
          </div>
        </article>
      </section>
      </div>
    );
};

export default CheckOut;