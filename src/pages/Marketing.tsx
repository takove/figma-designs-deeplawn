import React, { useState, useEffect } from 'react';
import SideNavBar from '../components/SideNavBar';
import Templates from '../components/Templates';
import SearchButton from '../components/SearchButton';
import Tabs from '../components/Tabs';
import MarketingPopup from '../components/MarketingPopup';
import Cards from '../components/Cards';

export default function Marketing () {
  const [open, setOpen] = useState(false)
  const tabs = [
    { name: 'Templates', href: '#', current: false },
    { name: 'Density Blaster', href: '#', current: false },
    { name: 'Campaigns', href: '#', current: true },
  ] 
  const [activeTab, setActiveTab] = useState<any>(tabs[0].name);
  useEffect(() => {
    setActiveTab(activeTab);
    console.log("test")
  }, [activeTab]);
  const marketing = (
        <div>
          <main className="flex-1">
            <div className="py-6">
              <div className=" max-w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                <h1 className="text-2xl font-bold text-gray-900">Marketing</h1>
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
                <Templates/>
                <MarketingPopup 
                open={open}
                setOpen={setOpen}
                />
               {/* End Replace */}
               <Cards/>
              </div>
            </div>
          </main>
        </div>
      );
      return <SideNavBar page={marketing} />;
}