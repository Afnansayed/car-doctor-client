import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authproviders";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings,setBookings] = useState([])
    const axiosSecure = useAxiosSecure();
     
    // const  url = `https://car-doctor-server-beige-ten-37.vercel.app/checkout?email=${user?.email}`;
    const  url = `/checkout?email=${user?.email}`;
    useEffect(() => {
        // fetch(url) credentials: include while using fetch
        // .then(res => res.json())
        // .then(data => setBookings(data))

        // axios.get(url, {withCredentials: true})
        // .then(res => {
        //   setBookings(res.data)
        // })

        axiosSecure.get(url)
        .then(res => {
          setBookings(res.data)
        })

    },[url,axiosSecure])
    console.log(bookings)
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead> */}
          <tbody>
            {/* row */}
            {
               bookings.map(order => <BookingRow key={order._id}
                order={order}
                bookings={bookings}
                setBookings={setBookings}
               ></BookingRow> )
            }
            
           
          </tbody>    
        </table>
      </div>
    );
};

export default Bookings;