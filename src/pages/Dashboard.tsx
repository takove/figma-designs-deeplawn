import React from "react";
import SideNavBar from "../components/SideNavBar";
import Stats from "../components/Stats";
import Charts from "../components/Chart";
import TableBody from "../components/TableBody";
import SearchBar from "../components/SearchBar";
import DateDropdown from "../components/DateDropdown";
import SortDropdown from '../components/SortDropdown';

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
          <div className="flex flex-col-2 max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard overview
            </h1>
            <div className="justify-end max-w-full px-4 sm:px-6 lg:px-8">
              <DateDropdown/>
            </div>
            
          </div>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <Stats stats={stats} />
            
            <Charts/>
            <div className=" max-w-full px-4 sm:px-6 lg:px-2 lg:py-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Active Orders
              </h1>
            </div>
            <div className="justify-end max-w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2">
              <SearchBar/>
              <SortDropdown/>
            </div>
            <TableBody table={table}/>
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
