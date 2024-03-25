import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="p-3 lg:w-4/5 mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
