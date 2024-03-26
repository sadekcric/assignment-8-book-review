import { useEffect, useState } from "react";
import { getItem } from "../utils/localStor";

const Read = () => {
  const [getRead, setRead] = useState([]);

  useEffect(() => {
    const readItem = getItem();
    setRead([...getRead, readItem]);
  }, []);

  console.log(getRead);
  return (
    <div>
      <h2>This is Read Item</h2>
    </div>
  );
};

export default Read;
