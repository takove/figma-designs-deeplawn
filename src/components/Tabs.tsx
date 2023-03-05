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
                    <div className="sm:hidden">
                        <label htmlFor="current-tab" className="sr-only">
                        Select a tab
                        </label>
                        <select
                        id="current-tab"
                        name="current-tab"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                            'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
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
    )
}