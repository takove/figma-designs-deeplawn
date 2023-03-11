import React from "react";

export default function Tabs(props:any) {
  const tabs = props.tabs
  return (
    <div className="max-w-7xl bg-greenish-gray flex items-center mt-4 rounded-md" >
      {tabs.map((tab:any)=>(
        
        <div className="inline-flex rounded-md shadow-sm p-2 " key={tab.id}>
          <a
            href={tab.href}
            aria-current="page"
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-white hover:shadow-lg hover:text-green-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-green-500"
          >
            {tab.title}
          </a>
          
        </div>
      
      ))}
    </div>
  );
}
