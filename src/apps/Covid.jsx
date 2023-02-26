import React, { useEffect,useState } from "react";

const Covid = () => {
    const [data, setData] = useState([])
  const getCovidData = async () => {
    try {
      const response = await fetch("https://data.covid19india.org/data.json");
      //    console.log(response)
      const actualData = await response.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0])
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
    //   return () => {
    //     second
    //   }
  }, []);

  return (
    <>
      <h1>LIVE</h1>
      <h2>COVID-19 Tracker</h2>
      <div className="min">
      <a
        href="#"
        className="block max-w-sm p-6 m-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Country
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          INDIA
        </p>
      </a>

      <a
        href="#"
        className="block max-w-sm p-6 m-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          TOTAL RECOVERED
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          INDIA
        </p>
        <p>{data.recovered}</p>
      </a>

      <a
        href="#"
        className="block max-w-sm p-6 m-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         TOTAL CONFIRMED
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          INDIA
        </p>
        <p>{data.confirmed}</p>
      </a>
      <a
        href="#"
        className="block max-w-sm p-6 m-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         TOTAL DEATH
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          INDIA
        </p>
        <p>{data.deaths}</p>
      </a>
      <a
        href="#"
        className="block max-w-sm p-6 m-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         TOTAL ACTIVE
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          INDIA
        </p>
        <p>{data.active}</p>
      </a>
      <a
        href="#"
        className="block max-w-sm p-6 m-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         LAST UPDATED
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          INDIA
        </p>
        <p>{data.lastupdatedtime}</p>
      </a></div>
     
    </>
  );
};

export default Covid;
