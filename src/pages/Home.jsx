import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Books from "../Components/Books";
import { useEffect, useState } from "react";

const Home = () => {
  const items = useLoaderData();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(items);
  }, [items]);

  return (
    <div>
      <Banner />

      <div className="mt-10 lg:mt-24 mb-10">
        <h3 className="text-center text-3xl lg:text-5xl font-bold playFire">Books</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books?.map((book, idx) => (
          <Books key={idx} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
