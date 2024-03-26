import { useEffect, useState } from "react";
import { getItem } from "../utils/localStor";
import ReadCart from "../Components/ReadCart";

const Read = () => {
  const [readItems, setReadItems] = useState([]);

  useEffect(() => {
    const read = getItem();
    setReadItems(read);
  }, []);

  return (
    <div className="mt-10">
      {readItems.map((book) => (
        <ReadCart key={book.bookId} read={book} />
      ))}
    </div>
  );
};

export default Read;
