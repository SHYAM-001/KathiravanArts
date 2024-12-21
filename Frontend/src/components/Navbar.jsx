import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/logo1.png';


const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Gallery', href: '/gallery', current: false }, // Update to not have the active class
    { name: 'Contact Us', href: '/contact', current: false },
];


export default function NavBar() {
    const navigate = useNavigate();

    return (
        <Disclosure as="nav" className="bg-white text-black">
            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#ca9236] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition duration-300 ease-in-out">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <NavLink to="/">
                                <img
                                    alt="KathiravanArts"
                                    src={ logo }
                                    className="h-16 w-auto transform transition duration-300 ease-in-out hover:scale-110 mt-2"
                                />
                            </NavLink>
                        </div>
                        <div className="hidden sm:ml-6 sm:block mt-4">
                            <div className="flex space-x-12">
                                { navigation.map((item) => ((
                                    <NavLink
                                        key={ item.name }
                                        to={ item.href }
                                        className={ ({ isActive }) =>
                                            classNames(
                                                // Active state (when user is on the page)
                                                isActive ? 'navlinks navlinks-active text-black' : 'navlinks hover:text-black',
                                                'rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-md'
                                            )
                                        }
                                    >
                                        { item.name }
                                    </NavLink>


                                )
                                )) }
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <NavLink to="/login" className="bg-[#cca9236] text-black">Login</NavLink>
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ca9236] transition duration-300 ease-in-out">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt="Profile"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out focus:outline-none">
                                <Menu.Item>
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Your Profile
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Settings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Sign out
                                    </Link>
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    { navigation.map((item) => (
                        <DisclosureButton
                            key={ item.name }
                            as={ NavLink }
                            to={ item.href }
                            className={ ({ isActive }) =>
                                classNames(
                                    isActive ? 'bg-[#ca9236] text-black' : 'text-black hover:bg-[#ca9236] hover:text-black',
                                    'block rounded-md px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out'
                                ) }
                        >
                            { item.name }
                        </DisclosureButton>
                    )) }
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
