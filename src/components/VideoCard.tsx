import React from "react";

export default function VideoCard() {
  return (
    <div className="border border-slate-200 rounded-lg max-w-sm">
      <div
        role="status"
        className="flex items-center justify-center h-56 rounded-t-lg bg-green-700 animate-pulse "
      >
        <svg
          className="w-12 h-12 text-green-500 "
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 384 512"
        >
          <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="flex justify-between py-3">
        <div className="px-5 py-2.5" >Service Area</div>
        <div>
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Play Video</button>        </div>
      </div>
    </div>
  );
}
