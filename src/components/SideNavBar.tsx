import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  MapIcon,
  HomeIcon,
  CodeBracketIcon,
  MegaphoneIcon,
  CalculatorIcon,
  IdentificationIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import MenuPopup from "./MenuPopup";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Search", href: "/search", icon: MagnifyingGlassIcon },
  {
    name: "Services",
    href: "/services",
    icon: AdjustmentsHorizontalIcon,
  },
  { name: "Service Area", href: "/service-area", icon: MapIcon },
  { name: "Integrations", href: "/integrations", icon: CodeBracketIcon },
  { name: "Branding", href: "/branding", icon: IdentificationIcon },
  { name: "Measurements", href: "/measurements", icon: CalculatorIcon },
  { name: "Marketing", href: "/marketing", icon: MegaphoneIcon },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SideNavBar(props: any) {
  const page = props.page;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-50">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full "
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://www.deeplawn.com/deeplawnlogo.png"
                        alt="Deep Lawn"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item: any) => (
                        <NavLink
                          key={item.id}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md" +
                              (isActive
                                ? " bg-white text-green-500"
                                : " text-gray-600 hover:text-green-500 hover:bg-white")
                            );
                          }}
                          // className={classNames(
                          //   item.current
                          //     ? "bg-white text-green-500"
                          //     : "text-gray-600 hover:text-green-500 hover:bg-white",
                          //   "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          // )}
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 p-4">
                    <a
                      href="/"
                      className="group block w-full flex-shrink-0 bg-white rounded-md p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://this-person-does-not-exist.com/img/avatar-11979b1e2e9d97c3dd0197c6c4349a7d.jpg"
                            alt=""
                          />
                          <div className="ml-3">
                            <p className="text-base font-medium text-gray-500">
                              Xslet Company
                            </p>
                          </div>
                        </div>
                        <EllipsisVerticalIcon className="h-6 w-6 text-gray-500" />
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-greenish-gray ">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://www.deeplawn.com/deeplawnlogo.png"
                  alt="Deep Lawn "
                />
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md" +
                        (isActive
                          ? " bg-white text-green-500"
                          : " text-gray-600 hover:text-green-500 hover:bg-white")
                      );
                    }}
                  >
                    <item.icon
                      className="mr-3 h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 ">
              <a
                href="/accounts"
                className="group block w-full flex-shrink-0 bg-white rounded-md p-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://this-person-does-not-exist.com/img/avatar-11979b1e2e9d97c3dd0197c6c4349a7d.jpg"
                      alt=""
                    />
                    <div className="ml-3 ">
                      <p className="text-sm font-medium text-gray-500">
                        Xslet Company
                      </p>
                    </div>
                  </div>
                  <MenuPopup />
                  {/* <EllipsisVerticalIcon className="h-6 w-6 text-gray-500" /> */}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden " >
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {page}
        </div>
      </div>
    </>
  );
}
