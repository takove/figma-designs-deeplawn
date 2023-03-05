import React from 'react';
import SideNavBar from '../components/SideNavBar';
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import TableBody from "../components/TableBody";
import Tabs from "../components/Tabs";


export default function Measurements() {
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
    const measurement = (
        <div>
          <main className="flex-1">
            <div className="py-6 ">
              <div className=" max-w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                <h1 className="text-2xl flex font-bold text-gray-900">Measurements</h1>
                <div className="justify-end">
                  <SearchButton/>
                </div>
              </div>
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <Tabs/>
                <SearchBar/>
                <TableBody table={table}/>
                {/* </Tabs> */}
                {/* End Replace */}
              </div>
            </div>
          </main>
        </div>
      );
      return <SideNavBar page={measurement} />;
}