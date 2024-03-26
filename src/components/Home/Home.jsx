import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="p-4 container mx-auto">
      <Banner></Banner>

      <h1 className="text-center font-bold text-2xl mt-10">Books</h1>
      <div className="grid md:grid-cols-3 gap-10 my-10 ">
        {books.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default Home;
