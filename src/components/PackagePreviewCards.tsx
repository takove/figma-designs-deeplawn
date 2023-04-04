import React from "react";

function CheckIcon() {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
          fill="#28A662"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.5105 7.90188L10.174 14.0258L8.50023 12.2192C8.34192 12.0811 8.14151 12.0006 7.93165 11.991C7.72179 11.9813 7.51484 12.043 7.34453 12.166C7.17975 12.2818 7.06397 12.4548 7.01977 12.6512C6.97556 12.8477 7.00609 13.0536 7.10541 13.2288L9.09801 16.4833C9.29727 16.7756 9.64265 16.9615 10.0146 16.9615C10.3866 16.9615 10.7187 16.7756 10.9179 16.4833C11.2367 16.0715 17.3208 8.80519 17.3208 8.80519C18.1178 8.00815 17.1481 7.27753 16.5238 7.90188H16.5105Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      <path
        d="M8 3L8 13"
        stroke="#7F8783"
        stroke-width="1.5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <path
        d="M13 8L3 8"
        stroke="#7F8783"
        stroke-width="1.5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default function PackagePreviewCards() {
  return (
    <div className="w-[370px] rounded-lg bg-white flex hover:bg-gray-50 p-4 md:w-[392px] md:flex-col lg:w-[650px] font-[inter] text-sm">
      <img
        className=" w-[172px] h-[180px] mr-4 rounded-lg object-cover md:w-full md:h-[172px]"
        src="https://picsum.photos/400/300"
        alt=""
      />
      <div className="md:mt-4">
        <p className="font-bold mb-2 leading-5 md:flex md:justify-between md:h-4">
          Package Preview
        </p>
        <p className="font-bold mb-2 leading-5">$50</p>

        <p className="leading-5">This is a test service</p>
        <div className="flex mt-2 md:justify-between">
          <div className="flex">
          <CheckIcon />
          <div className="md:flex ">
            <p className="ml-2">Service one x 1</p>
          </div>
          </div>
          <p className="hidden md:flex float-right">$50</p>
        </div>
        <div className="flex mt-2 md:justify-between">
          <div className="flex">
          <CheckIcon />
          <div className="md:flex ">
            <p className="ml-2">Service one x 2</p>
          </div>
          </div>
          <p className="hidden md:flex float-right">$250</p>
        </div>
        <button className="border border-gray-200 py-2 px-4 rounded-lg flex text-center items-center mt-4 text-xs bg-white">
          <PlusIcon />
          <p>select package</p>
        </button>
      </div>
    </div>
  );
}
