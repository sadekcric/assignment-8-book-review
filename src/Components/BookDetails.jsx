import { Link, useLoaderData, useParams } from "react-router-dom";
import { setItem } from "../utils/localStor";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);

  const book = books.find((b) => b.bookId === intId);

  const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

  const handleReadBtn = (book) => {
    setItem("books", book);
  };

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-10">
      <div className=" flex flex-col lg:flex-row items-center justify-start min-h-[50vh]">
        <div className="flex-1  bg-gray-100 md:p-8 lg:py-24 rounded-xl ">
          <img src={image} alt={bookName} className="w-1/2 mx-auto" />
        </div>

        <div className="flex flex-col px-6  space-y-8 rounded-sm sm:p-8 lg:p-12 lg:flex-1  dark:bg-violet-600 dark:text-gray-50">
          <h1 className="text-2xl lg:text-4xl font-bold playFire">{bookName} </h1>

          <p className="lg:text-lg font-semibold">By : {author}</p>

          <p className="py-3 lg:text-lg font-semibold border-y-2 border-gray-200">{category}</p>

          <p className="lg:text-lg">
            <span className="font-bold">Review : </span>
            {review}
          </p>

          <div className="flex gap-5 items-center pb-5 border-b-2 border-gray-200">
            <p className="font-bold">Tag</p>
            <p className="px-4 py-1 rounded-full bg-[#23BE0A] bg-opacity-10 text-[#23BE0A] font-semibold">#{tags[0]}</p>
            <p className="px-4 py-1 rounded-full bg-[#23BE0A] bg-opacity-10 text-[#23BE0A] font-semibold">#{tags[1]}</p>
          </div>

          <table>
            <td className="dark:bg-gray-300 ">
              <tr className="text-lg">Number of pages:</tr>
              <tr className="text-lg">Publisher:</tr>
              <tr className="text-lg">Year of Publishing:</tr>
              <tr className="text-lg">Rating</tr>
            </td>
            <th className="dark:bg-gray-300">
              <tr className="text-lg text-left">{totalPages}</tr>
              <tr className="text-lg text-left">{publisher}</tr>
              <tr className="text-lg text-left">{yearOfPublishing}</tr>
              <tr className="text-lg text-left">{rating}</tr>
            </th>
          </table>

          <div>
            <button
              onClick={() => handleReadBtn(book)}
              className="px-8 py-4 rounded-lg mr-5 border-2 border-gray-300 hover:border-[#23BE0A] transition font-semibold"
            >
              Read
            </button>

            <button className="px-8 py-4 rounded-lg mr-5 border-2 bg-[#50B1C9] text-white hover:bg-opacity-70 transition font-semibold">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
