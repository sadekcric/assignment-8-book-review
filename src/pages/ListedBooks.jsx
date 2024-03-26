import { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItem, getWishList } from "../utils/localStor";
import ReadCart from "../Components/ReadCart";
import WishListCart from "./../Components/WishListCart";

const ListedBooks = () => {
  // const [active, setActive] = useState(0);
  const [readItems, setReadItems] = useState([]);
  const [getWish, setGetWish] = useState([]);

  const handleClick = () => {
    const sortBook = readItems.sort((a, b) => b.rating - a.rating);
    const sortWish = getWish.sort((a, b) => b.rating - a.rating);
    setReadItems([...sortBook]);
    setGetWish([...sortWish]);
  };

  const handlePageNumber = () => {
    const sortBook = readItems.sort((a, b) => b.totalPages - a.totalPages);
    const sortWish = getWish.sort((a, b) => b.totalPages - a.totalPages);
    setReadItems([...sortBook]);
    setGetWish([...sortWish]);
  };

  const handlePublished = () => {
    const sortBook = readItems.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    const sortWish = getWish.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    setReadItems([...sortBook]);
    setGetWish([...sortWish]);
  };

  console.log(readItems);

  useEffect(() => {
    const wishItem = getWishList();
    setGetWish(wishItem);
  }, []);

  useEffect(() => {
    const read = getItem();
    setReadItems(read);
  }, []);

  return (
    <div className="">
      <div>
        <div className="py-10 rounded-xl bg-gray-200 mt-10 mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold playFire text-center">Books</h1>
        </div>

        <div className="flex items-center justify-center mb-24 ">
          <Dropdown label="Sort By" color="teal">
            <Dropdown.Item onClick={handleClick}>Rating</Dropdown.Item>
            <Dropdown.Item onClick={handlePageNumber}>Number of pages</Dropdown.Item>
            <Dropdown.Item onClick={handlePublished}>Published</Dropdown.Item>
          </Dropdown>
        </div>

        <Tabs>
          <div className="mb-10 text-lg lg:text-xl font-semibold">
            <TabList>
              <Tab>Read Books</Tab>
              <Tab>Wishlist Books</Tab>
            </TabList>
          </div>

          <TabPanel>
            {readItems.map((book) => (
              <ReadCart key={book.bookId} read={book} />
            ))}
          </TabPanel>
          <TabPanel>
            {getWish.map((book) => (
              <WishListCart key={book.bookId} book={book} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
