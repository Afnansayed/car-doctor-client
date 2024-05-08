import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authproviders";


const CheckOut = () => {
    const data = useLoaderData();
  
    const {user} = useContext(AuthContext)
    //console.log(user)
    //console.log(data)
    const {_id,title,img} = data;

    const handaleCheckOut = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const date = form.get('date');
        const price = form.get('price');
        const email = form.get('email');

        const order = {
            customer_name: name,
            date,
            price,
            email,
            service_id: _id,
            service: title,
            image : img
        }
        console.log(order)

        //post in date base
       fetch('https://car-doctor-server-beige-ten-37.vercel.app/checkout',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
       })

    }
    return (
        <div>
            <h2 className="text-center text-4xl">CheckOut </h2>
            <form onSubmit={handaleCheckOut} className="card-body grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} placeholder="FirstName" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="Date" name="date" placeholder="Date" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Your Phone" className="input input-bordered" name="price" defaultValue={'$' +  data.price} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                </div>
                {/* <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Comments</span>
                    </label>
                    <textarea name="" id="" cols="5" rows="10" className="border-2 rounded-lg "></textarea>
                </div> */}
                <div className="form-control mt-6 col-span-2">
                    <input type="submit" value='Order Confirm' className="btn btn-block btn-warning" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;