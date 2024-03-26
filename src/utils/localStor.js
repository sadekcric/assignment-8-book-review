import toast from "react-hot-toast";

const getWish = getWishList();

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
    toast.error("Book Already Read!");
  } else {
    items.push(book);
    localStorage.setItem("books", JSON.stringify(items));
    toast.success("Successfully added!");
  }
};

// WishList

const getWishList = () => {
  const item = localStorage.getItem("WishList");

  if (item) {
    return JSON.parse(item);
  }

  return [];
};

const setWishList = (book) => {
  const reads = getItem();

  const filterInRead = reads.find((b) => b.bookId === book.bookId);

  if (filterInRead) {
    toast.error("Book already Read");
  } else {
    const WishList = getWish.find((item) => item.bookId === book.bookId);

    if (!WishList) {
      getWish.push(book);
      localStorage.setItem("wishList", JSON.stringify(getWish));
      toast.success("Successfully added!");
    } else {
      toast.error("Item is Already Listed");
    }
  }
};

export { getItem, setItem, setWishList, getWishList };
