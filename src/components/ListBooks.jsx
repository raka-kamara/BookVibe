

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "./ReadBooks/ReadBooks";
import WishlistBooks from "./WishlistBooks/WishlistBooks";

const ListBooks = () => {

  
  return (
    <div className="container p-4 mx-auto">
      <div className="w-full flex items-center justify-center p-10 bg-[#1313130D] rounded-3xl">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      
      <Tabs className="my-10">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks></ReadBooks>
        </TabPanel>
        <TabPanel>
          <WishlistBooks></WishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListBooks;
