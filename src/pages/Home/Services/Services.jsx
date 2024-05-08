// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import SingleService from "./SingleService";


const Services = () => {
//     const [services,setServices] = useState([])
//    useEffect(()=> {
//         fetch('https://car-doctor-server-beige-ten-37.vercel.app/services')
//         .then(res => res.json())
//         .then(data => setServices(data))
//    },[])

const services = useServices();

    return (
        <div className="mt-12">
             <div className="w-3/4 mx-auto text-center space-y-2">
                <h2 className="text-orange-700 font-bold text-2xl">SERVICES</h2>
                  <h2 className="text-4xl font-bold">Our Service Area</h2>
                  <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
             </div>
             <div className="grid grid-cols-1 grid-cols-3  gap-5">
                {
                    services.map(service => <SingleService 
                    key={service._id}
                    service={service}
                    ></SingleService>)
                }
             </div>
        </div>
    );
};

export default Services;