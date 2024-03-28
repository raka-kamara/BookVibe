import { useLoaderData, useParams } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import {  deleteBook, saveBook, saveOtherData } from "../../Utility/localstorage";
import { ToastContainer } from "react-toastify";

const Detailes = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const bookInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookInt);

  const handleRead = () =>{
    saveBook(bookInt);
    deleteBook(bookInt);
    
    
  }

  const handleWishlist = () =>{
    saveOtherData(bookInt);
  }

 

  return (
    <div className="container my-24 mx-auto ">
      <div className="card lg:card-side bg-base-100 shadow-xl md:w-fit mx-auto">
        <figure>
          <img
            src={book.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>By: {book.author}</p>
          <hr />
          <p>{book.category}</p>
          <hr />
          <p><span className="font-bold">Review: </span>{book.review}</p>
          <p> <span className="font-bold">Tags:</span> <span className="text-[#23BE0A]">#{book.tags[0]} #{book.tags[1]}</span></p>
          <hr />
          <table className="md:w-[500px]">
            <tr>
              <td className="opacity-80">Number of Pages:</td>
              <td className="font-bold">{book.totalPages}</td>
            </tr>
            <tr>
              <td className="opacity-80">Publisher:</td>
              <td className="font-bold">{book.publisher}</td>
            </tr>
            <tr>
              <td className="opacity-80">Year of Publishing:</td>
              <td className="font-bold">{book.yearOfPublishing}</td>
            </tr>
            <tr>
              <td className="opacity-80">Rating:</td>
              <td className="font-bold">{book.rating}</td>
            </tr>
          </table>
          <div className="card-actions justify-end gap-10">
            <button onClick={handleRead} className="btn bg-white w-24 border">Read</button>
            <button onClick={handleWishlist} className="btn w-24  bg-[#50B1C9] border-none text-white
            ">Wishlist</button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    
  );
};

export default Detailes;
