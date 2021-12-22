import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from './../Sidebar/Sidebar';
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const[imageUrl,setImageUrl]= useState(null)
    const onSubmit = data => {
        const bookData ={
            name: data.name,
            author: data.author,
            price: data.price,
            image: imageUrl
        }
        const url =`http://localhost:5000/addBook`
        console.log(bookData);
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(response =>console.log("data send to server successfully",response))
    }

    const handleUploadImage = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", '624d1380187d45b6ee69de16b51ca873')
        imageData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>

            <section className=" row">
                <Sidebar />
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", height: '600px' }}>
                    <h5 className="text-primary">Add a Book</h5>

                    <div style={{ backgroundColor: 'white', borderRadius: '10px', width: '80%', height: '200px' }}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="col-md-12 container mt-3">
                                <Col className="mt-2">
                                    <level ><b>Book Name</b></level>
                                    <Form.Control placeholder="Book Name" {...register("name", { required: true })}
                                        />
                                    {errors.name && <span>This field is required</span>}
                                </Col>
                                <Col className="mt-2">
                                    <level><b>Author Name</b></level>
                                    <Form.Control placeholder="Author Name"  {...register("author", { required: true })} />
                                    {errors.author && <span>This field is required</span>}
                                </Col>

                            </Row>

                            <Row className="col-md-12 container mt-2">
                                <Col className="mt-2">
                                    <level ><b>Add Price</b></level>
                                    <Form.Control placeholder="Enter Price"  {...register("price", { required: true })} />
                                    {errors.price && <span>This field is required</span>}
                                </Col>
                                <Col>
                                    <Form.Group controlId="formFile">
                                        <Form.Label><b>Add Book Cover Photo</b></Form.Label>
                                        <Form.Control type="file" onChange={handleUploadImage} />
                                        
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="success" className="btn" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default AddService;