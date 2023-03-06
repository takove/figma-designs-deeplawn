import React from 'react';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const tabs = [
    { name: 'Orders', href: '#', current: false },
    { name: 'Leads', href: '#', current: false },
    { name: 'Measurments', href: '#', current: true },
  ]
export default function Tabs() {
    return (
        <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
            <div className="md:flex md:items-center md:justify-between"></div>
                <div className="mt-4">
                    <div className="max-w-5xl bg-greenish-gray flex items-center mt-4 rounded-md">
                        <div className="inline-flex rounded-md shadow-sm p-2">
                            <div className="sm:hidden">
                                <label htmlFor="current-tab" className="sr-only">
                                Select a tab
                                </label>
                                <select
                                id="current-tab"
                                name="current-tab"
                                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-l-lg hover:bg-white hover:text-green-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-green-500"
                                // defaultValue={tabs.find((tab) => tab.current).name}
                                >
                                {tabs.map((tab) => (
                                    <option key={tab.name}>{tab.name}</option>
                                ))}
                                </select>
                            </div>
                            <div className="hidden sm:block">
                            <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                                <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                    ? 'border-green-500 text-green-600'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'px-4 py-2 text-sm font-medium text-gray-600 rounded-l-lg rounded-r-lg hover:bg-white hover:text-green-500 focus:z-10 focus:text-green-500'
                                    
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                                >
                                {tab.name}
                                </a>
                            ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}