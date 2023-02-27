import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();
  return (
    <>
      {careers.map((career) => (
        <Link
          to="/"
          key={career.id}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {career.title}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Based in {career.location}
          </p>
        </Link>
      ))}
    </>
  );
};

const careersLoader = async () => {
  const res = await fetch('./data/NetNinja.json');
  return res.json();
};

export default Careers;
export { careersLoader };
