import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Sidebar from './../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import './Manage.css'

const Manage = () => {
    const[manageBook,setManageBook] = useState({})
    useEffect(() =>{
        fetch('http://localhost:5000/Books')
        .then(response => response.json())
        .then(data=> setManageBook(data))
       },[])
   

       const handelDeletProduct=(id) =>{
         
        const url =`http://localhost:5000/deleteBook/${id}`
        fetch(url,{
            method: 'DELETE'
           
           
        })
        .then(res=> res.json())
        .then(result =>{
           if (result) {
          
           }
        })
      
       }
    return (
        <div>
           
            <section className=" row">
          <Sidebar/>
           <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
               <h5 className="text-primary">Manage Book</h5>
          

               {manageBook.length > 0 ? (
            <Table bordered hover className="maneg-product-table mb-4">
              <thead className="border-bottom">
                <tr>
                  <th>Product Name</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {manageBook.map((book) => (
                  <tr key={book._id}>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>${book.price}</td>
                    <td>
                    
                      <button  onClick={() => handelDeletProduct(book._id)}
                       className="login_button">delete</button>
                       
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <article className="mt-4">
              <h3>No Product Found ! Please add some product</h3>
              <Button
                as={Link}
                to="/add"
                variant="primary"
                className="mt-3"
                type="button"
              >
                Add Product
              </Button>
            </article>
          )}
              

          


        </div>
        </section>
        </div>
    );
};

export default Manage;