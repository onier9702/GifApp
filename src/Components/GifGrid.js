
import React, {useEffect, useState} from 'react';
// import { getGifs } from '../Helpers/getGifs';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({categories}) => {

    const {data:images, loading} = useFetchGifs(categories);

    // console.log(data)

    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     // Call something and break an infinite loop
    //     getGifs(categories)
    //         .then( setImages ) // lo que devuelve el helpers getGifs
    //         // .catch( e => `There was errors as ${e}`)
    
    // }, [ categories ])
    
  return (
    <>
        <h3 >{categories}</h3>

        { loading && <h3 className='animate__animated animate__flash'>Loading</h3> }
        <div className='card-grid animate__animated animate__bounce'>
                {
                    images.map( img => (
                        <GifGridItems 
                            key={img.id} 
                            {...img}
                        />
                    ) )
                } 
        </div>
    </>
  )
}





