import React from 'react';
import './BookCard.css'
import {Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const BookCard = ({author,image,price,name,id}) => {
    return (
        <Card  className="card mb-2">
       <div className="card_img">
       <Card.Img variant="top" src={image}/>
       </div>
        <Card.Body>
            <Card.Title><b>{name}</b></Card.Title>
            <p className="text-secondary">{author}</p>
             <p className="book_price">${price} <span><Link to={`/book/${id}`}><button className="card_button">Buy Now</button></Link></span></p>
        </Card.Body>
    </Card>
    );
};

export default BookCard;