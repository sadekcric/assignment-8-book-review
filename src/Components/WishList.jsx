import { useEffect, useState } from "react";
import { getWishList } from "../utils/localStor";
import WishListCart from "./WishListCart";

const WishList = () => {
  const [getWish, setGetWish] = useState([]);

  useEffect(() => {
    const wishItem = getWishList();
    setGetWish(wishItem);
  }, []);

  return (
    <div className="mt-10">
      {getWish.map((book) => (
        <WishListCart key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default WishList;
