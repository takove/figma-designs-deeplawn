import React from 'react';
import SideNavBar from '../components/SideNavBar';

export default function Accounts() {

  const table = [
    {title:"Video Card",                  description:"2124 S St Marys St, Siou...", usage:"24th Apr 2022"}, 
    {title:"TT.",                         description:"Joel Northup", usage:"24th Apr 2022"}, 
    {title:"test",                        description:"Joel Northup",  usage:"24th Apr 2022"}, 
    {title:"2124 S St Marys St, Siou...", description:"Joel Northup", usage:"24th Apr 2022"}, 
    {title:"2124 S St Marys St, Siou...", description:"2124 S St Marys St, Siou...", usage:"24th Apr 2022"}, 
    {title:"2124 S St Marys St, Siou...", description:"Joel Northup", usage:"24th Apr 2022"}, 
  ]
  const accounts = (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900"> {"Tutorials"}</h1>
          </div>
          <div className=" max-w-full px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="grid grid-cols-3 py-4 gap-6 md:grid-cols-4">
                {table.map((tab) => (
                <div
                    key={tab.title}
                    className=""
                >
                    <div className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <video width="320" height="240" controls className="w-full rounded-t-lg">
                                    {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/> */}
                                    {/* <source src="movie.ogg" type="video/ogg"/> */}
                                    Your browser does not support the video tag.
                                </video>
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{tab.title}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    {tab.description}
                                </p>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {/* End Replace */}
          </div>
        </div>
      </main>
    </div>
  );
  return <SideNavBar page={accounts} />;
}