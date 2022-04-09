
import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';



export default function GifApp() {

    const [categories, setCategories] = useState([]);



    return (
        <>
            <h1>GifApp</h1>
            <AddCategory setCateg={setCategories}/>
            <hr/>
            {/* <ol> */}
            {/* {
                categories.map( (c) => (  
                    <li  key={c}>{c}</li>                      
                ))  
            } */}
            {
                categories.map( (c) => (
                    <GifGrid key={c} categories={c}/> 
                ) )
            }
            {/* </ol> */}
        </>
  )
}



