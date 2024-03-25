import { Link } from "react-router-dom";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className=" bg-gray-100 rounded-2xl mt-10  flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:gap-20">
        <div className="flex flex-col space-y-10 justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left ">
          <h1 className=" text-5xl font-bold sm:text-6xl playFire leading-normal">Books to freshen up your bookshelf</h1>

          <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/list"
              className=" rounded px-6 py-4 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative text-lg font-semibold">View The List</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
