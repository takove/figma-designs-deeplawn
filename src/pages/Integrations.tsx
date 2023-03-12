import React, {useEffect, useState} from "react";
import SideNavBar from "../components/SideNavBar";
import Tabs from "../components/Tabs";
import WidgetComponent from "../components/WidgetComponent";
import IntegrationSection from "../components/IntegrationSection";

export default function Integrations() {
  const tabs = [
    { name: 'Widget Codes', href: '#', current: false },
    { name: 'Integrations', href: '#', current: false },
    { name: 'Add-ons', href: '#', current: true },
  ] 
  const [activeTab, setActiveTab] = useState<any>(tabs[0].name);
  useEffect(() => {
    setActiveTab(activeTab);
    console.log("test")
  }, [activeTab]);
  const integrations = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
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
                    <WidgetComponent/>
                </div>
                ) : activeTab === tabs[1].name ? (
                <div>
                    <IntegrationSection/>
                </div>
                ): activeTab === tabs[2].name ? (
                <div>
                  
                  
                </div>
                ) : null }

            {/* End Replace */}
          </div>
        </div>
      </main>
    </div>
  );
  return <SideNavBar page={integrations} />;
}
