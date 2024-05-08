import { Link } from "react-router-dom";
import  PropTypes from 'prop-types'

const SingleService = ({service}) => {
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="p-3">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-orange-600 font-bold">Price : ${service.price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${service._id}`}><button className="btn btn-warning"> Book Now </button></Link>
                    
                </div>
            </div>
        </div>
    );
};
SingleService.propTypes={
    service:PropTypes.object
}
export default SingleService;