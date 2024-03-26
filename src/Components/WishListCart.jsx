import { CiLocationOn } from "react-icons/ci";
import { RiGroupLine, RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WishListCart = ({ book }) => {
  const { bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
  return (
    <div className="mb-5 flex flex-col lg:flex-row lg:gap-10 gap-5 p-4 border-2 border-gray-200 rounded-lg items-center">
      <div className=" p-10 bg-gray-100 rounded-lg">
        <img className=" w-[200px]" src={image} alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl lg:text-3xl font-bold playFire">{bookName}</h1>

        <p className="lg:text-lg font-semibold">By: {author} </p>

        <div className="flex gap-5 items-center">
          <p className="lg:text-lg font-bold">Tag</p>

          <p className="lg:text-lg bg-[#23BE0A] bg-opacity-30 text-[#23BE0A] font-semibold px-6 py-2 rounded-full">#{tags[0]}</p>

          <p className="lg:text-lg bg-[#23BE0A] bg-opacity-30 text-[#23BE0A] font-semibold px-6 py-2 rounded-full">#{tags[1]}</p>
          <p className="flex items-center gap-1 lg:text-lg">
            <span>
              <CiLocationOn />
            </span>
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>

        <div className="flex items-center gap-8">
          <p className="flex items-center gap-1 lg:text-lg">
            <span>
              <RiGroupLine />
            </span>
            Publisher: {publisher}
          </p>
          <p className="flex items-center gap-1 lg:text-lg">
            <span>
              <RiPagesLine />
            </span>
            Page: {totalPages}
          </p>
        </div>

        <div className="w-full border-b"></div>

        <div className="flex items-center gap-8">
          <p className="bg-[#328EFF] bg-opacity-30 text-[#328EFF] font-semibold px-6 py-2 rounded-full">Category: {category}</p>

          <p className="bg-[#FFAC33] bg-opacity-30 text-[#FFAC33] font-semibold px-6 py-2 rounded-full">Rating: {rating}</p>
          <Link to={`/${bookId}`}>
            {" "}
            <button className="bg-[#23BE0A] text-white font-semibold px-6 py-2 rounded-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListCart;
