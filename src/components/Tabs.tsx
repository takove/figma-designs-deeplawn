import React, {useState} from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
//   const tabs = [
//     { name: 'Orders', href: '#', current: false },
//     { name: 'Leads', href: '#', current: false },
//     { name: 'Measurments', href: '#', current: true },
//   ]
export default function Tabs({
    activeTab,
    setActiveTab,
    tabs
}) {
    const [open, setOpen] = useState(false);
    //const tabs = props.tabs;
    console.log(tabs)
    const [somethingChanged, setSomethingChanged] = useState(false);
    // const [activeTab, setActiveTab] = useState<any>(tabs[0].name);
    const handleChangeTab = (tab) => {
        if (tab === activeTab) {
          return;
        }
        if (!somethingChanged) {
          setActiveTab(tab);
        //   setActiveTabHistory(tab);
        } else {
        //   setCancelModal(true);
        //   setActiveTabHistory(tab);
        }
    };

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
                                {tabs.map((tabs:any) => (
                                    <option key={tabs.name}>{tabs.name}</option>
                                ))}
                                </select>
                            </div>
                            <div className="hidden sm:block">
                            <nav className="-mb-px flex space-x-8">
                            <ul className="flex flex-wrap -mb-px ml-6">
                            {tabs.map((tabs:any, index) => (
                                <li key={index} className="xl:mr-2">
                                <button
                                    onClick={() => handleChangeTab(tabs.name)}
                                    className={`flex p-2 xl:p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300
                            ${activeTab === tabs.name &&
                                    'text-sm font-medium text-gray-600 rounded-l-lg rounded-r-lg hover:bg-white hover:text-green-500 focus:z-10 focus:text-green-500'
                                    }`}
                                >
                                    {/* <span className="hidden xl:block">
                                    <img
                                        src={tab.icon}
                                        alt={tab.icon}
                                        className="h-5 w-5 xl:mr-4"
                                        style={{
                                        filter:
                                        activeTab===tab.name?"brightness(0) saturate(100%) invert(69%) sepia(82%) saturate(5905%) hue-rotate(202deg) brightness(99%) contrast(95%)":
                                            'brightness(0) saturate(100%) invert(46%) sepia(10%) saturate(505%) hue-rotate(182deg) brightness(93%) contrast(92%)',
                                        }}
                                    />
                                    </span> */}
                                    {tabs.name}

                                </button>
                                </li>
                            ))}
                            </ul>                    
                            {/* {tabs.map((tabs:any) => (
                                <a
                                key={tabs.name}
                                href={tabs.href}
                                className={classNames(
                                    tabs.current
                                    ? 'border-green-500 text-green-600'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'px-4 py-2 text-sm font-medium text-gray-600 rounded-l-lg rounded-r-lg hover:bg-white hover:text-green-500 focus:z-10 focus:text-green-500'
                                    
                                )}
                                aria-current={tabs.current ? 'page' : undefined}
                                >
                                {tabs.name}
                                </a>
                            ))} */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}