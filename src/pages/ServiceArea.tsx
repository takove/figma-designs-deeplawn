import React from 'react';
import SideNavBar from '../components/SideNavBar';
import { Tooltip } from 'antd';

export default function ServiceArea () {
    const serviceArea = (
        <div>
          <main className="flex-1">
            <div className="py-6">
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900">Service Area</h1>
              </div>
              <div className=" max-w-full px-4 sm:px-6 lg:px-8">
                {/* Replace with your content */}
    
                <div className="bg-white shadow-md rounded-lg p-4 mr-4 lg:w-80 w-full mb-3 lg:mb-0" style={{maxHeight: '500px', overflow: 'auto'}}>
                  <div className="flex justify-between">
                    <div className="text-md text-xl font-medium pb-4">List of Regions</div>
                    {/* {enableAdvancedServiceArea && ( */}
                      <div className="flex items-center text-md text-md font-medium pb-4">
                        Reach
                        <div className="relative flex flex-col items-center group">
                          <Tooltip
                            placement="top"
                            title="Reach is the number of properties in a region. Larger regions may take a few minutes for reach to populate."
                          >
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </Tooltip>
                        </div>
                      </div>
                    {/* )} */}
                  </div>
                </div>
    
                {/* End Replace */}
              </div>
            </div>
          </main>
        </div>
      );
      return <SideNavBar page={serviceArea} />;
}