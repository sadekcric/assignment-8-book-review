import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

const Books = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;

  return (
    <Link
      to={`/${bookId}`}
      className="max-w-md p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 hover:scale-105 hover:border-2 hover:border-[#23BE0A] border-2 border-transparent transition group mb-10"
    >
      <div className="bg-gray-50 p-3 rounded-lg">
        <img src={image} alt={bookName} className="object-cover object-center w-1/2 mx-auto rounded-md h-72 dark:bg-gray-500" />
      </div>
      <div className="mt-6 mb-2 space-y-5">
        {/* tags */}
        <div className="flex gap-5 items-center">
          <p className="px-4 py-1 rounded-full bg-[#23BE0A] bg-opacity-10 text-[#23BE0A] font-semibold">{tags[0]}</p>
          <p className="px-4 py-1 rounded-full bg-[#23BE0A] bg-opacity-10 text-[#23BE0A] font-semibold">{tags[1]}</p>
        </div>

        <h2 className="text-xl lg:text-2xl font-bold tracking-wide group-hover:underline playFire">{bookName}</h2>

        <p className="lg:text-lg font-semibold">By : {author}</p>

        <div className="border-b-2 border-dashed"></div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-400">{category}</p>
        <p className="font-semibold text-gray-400 flex items-center gap-2 text-lg">
          {rating}{" "}
          <span>
            <FaRegStar />
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Books;
