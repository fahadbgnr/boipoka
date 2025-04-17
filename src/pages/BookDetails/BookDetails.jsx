import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { image, bookName } = singleBook || {};



    const handleMarkAsRead = (id) => {

        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        //   });
        toast("Wow so easy!")

        addToStoredDB(id);

    }



    return (
        <div className='mx-auto w-2/3 my-10'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <ToastContainer />

            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mark As Read</button>
            <button className="btn btn-info m-2">Add To Wishlist</button>
        </div>
    );
};

export default BookDetails;