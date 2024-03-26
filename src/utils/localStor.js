import toast from "react-hot-toast";

const getItem = () => {
  const item = localStorage.getItem("books");

  if (item) {
    return JSON.parse(item);
  }

  return [];
};

const setItem = (book) => {
  const items = getItem();

  const isExist = items.find((item) => item.bookId === book.bookId);

  if (isExist) {
    toast.error("You have already this Book");
  } else {
    items.push(book);
    localStorage.setItem("books", JSON.stringify(items));
    toast.success("Book Added to Read List");
  }
};

// WishList

const getWishList = () => {
  const item = localStorage.getItem("wishList");

  if (item) {
    return JSON.parse(item);
  }

  return [];
};

const getWish = getWishList();

const setWishList = (book) => {
  const reads = getItem();

  const filterInRead = reads.find((b) => b.bookId === book.bookId);

  if (filterInRead) {
    toast.error("You have already this Book");
  } else {
    const WishList = getWish.find((item) => item.bookId === book.bookId);

    if (!WishList) {
      getWish.push(book);
      localStorage.setItem("wishList", JSON.stringify(getWish));
      toast.success("Books Added to Wishlist Successfully!");
    } else {
      toast.error("Books Already Listed Wishlist.");
    }
  }
};

export { getItem, setItem, setWishList, getWishList };
