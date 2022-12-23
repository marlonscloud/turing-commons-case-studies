import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../slices/userSlice'
import { profileIcon, settingsIcon } from '../assets/icons'
import Link from 'next/link'

const Navbar = () => {
    const user = useSelector(selectUser)
    const navigation = [
        { name: 'Case Studies', href: '/', current: false },
        { name: 'Users', href: '/users', current: false },
    ]

    const userNavigation = [
        { icon: profileIcon, name: 'Your Profile', href: '#' },
        { icon: settingsIcon, name: 'Settings', href: '#' }
    ]

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        window.location.href = "/"
    }

    return (
        <Disclosure as="nav" className="bg-emerald-600">
            {({ open }) => (
                <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        {/* <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        /> */}
                        <p className="text-white font-bold text-lg">Turing Commons</p>
                        </div>
                        <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current
                                    ? 'bg-emerald-700 text-white'
                                    : 'text-white hover:bg-emerald-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                        {/* <button
                            type="button"
                            className="rounded-full bg-emerald-700 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button> */}

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-10 w-10 rounded-full object-cover" src={user.imageUrl} alt={user.name} />
                            </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                    <a
                                        href={item.href}
                                        className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'px-4 py-2 text-sm text-gray-700 gap-2 flex items-center'
                                        )}
                                    >
                                        {item.icon}{item.name}
                                    </a>
                                    )}
                                </Menu.Item>
                                ))}
                                <a onClick={handleLogout} className='gap-2 flex items-center px-4 py-2 text-sm text-red-600 hover:cursor-pointer hover:bg-gray-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    Sign Out
                                </a>
                            </Menu.Items>
                            </Transition>
                        </Menu>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-emerald-700 p-2 text-white hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-emerald-900 text-white' : 'text-white hover:bg-emerald-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                    <div className="border-t border-gray-700 pt-4 pb-3">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src="" alt="" />
                        </div>
                        <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">test</div>
                        <div className="text-sm font-medium leading-none text-gray-400">test@test.com</div>
                        </div>
                        {/* <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button> */}
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-emerald-700 hover:text-white"
                        >
                            {item.icon}{item.name}
                        </Disclosure.Button>
                        ))}
                    </div>
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
    )
}

export default Navbar
