import React, { useEffect, useState } from 'react';
import Course from './Course';


const Courses = () => {
    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetch('./Course.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div className="container py-5">
            <h2 className='text-center'>Our Courses are here available</h2>
            <div className="row g-4 mt-3">
            {
                products.map(product=><Course
                    key={product.code}
                    product={product} 
                    ></Course>)
            }
            </div>
        </div>
        </div>
    );
};

export default Courses;