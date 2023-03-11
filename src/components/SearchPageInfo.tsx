import React from 'react'

export default function SearchPageInfo() {
    return (
       <div>
        <div className="mt-10 sm:mt-0 py-4">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:col-span-1 md:mt-0">
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="md:col-span-1">
                                    <div className="px-4 sm:px-0">
                                        this is a test
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-10 sm:mt-0 py-4">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:col-span-1 md:mt-0">
                    <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            this is a test
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-10 sm:mt-0 py-4">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          
          <div className="mt-5 md:col-span-1 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Discount Name
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Address
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Website
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Company Email
                      </label>
                      <input
                        type="email"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Select Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="bg-gray-50 px-16 py-3 text-right sm:px-0">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-green-600 py-2 px-40 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                  >
                    Continue
                  </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}