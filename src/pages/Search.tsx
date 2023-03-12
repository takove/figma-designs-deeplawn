import React, { useState, useEffect} from 'react';
import SideNavBar from '../components/SideNavBar';
import SearchSearchBar from '../components/SearchSearchBar';
import SearchPageInfo from '../components/SearchPageInfo';


export default function Search () {
  const pages = [1,2,3]
  const [activeTab, setActiveTab] = useState<any>(pages[0]);
  useEffect(() => {
    setActiveTab(activeTab);
  }, [activeTab]);
  const search = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Search</h1>
          </div>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <SearchSearchBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />
            {activeTab === pages[0] ? (
                <div>
                    <div className="py-4">
                      Payments
                    </div>
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
            ) : activeTab === pages[1] ? (
                <div>
                    <div className="py-4">
                      Your Profile
                    </div>
                    <SearchPageInfo/>
                    {/* <Account/> */}
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
            ): activeTab === pages[2] ? (
              <div>
                  <div className="py-4">
                    Payment Info
                  </div>
                  {/* <PaymentInfo/> */}
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
  return <SideNavBar page={search} />;
}