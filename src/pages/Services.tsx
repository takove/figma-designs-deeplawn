import React, {useState} from 'react';
import SideNavBar from '../components/SideNavBar';
import SearchBar from "../components/SearchBar";
// import TemplateButton from "../components/TemplateButton";
import SearchButton from "../components/SearchButton";
import Tabs from "../components/Tabs";
import MarketingPopup from '../components/MarketingPopup';

export default function Services () {
  const [open, setOpen] = useState(false)
  const tabs = [
    { name: 'Services', href: '#', current: false },
    { name: 'Packages', href: '#', current: false },
    { name: 'Discounts', href: '#', current: true },
  ] 
  const services = (
        <div>
          <main className="flex-1">
            <div className="py-6">
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900">Services</h1>
              </div>
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                {/* Replace with your content */}
    
                <Tabs tabs={tabs}/>
                <SearchBar/>
                {/* <TemplateButton /> */}
                <SearchButton
                open={open}
                setOpen={setOpen}
                />
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
      return <SideNavBar page={services} />;
}