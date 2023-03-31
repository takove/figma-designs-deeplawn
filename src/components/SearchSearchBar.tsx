import React, {useState} from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'


export default function SearchSearchBar({
    activeTab,
    setActiveTab,
}) {
    const [somethingChanged, setSomethingChanged] = useState(false);
    const handleSubmit = () => {
        console.log("test")
        if (!somethingChanged) {
            setActiveTab(2);
        //   setActiveTabHistory(tab);
        }
        if (2 === activeTab) {
            return;
        }
        // } else {
        // //   setCancelModal(true);
        // //   setActiveTabHistory(tab);
        // }
    }
    return (
        
        <div className="relative py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
                onClick={handleSubmit}
                id="submit"
                name="search"
                className="block w-2/5 rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                placeholder="Search for address, owner"
                type="search"
            />
        </div>
    );
  }
