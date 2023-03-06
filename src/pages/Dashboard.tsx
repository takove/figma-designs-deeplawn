import React from "react";
import SideNavBar from "../components/SideNavBar";
import Stats from "../components/Stats";
import Charts from "../components/Chart";
import TableBody from "../components/TableBody";

export default function Dashboard() {
  const stats = [
    { title: "$55,600,596", subtitle: "TOTAL SALES" },
    { title: "567", subtitle: "TOTAL QUOTES" },
    { title: "234,568", subtitle: "TOTAL SEARCHES" },
  ];
  const table = [
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}, 
    {address:"2124 S St Marys St, Siou...", ownersName:"Joel Northup", date:"24th Apr 2022", amountPaid:"$2399", type:"Estimate sent"}
  ]
  const dashboard = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard overview
            </h1>
          </div>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <Stats stats={stats} />
            
            <Charts/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">
                        Owners Name
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
                        Date
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
                        Amount Paid
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
                      <div className="flex items-center">Actions</div>
                    </th>
                  </tr>
                </thead>
                <TableBody table={table}/>
              </table>
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </div>
  )
  
  return (
    <>
      <SideNavBar page={dashboard}/>      
    </>
  );
}
