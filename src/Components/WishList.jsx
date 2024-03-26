import { useEffect, useState } from "react";
import { getWishList } from "../utils/localStor";

const WishList = () => {
  const [getWish, setGetWith] = useState([]);

  useEffect(() => {
    const wishItem = getWishList("books");
    setGetWith([...getWish, wishItem]);
  }, []);

  console.log(getWish);
  return (
    <div>
      <h2>This is Wish list</h2>
    </div>
  );
};

export default WishList;
