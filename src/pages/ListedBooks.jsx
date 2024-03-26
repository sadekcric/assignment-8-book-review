import { useState } from "react";
import { Dropdown } from "flowbite-react";

import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="">
      <div>
        <div className="py-10 rounded-xl bg-gray-200 mt-10 mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold playFire text-center">Books</h1>
        </div>

        <div className="flex items-center justify-center mb-24 ">
          <Dropdown label="Sort By" color="teal">
            <Dropdown.Item>Rating</Dropdown.Item>
            <Dropdown.Item>Number of pages</Dropdown.Item>
            <Dropdown.Item>Published</Dropdown.Item>
          </Dropdown>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 ">
            <Link
              to=""
              onClick={() => setActive(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                active === 0 ? "border-2 border-b-0" : "border-b-2"
              }  dark:border-gray-600 dark:text-gray-600`}
            >
              <span className="text-xl font-semibold">Read Books</span>
            </Link>
            <Link
              to="wish"
              onClick={() => setActive(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                active === 1 ? "border-2 border-b-0" : "border-b-2"
              }  dark:border-gray-600 dark:text-gray-600`}
            >
              <span className="text-xl font-semibold">Wishlist Books</span>
            </Link>
          </div>
          <div className=" absolute border-b-2 w-full bottom-0 left-[305px]"></div>
        </div>
      </div>

      <div className="overflow-x-clip">
        <Outlet />
      </div>
    </div>
  );
};

export default ListedBooks;
