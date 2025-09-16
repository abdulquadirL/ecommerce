"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center px-4 font-medium text-ui-fg-base transition-all ease-out duration-200 focus:outline-none hover:text-indigo-500"
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
              >
                <PopoverPanel className="absolute top-0 left-0 flex flex-col w-full sm:w-80 h-screen z-30 text-sm text-white shadow-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 rounded-r-2xl backdrop-blur-xl border-r border-indigo-700/40 p-8"
                  >
                    {/* Close button */}
                    <div className="flex justify-end" id="xmark">
                      <button
                        data-testid="close-menu-button"
                        onClick={close}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <XMark className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Navigation links */}
                    <ul className="flex flex-col gap-6 mt-8 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, href]) => (
                        <li key={name}>
                          <LocalizedClientLink
                            href={href}
                            className="text-2xl font-semibold tracking-wide hover:text-indigo-300 transition-colors duration-200"
                            onClick={close}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="mt-auto flex flex-col gap-y-6">
                      <div
                        className="flex justify-between items-center border-t border-indigo-600/40 pt-4"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-gray-300",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between text-gray-400 text-xs">
                        © {new Date().getFullYear()} Medusa Store. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
