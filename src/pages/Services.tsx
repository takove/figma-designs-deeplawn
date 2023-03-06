import React from 'react';
import SideNavBar from '../components/SideNavBar';
import SearchBar from "../components/SearchBar";
import TemplateButton from "../components/TemplateButton";
import Tabs from "../components/Tabs";

export default function Services () {
    const services = (
        <div>
          <main className="flex-1">
            <div className="py-6">
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900">Services</h1>
              </div>
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                {/* Replace with your content */}
    
                <Tabs/>
                <SearchBar/>
                <TemplateButton />
                {/* End Replace */}
              </div>
            </div>
          </main>
        </div>
      );
      return <SideNavBar page={services} />;
}