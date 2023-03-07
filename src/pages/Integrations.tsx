import React from "react";
import SideNavBar from "../components/SideNavBar";
import Tabs from "../components/Tabs";

export default function Integrations() {
  const tabs = [{title:"Widget Codes", href:'/'}, {title: 'Integrations', href:'/'}, {title:'Add-ons', href:'/'}]
  const integrations = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
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
  return <SideNavBar page={integrations} />;
}
