import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { getItem } from "../utils/localStor";
import { useEffect, useState } from "react";

const Pages = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const books = getItem();
    setBook(books);
  }, []);

  return (
    <div className="mt-10 flex justify-center items-center min-h-[calc(100vh-144px)] mx-auto overflow-x-clip">
      <BarChart width={800} height={500} data={book}>
        <CartesianGrid />
        <XAxis dataKey="bookName" />
        <YAxis dataKey="totalPages" />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPages" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Pages;
