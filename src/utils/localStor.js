import toast from "react-hot-toast";

const getItem = (key) => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return [];
};

const setItem = (key, book) => {
  const items = getItem(key);

  const isExist = items.find((item) => item.bookId === book.bookId);

  if (isExist) {
    toast.error("Book Already Read!");
  } else {
    items.push(book);
    localStorage.setItem(key, JSON.stringify(items));
    toast.success("Successfully added!");
  }
};

export { getItem, setItem };
