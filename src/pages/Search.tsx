import React from 'react';
import SideNavBar from '../components/SideNavBar';
import SearchBar from "../components/SearchBar";
import TableBody from "../components/TableBody";

export default function Search () {
    
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

  const search = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Search</h1>
          </div>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className=" max-w-full px-4 sm:px-6 lg:px-2 lg:py-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Active Orders
              </h1>
            </div>
            <SearchBar/>
            <TableBody table={table}/>
            {/* End Replace */}
          </div>
        </div>
      </main>
    </div>
  );
  return <SideNavBar page={search} />;
}