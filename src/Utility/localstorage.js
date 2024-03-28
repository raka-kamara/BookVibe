import { toast } from "react-toastify";

const getStoredBook = () => {
  const storedBook = localStorage.getItem("read-book");
  
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
}

const saveBook = (id) => {
    const storedBooks = getStoredBook();
    const exists = storedBooks.find(bookId => bookId === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedBooks))
        return toast("Added successfully")
    }
    else return toast("Already added");
}



const getOtherStoredData = () => {
  const storedData = localStorage.getItem("other-functionality");
  
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
}


const saveOtherData= (id) => {
  const storedBooks = getOtherStoredData();
  const exists = storedBooks.find(bookId => bookId === id);

  const storeInRead = getStoredBook();
  const storeInReadExists = storeInRead.find(bookId => bookId === id);

  if(!exists && !storeInReadExists){
      storedBooks.push(id);
      localStorage.setItem('other-functionality', JSON.stringify(storedBooks))
      return toast("Added successfully")
  }
  else if(storeInReadExists){
    return toast("Already added in Read Books");
  }
  else return toast("Already added");
}

const deleteBook = id =>{
  const books = getOtherStoredData();
  const remaining = books.filter(b => parseInt(b.id) !== parseInt(id))
  localStorage.setItem('other-functionality', JSON.stringify(remaining))
  return toast("Removed from wishlist");
}


export { getStoredBook, saveBook, deleteBook, getOtherStoredData, saveOtherData };
