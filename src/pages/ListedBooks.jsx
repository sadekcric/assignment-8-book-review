import { useState } from "react";
import { Dropdown } from "flowbite-react";

import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div>
        <div className="py-5 rounded-xl bg-gray-200 mt-10 mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold playFire text-center">Books</h1>
        </div>

        <div className="flex items-center justify-center mb-24 ">
          <Dropdown label="Sort By" color="teal">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Read</span>
            </Link>
            <Link
              to="wish"
              onClick={() => setActive(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                active === 1 ? "border-2 border-b-0" : "border-b-2"
              }  dark:border-gray-600 dark:text-gray-600`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Wishlist</span>
            </Link>
          </div>
          <div className=" absolute border-b-2 w-full bottom-0 left-52"></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooks;
