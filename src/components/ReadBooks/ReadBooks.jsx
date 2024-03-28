import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { getStoredBook } from "../../Utility/localstorage";
import { Link } from "react-router-dom";
import PagesToRead from "../PagesToRead/PagesToRead";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);


  
// Shows filterd book by category on descendent order by book name
  const handleBooksFilter = filter =>{
    let filteredBooks = [];

    if(filter === 'All'){
      filteredBooks = books; 
    }
    else if(filter === 'Classic'){
      filteredBooks = books.filter(book => book.category === 'Classic');
      
    }
    else if(filter === 'Dystopian'){
      filteredBooks = books.filter(book => book.category === 'Dystopian');
      
    }
    else if(filter === 'Science Fiction'){
      filteredBooks= books.filter(book => book.category === 'Science Fiction');
      
    }
    else if(filter === 'Fantasy'){
      filteredBooks = books.filter(book => book.category === 'Fantasy');
      
    }
    filteredBooks.sort((a, b) => {
      const nameA = a.bookName.toUpperCase();
      const nameB = b.bookName.toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
  
    setReadBooks(filteredBooks);
  }

  

  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const storedBookIds = getStoredBook();
    if (books.length > 0) {
      const bookStored = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );

      setReadBooks(bookStored);
    }
  }, [books]);

  return (
    <div className="my-5">
      <div  className="dropdown dropdown-btn justify-center items-center flex py-10  ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-[#23BE0A] text-white "
        >
         Sort by <p className="text-3xl"><RiArrowDropDownLine /></p>
        </div>
        <ul              
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleBooksFilter('All')}>
            <a>All</a>
          </li>
          <li onClick={() => handleBooksFilter('Classic')}>
            <a>Classic</a>
          </li>
          <li onClick={() => handleBooksFilter('Dystopian')}>
            <a>Dystopian</a>
          </li>
          <li onClick={() => handleBooksFilter('Science Fiction')}>
            <a>Science Fiction</a>
          </li>
          <li onClick={() => handleBooksFilter('Fantasy')}>
            <a>Fantasy</a>
          </li>
        </ul>
      </div>
      <ul >
        {readBooks.map((book) => (
          <li key={book.id} className="my-10">
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
          </li>
        ))}
      </ul>
      <PagesToRead booksData={{books, readBooks}} ></PagesToRead>
    </div>
  );
};

export default ReadBooks;
