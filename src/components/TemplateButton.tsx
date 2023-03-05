import React from 'react'
import {PlusIcon} from '@heroicons/react/24/solid'

export default function SearchButton(data) {
  return (  

    <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-green-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Add New Template
    </button>
  )
}