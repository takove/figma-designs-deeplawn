import React from 'react';
import SideNavBar from '../components/SideNavBar';

export default function Search () {

  const search = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Search</h1>
          </div>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            {/* End Replace */}
          </div>
        </div>
      </main>
    </div>
  );
  return <SideNavBar page={search} />;
}