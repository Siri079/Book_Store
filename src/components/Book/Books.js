import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Book from './Book';
import './Book.css';
const URL="https://book-store-z6q8.onrender.com/books";
const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data).catch((err)=>{
        if(err.message==='Network Error' &!err.response){
            console.log('Network error-make sure api is running');
        } 
});
}
const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
        
        fetchHandler().then(data=>setBooks(data.books))
       
    },[]);
    console.log(books);
    return (
        <div>
            <ul>
                {books &&
                 books.map((book,i)=>(
                    <li  key={i}>
                        <Book book={book} />
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default Books;
