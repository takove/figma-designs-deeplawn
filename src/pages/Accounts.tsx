import React, { useState, useEffect} from 'react';
import SideNavBar from '../components/SideNavBar';
import Payments from "../components/Payments";
import DateDropdown from "../components/DateDropdown";
import BillingHistory from "../components/BillingHistory";
import PaymentInfo from "../components/PaymentInfo";
import Account from "../components/Account";
import Tabs from "../components/Tabs";

export default function Accounts() {
  
  const tabs = [
    { name: 'Payments', href: '#', current: false },
    { name: 'Account', href: '#', current: false },
    { name: 'Payment Info', href: '#', current: true },
    { name: 'Billing History', href: '#', current: true },
  ]
  const [activeTab, setActiveTab] = useState<any>(tabs[0].name);
  useEffect(() => {
    setActiveTab(activeTab);
    console.log("test")
  }, [activeTab]);

  const table = [
    {type:"2124 S St Marys St, Siou...", total:"Joel Northup", usage:"24th Apr 2022"}, 
    {type:"2124 S St Marys St, Siou...", total:"Joel Northup", usage:"24th Apr 2022"}, 
    {type:"2124 S St Marys St, Siou...", total:"Joel Northup", usage:"24th Apr 2022"}, 
    {type:"2124 S St Marys St, Siou...", total:"Joel Northup", usage:"24th Apr 2022"}, 
    {type:"2124 S St Marys St, Siou...", total:"Joel Northup", usage:"24th Apr 2022"}, 
    {type:"2124 S St Marys St, Siou...", total:"Joel Northup", usage:"24th Apr 2022"}, 
  ]
  const table2 = [
    {Invoice:"2124 S St Marys St, Siou...", Date:"24th Apr 2022", Amount:"100"}, 
    {Invoice:"2124 S St Marys St, Siou...", Date:"24th Apr 2022", Amount:"111"}, 
    {Invoice:"2124 S St Marys St, Siou...", Date:"24th Apr 2022", Amount:"111"}, 
    {Invoice:"2124 S St Marys St, Siou...", Date:"24th Apr 2022", Amount:"111"}, 
    {Invoice:"2124 S St Marys St, Siou...", Date:"24th Apr 2022", Amount:"111"}, 
    {Invoice:"2124 S St Marys St, Siou...", Date:"24th Apr 2022", Amount:"222"}, 
  ]
  const accounts = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Hello {"Accounts"}</h1>
          </div>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <Tabs 
            tabs={tabs} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />
            {activeTab === tabs[0].name ? (
                <div>
                    <div className="py-4">
                      Payments
                    </div>
                    <Payments table={table}/>
                    {/* <ImportButton 
                    open={open}
                    setOpen={setOpen}
                    />
                    <SearchButton
                    open={open}
                    setOpen={setOpen}
                    />
                    <ServiceCards/> */}
                </div>
            ) : activeTab === tabs[1].name ? (
                <div>
                    <div className="py-4">
                      Your Profile
                    </div>
                    <Account/>
                    {/* <SearchBar/>
                    <ImportButton
                    open={open}
                    setOpen={setOpen}
                    />
                    <SearchButton
                    open={open}
                    setOpen={setOpen}
                    />
                    <ProgramCards/> */}
                </div>
            ): activeTab === tabs[2].name ? (
              <div>
                  <div className="py-4">
                    Payment Info
                  </div>
                  <PaymentInfo/>
                  {/* <SearchBar/>
                  <ImportButton
                  open={open}
                  setOpen={setOpen}
                  />
                  <SearchButton
                  open={open}
                  setOpen={setOpen}
                  />
                  <Discounts/> */}
              </div>
            ) : activeTab === tabs[3].name ? (
              <div>
                <div className="py-4">
                  Billing History
                </div>
                
                  <DateDropdown/>
                  <BillingHistory table={table2}/>
                  {/* <SearchBar/>
                  <ImportButton
                  open={open}
                  setOpen={setOpen}
                  />
                  <SearchButton
                  open={open}
                  setOpen={setOpen}
                  />
                  <Discounts/> */}
              </div>
            ) : null }
            {/* End Replace */}
          </div>
        </div>
      </main>
    </div>
  );
  return <SideNavBar page={accounts} />;
}