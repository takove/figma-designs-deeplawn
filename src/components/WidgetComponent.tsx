import React from 'react'

export default function WidgetComponent() {
    return (
        <div className="py-8">
            <div className="relative flex flex-col-1 items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-8 shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:border-gray-400">
                Add the below code snippet, anywhere on your site that you would like the 
                Quote Widget to appear.
                <div className="">
                    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-8 shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:border-gray-400">
                        This is a test
                    </div>
                    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-8 shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:border-gray-400">
                        This is a test
                    </div>
                </div>
            </div>
        </div>

    )
}