import React from "react";
import SideNavBar from "../components/SideNavBar";

export default function Integrations() {
  const integrations = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
          </div>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <div className="max-w-5xl bg-greenish-gray flex items-center mt-4 rounded-md">
              <div className="inline-flex rounded-md shadow-sm p-2">
                <a
                  href="/"
                  aria-current="page"
                  className="px-4 py-2 text-sm font-medium text-gray-600   rounded-l-lg hover:bg-white hover:text-green-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-green-500"
                >
                  Widget Codes
                </a>
                <a
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-gray-600  hover:bg-white hover:text-green-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-green-500"
                >
                  Integrations
                </a>
                <a
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-gray-600 rounded-r-md hover:bg-white hover:text-green-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-green-500"
                >
                  Add-ons
                </a>
              </div>
            </div>
            

            {/* End Replace */}
          </div>
        </div>
      </main>
    </div>
  );
  return <SideNavBar page={integrations} />;
}
