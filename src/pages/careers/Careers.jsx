import React from "react";
import { Link} from "react-router-dom";
import Career from "../../data/Career";
const Careers = () => {
  
  return (
    <>
      {Career.map((c) => (
        <Link
          to="/"
          key={c.id}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {c.title}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Based in {c.location}
          </p>
        </Link>
      ))}
    </>
  );
};




export default Careers;
