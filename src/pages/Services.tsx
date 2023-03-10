import React, {useState, useEffect} from 'react';
import SideNavBar from '../components/SideNavBar';
import Tabs from "../components/Tabs";
import ServiceCards from '../components/ServiceCards';
import SearchBar from "../components/SearchBar";
// import TemplateButton from "../components/TemplateButton";
import SearchButton from "../components/SearchButton";
import MarketingPopup from '../components/MarketingPopup';
import ProgramCards from '../components/ProgramCards';
import ImportButton from '../components/ImportButton';

export default function Services () {
  const [open, setOpen] = useState(false);
  const tabs = [
    { name: 'Services', href: '#', current: false },
    { name: 'Packages', href: '#', current: false },
    { name: 'Discounts', href: '#', current: true },
  ] 
  const [activeTab, setActiveTab] = useState<any>(tabs[0].name);
  useEffect(() => {
    setActiveTab(activeTab);
    console.log("test")
  }, [activeTab]);
  const services = (
        <div>
          <main className="flex-1">
            <div className="py-6">
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900">Services</h1>
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
                    <SearchBar/>
                    <ImportButton
                    open={open}
                    setOpen={setOpen}
                    />
                    <SearchButton
                    open={open}
                    setOpen={setOpen}
                    />
                    <MarketingPopup 
                    open={open}
                    setOpen={setOpen}
                    />
                    <ServiceCards/>
                </div>
            ) : activeTab === tabs[1].name ? (
                <div>
                    <SearchBar/>
                    <ImportButton
                    open={open}
                    setOpen={setOpen}
                    />
                    <SearchButton
                    open={open}
                    setOpen={setOpen}
                    />
                    <MarketingPopup 
                    open={open}
                    setOpen={setOpen}
                    />
                    <ProgramCards/>
                </div>
            ): null }
                {/* <ServiceCards/> */}
                {/* End Replace */}
              </div>
            </div>
          </main>
        </div>
      );
      return <SideNavBar page={services} />;
}