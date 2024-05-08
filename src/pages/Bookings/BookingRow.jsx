import Swal from "sweetalert2";
import PropTypes from 'prop-types'

const BookingRow = ({ order,bookings,setBookings }) => {
    const { _id,image, service, price, date,status } = order;
    const handleDelete = id  => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-beige-ten-37.vercel.app/checkout/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount === 1){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remaining = bookings.filter(book => book._id !== id);
                          setBookings(remaining)
                    }

                })
            }
          });

      
    }

    const handleUpdate = id => {

        fetch(`https://car-doctor-server-beige-ten-37.vercel.app/checkout/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(book => book._id !== id);
                const updated = bookings.find(book => book._id === id)
                updated.status = 'confirm'
                const newBookings = [updated,...remaining];
                setBookings(newBookings)
            }
        })
    }
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar ">
                        <div className="rounded-xl mask mask-squircle w-24 h-24">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>{date}</td>
            <th>
                { status === 'confirm'? <span className="text-blue-600 font-bold">Confirmed</span> :
                <button onClick={()=> handleUpdate(_id)} className="btn btn-ghost bg-red-500 btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};
BookingRow.propTypes={
    order:PropTypes.object,
    bookings:PropTypes.array,
    setBookings: PropTypes.func
}

export default BookingRow;