import { useEffect, useState } from "react";
import { getStoredBook } from "../../Utility/localstorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';



const PagesToRead = () => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


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

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  

  return (
    <div className="flex justify-center">
      

      <BarChart
      width={500}
      height={300}
      data={readBooks}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
      
    </div>
  );
};

export default PagesToRead;
