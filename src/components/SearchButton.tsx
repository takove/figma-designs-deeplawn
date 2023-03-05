import React from 'react'
import {PlusIcon} from '@heroicons/react/24/solid'

type Props = {
  open?: boolean;
  setOpen?: any;
}

export default function SearchButton(props: Props) {
  const {
    open,
    setOpen
  } = props;

  return (  

    <button
        onClick={()=>setOpen(!open)}
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-green-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        New Instant Lawn Measurment
    </button>
  )
}