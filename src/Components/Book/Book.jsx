import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import './Book.css'
import SearchForm from '../SearchForm/SearchForm'
import Spinner from './../../Spinner/Spinner';
// import { useForm } from 'react-hook-form';

const Book = () => {
    const[book,setBook] = useState([])
    console.log(book);
    const[search,setSearch] = useState('')
    console.log(search);

    useEffect(() =>{
     fetch('http://localhost:5000/allBooks?search='+search)
     .then(response => response.json())
     .then(data=> setBook(data))
    },[search])

    const handleSearch = event =>{
      setSearch(event.target.value);
  }

    return (
        <>
        
        
    
            <input type="text" onBlur={handleSearch} placeholder="search product"/>
          {
            book.length === 0 && <Spinner/>
        }
         
        <div className="rideCard container  justify-content-center align-items-center mt-5 ">
      
           {
               book.map(({author,image,name,price,_id})=>(
            <div className="">
            <BookCard author={author} image={image} name={name} price={price} id={_id}/>
            </div>
              
               
          ))
         }
</div>
   </> 
   
      
    );
};

export default Book;