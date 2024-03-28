import { useEffect, useState } from "react";
import { getOtherStoredData } from "../../Utility/localstorage";
import { Link } from "react-router-dom";


const WishlistBooks = () => { 
  
  const [books, setBooks] = useState([]);
  const [appliedBooks, setAppliedBooks] = useState([]);
  useEffect(() =>{
    fetch("Books.json")
    .then((res) => res.json())
    .then((data) => setBooks(data));
  },[]);

  useEffect(() =>{
    const booksStoring = getOtherStoredData();
      if(books.length > 0){
        const storingBooks = books.filter((book) =>
        booksStoring.includes(book.bookId)
      );

      setAppliedBooks(storingBooks);
        console.log(storingBooks);
      }
  }, [books])
    
  return (
   
    <div>
      <ul>
        {
          appliedBooks.map(book => <li key={book.id} className="my-10">
          <div className="card lg:card-side bg-base-100 shadow-xl md:w-[800px] mx-10">
      <figure>
        <img
          src={book.image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.bookName}</h2>
        <p>By: {book.author}</p>
        <p className="flex gap-5"> <span className="font-bold">Tags:</span> <span className="text-[#23BE0A]">#{book.tags[0]} #{book.tags[1]}</span> Year of Publishing: {book.yearOfPublishing}</p>
        <table className="md:w-[400px]">
          <tr>
            <td className="opacity-80">Number of Pages:</td>
            <td className="font-bold">{book.totalPages}</td>
          </tr>
          <tr>
            <td className="opacity-80">Publisher:</td>
            <td className="font-bold">{book.publisher}</td>
          </tr>
        </table>

        <div className="card-actions justify-start gap-5">
          <button  className="btn btn-wide w-40 bg-[#328EFF26] text-[#328EFF] rounded-full  border">Category:{book.category}</button>
          <button  className="btn btn-wide w-40 bg-[#FFAC3326] text-[#FFAC33]  border rounded-full">Rating: {book.rating}</button>
         <Link to={`/book/${book.bookId}`}> <button  className="btn btn-wide w-40   bg-[#23BE0A] border-none rounded-full text-white
          ">View Details</button></Link> 
        </div>

      </div>
    </div>
        </li> )
        }
      </ul>
    </div>
  );
};

export default WishlistBooks;