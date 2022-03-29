import React, { useEffect, useState } from 'react';
import Service from './Service';



const Services = () => {
    const [services, setServices] = useState([])


    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="container py-5">
            <h2>Our Services are here available</h2>
            <div className="row g-4 mt-3">
            {
                services.map(service=><Service
                    key={service.code}
                    service={service} 
                    ></Service>)
            }
            </div>
        </div>
        </div>
    );
};

export default Services;