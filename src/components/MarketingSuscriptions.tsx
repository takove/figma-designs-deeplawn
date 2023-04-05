import React from "react";
import TableBody from "./TableBody";

export default function Suscriptions() {
  const table = [
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},
    {type:"Business Website Searches", total:"234", searchUsage:"23%"},

  ]
  return (
    <div className="font-[inter]">
      {/* main box */}
      <div className="flex ">
        <div className="border border-gray-200 rounded-lg w-[447px] p-6">
          <div className="flex justify-between">
            <div>
              <div className="font-bold text-xl">Premium package</div>
              <div className="text-sm">1000 credits</div>
            </div>
            <div className="flex items-end">
              <p className="font-bold text-3xl">$10</p>
              <p className="text-sm">/credit</p>
            </div>
          </div>
          <div className="flex justify-between mt-12">
            <div>
              <div className="flex text-sm">
                <p className="font-bold">780&nbsp;</p>
                <p>searches left</p>
              </div>
              <p>
                <div className="w-[140%] bg-[#E7FFF2] rounded-full h-2.5">
                  <div
                    className="bg-[#0B512B] h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  />
                </div>
              </p>
            </div>
            <button className="bg-[#28A662] px-4 py-2 rounded-lg text-white text-xs">
              Buy more credits
            </button>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg w-[447px] p-6 ml-8  flex justify-between">
          <div>
            <p className="text-xs">Next Payment</p>
            <p className="text-base font-bold" >24th April, 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-5xl">
        <div className="font-bold text-xl">Search usage</div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 mt-4">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                  Type
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Total
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Search usage
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>              
              
            </tr>
          </thead>
          <tbody>
            {table.map((table:any) => (
                <tr className="bg-white border-b hover:bg-[#F7FCFA] ">            
                <td className="px-6 py-4">{table.type}</td>
                <td className="px-6 py-4">{table.total}</td>
                <td className="px-6 py-4">{table.searchUsage}</td>       
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
