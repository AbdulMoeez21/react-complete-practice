import React,{useEffect,useState} from 'react'

const StateWiseCovid = () => {
    const [data, setData] = useState([])
    const getData=async()=>{
        const response=await fetch('https://data.covid19india.org/data.json')
        const actualData=await response.json()
        console.log(actualData.statewise)
        setData(actualData.statewise)
              }
    useEffect(() => {
      getData()

    
      
    }, [])
    
  return (
    <div>
      <h1 className='mb-10'>India 2019 COVID-19 dashboard</h1>
      
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    State
                </th>
                <th scope="col" className="px-6 py-3">
                    Confirmed
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Recovered
                </th>
                <th scope="col" className="px-6 py-3">
                    Deaths
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Active
                </th>
                <th scope="col" className="px-6 py-3">
                    Updated
                </th>
            </tr>
        </thead>
        <tbody>
        {
            data.map((currElement,ind)=>{
                return (
                    <tr key={ind} className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
{currElement.state}
                </th>
                <td className="px-6 py-4">
                {currElement.confirmed}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {currElement.recovered}
                </td>
                <td className="px-6 py-4">
                {currElement.deaths}
                </td>
                <td className="px-6 py-4  bg-gray-50 dark:bg-gray-800">
                {currElement.active}
                </td>
                <td className="px-6 py-4">
                {currElement.lastupdatedtime}
                </td>
            </tr>
                )
            })
        }
           
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default StateWiseCovid
