import React, { useState, useEffect} from 'react';
import SideNavBar from '../components/SideNavBar';
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import TableBody from "../components/TableBody";
import Tabs from "../components/Tabs";
import MarketingPopup from '../components/MarketingPopup';
import DateDropdown from '../components/DateDropdown';
import SortDropdown from '../components/SortDropdown';

export default function Measurements() {
  const [open, setOpen] = useState(false)
  const tabs = [
    { name: 'Orders', href: '#', current: false },
    { name: 'Leads', href: '#', current: false },
    { name: 'Measurments', href: '#', current: true },
  ]
  const [activeTab, setActiveTab] = useState<any>(tabs[0].name);
  useEffect(() => {
    setActiveTab(activeTab);
    console.log("test")
  }, [activeTab]);
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
                  <SearchButton
                   open={open}
                   setOpen={setOpen}
                   />
                </div>
              </div>
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <Tabs 
                tabs={tabs} 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                />
                <div className="justify-end max-w-full px-4 sm:px-6 lg:px-8 grid grid-cols-3">
                  <SearchBar/>
                  <div className="justify-end max-w-full lg:px-8 py-4">
                    <SortDropdown/>
                    <DateDropdown/>
                  </div>
                </div>
                <TableBody table={table}/>
                <MarketingPopup 
                open={open}
                setOpen={setOpen}
                />
                {/* End Replace */}
              </div>
            </div>
          </main>
        </div>
      );
      return <SideNavBar page={measurement} />;
}