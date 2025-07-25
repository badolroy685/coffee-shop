import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, price, quantity, photo } = coffee;
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                       
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })

            }
        });
    }
    return (
        <div className="card card-side bg-[#F5F4F1] shadow-sm">
            <figure>
                <img className='py-8 pl-8'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="ml-8 flex gap-16">
                <div className=' my-auto'>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className='text-xl font-bold'>Price: {price}</p>
                    <p className='text-xl font-bold'>Quantity: {quantity}</p>
                </div>
                <div className="my-auto ">
                    <div className="join join-vertical space-y-2">
                      <Link to = {`/coffee/${_id}`}>
                        <button className="btn join-item">View</button>
                      </Link>
                      <Link to ={`/updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                      </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;