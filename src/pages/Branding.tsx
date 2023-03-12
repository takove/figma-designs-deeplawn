import React, { useState, useEffect} from 'react';
import SideNavBar from '../components/SideNavBar';
import Tabs from "../components/Tabs";


export default function Branding () {
  const tabs = [
    { name: 'Widget', href: '#', current: false },
    { name: 'Leadforms', href: '#', current: false },
    { name: 'Measurenent', href: '#', current: true },
    { name: 'Service Cards', href: '#', current: true },
    { name: 'Checkout', href: '#', current: true },
    { name: 'Settings', href: '#', current: true },
  ]
  const [activeTab, setActiveTab] = useState<any>(tabs[0].name);
  useEffect(() => {
    setActiveTab(activeTab);
    console.log("test")
  }, [activeTab]);

  const branding = (
      <div>
        <main className="flex-1">
          <div className="py-6">
            <div className=" max-w-full px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900">Branding</h1>
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
                    Widget
                    {/* <Subscriptions table={table}/> */}
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
                    Leadforms
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
                  Measurements
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
              ) :  activeTab === tabs[3].name ? (
                <div>
                    Services Cards
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
                ) : activeTab === tabs[4].name ? (
                  <div>
                      Checkout
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
                  ) : activeTab === tabs[5].name ? (
                    <div>
                        Settings
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
    return <SideNavBar page={branding} />;
}