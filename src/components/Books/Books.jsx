import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  const { image, bookName, author, category, rating, tags, bookId } = book;
  return (
    <Link to={`/book/${bookId}`}><div>
        
      <div className="border max-w-xs p-6 rounded-xl shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div className="bg-[#F3F3F3] w-full border p-5 flex justify-center rounded-xl">
          <img className="w-32 h-44" src={image} alt="" />
        </div>
        
        <div className="mt-6 mb-2">
          <div className="flex justify-start gap-7 my-1 text-md font-semibold text-[#23BE0A]">
            <p>{tags[0]}</p>
            <p>{tags[1]}</p>
            
          </div>
          <h2 className="text-xl font-semibold tracking-wide ">{bookName}</h2>
          <p className="my-1">By: {author}</p>
          <hr className="border border-dashed my-5" />
        </div>
        <div className="flex justify-between">
          <p>{category}</p>
          <div className="flex items-center gap-2">
            <p>{rating}</p>
            <CiStar />
          </div>
        </div>
      </div>
    </div></Link>
  );
};

export default Books;
