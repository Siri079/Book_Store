import React from 'react';
import { Button} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import './Book.css';
import { redirect } from 'react-router-dom';
import axios from 'axios';
const Book = (props) => {
    const history=useNavigate()
    const{_id,name,author,description,price,image}=props.book;
    const deletehander= async()=>{
       await axios.delete(`https://book-store-z6q8.onrender.com//books/${_id}`)
       .then(res=>res.data)
       .then(()=>history("/"))
       .then(()=>history("/books"));
    }
    return (
        <div className='card'>
        <img src={image} alt={name} />
      
      <h3>{name}</h3>
      <article>By {author}</article>
      <p>{description}</p>
      <h2>{price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:"auto"}}>
        Update
      </Button>
      <Button onClick={deletehander} sx={{mt:"auto"}} >
        Delete
      </Button>

            
        </div>
    );
}

export default Book;
