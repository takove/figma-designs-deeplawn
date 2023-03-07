import React from 'react';
import SideNavBar from '../components/SideNavBar';
import Tabs from '../components/Tabs';

export default function Marketing () {
  const tabs = [{title:"Subsctiptions", href:'/'}, {title: 'Account', href:'/'}, {title:'Payment Info', href:'/'}, {title:'Billing History', href:'/'}]
    const marketing = (
        <div>
          <main className="flex-1">
            <div className="py-6">
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900">Marketing</h1>
              </div>
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                {/* Replace with your content */}
    
                <Tabs tabs={tabs}/>
    
                {/* End Replace */}
              </div>
            </div>
          </main>
        </div>
      );
      return <SideNavBar page={marketing} />;
}