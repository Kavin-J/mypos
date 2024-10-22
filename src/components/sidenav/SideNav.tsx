import React, { useState } from "react";
import { closeFullscreen, openFullscreen } from "../../utils";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { logout } from "../../app/features/auth/authSlice";
import { BuildingStorefrontIcon, ChartPieIcon, Square3Stack3DIcon, Squares2X2Icon } from '@heroicons/react/24/solid';

type Props = {};
interface NavMmenu {
    name: string;
    href: string;
    icon: JSX.Element;
    disable?: boolean;
}

const navMenu: NavMmenu[] = [
    { name: 'POS', href: '/', icon: <Squares2X2Icon className="w-8 h-8" /> },
    { name: 'Dashboard', href: '/dashboard', icon: <ChartPieIcon className="w-8 h-8" /> },
    { name: 'Store', href: '/store', icon: <BuildingStorefrontIcon className="w-8 h-8" /> },
    { name: 'Management', href: '/management', icon: <Square3Stack3DIcon className="w-8 h-8" />, disable: true },
];

function SideNav({ }: Props) {
    const [fullScreen, setFullScreen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleScreen = () => {
        if (!fullScreen) {
            openFullscreen();
        } else {
            closeFullscreen();
        }
        setFullScreen(!fullScreen);
    };
    const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar toggle state
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen); // Toggle sidebar state
    };

    const handleSignout = () => dispatch(logout());

    return (
        <>

            <aside
                id="default-sidebar"
                className={`absolute transition-transform duration-500 w-28 h-screen bg-gradient-to-b  from-indigo-500 from-10% via-sky-500 via-60% to-emerald-500 to-90% text-white flex flex-col justify-between shadow-lg ${isSidebarOpen ? '-translate-x-0 ' : '-translate-x-full  '}`}
                aria-label="Sidebar"
            >
                <div className="flex flex-col justify-between h-full px-3 py-6 space-y-6">
                    {/* Logo or Dashboard Icon */}
                    <div className="flex justify-center items-center">
                        <button className="relative flex flex-col justify-center items-center p-2 text-gray-200 hover:bg-blue-700 rounded-lg transition-all duration-200">

                            <span className="mt-2 text-4xl hidden lg:block">Logo</span>
                            <button
                                onClick={toggleSidebar}
                                className="absolute z-50 top-0 -right-10 h-32 w-7 transform  bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow-lg transition-transform duration-300"
                            // Adjust margin based on sidebar state
                            >
                                {isSidebarOpen ? 'Close' : 'Open'}
                            </button>
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex-1">
                        <ul className="space-y-6">
                            {navMenu.map((item, index) => (
                                <li key={index} className="flex justify-center">
                                    {item.disable ? (
                                        <button
                                            disabled
                                            className="flex flex-col justify-center items-center p-2 w-full  text-gray-100 bg-gray-100/50 cursor-not-allowed rounded-lg"
                                        >
                                            {item.icon}
                                            <span className="text-sm mt-2">{item.name}</span>
                                        </button>
                                    ) : (
                                        <NavLink
                                            to={item.href}
                                            className={({ isActive }) =>
                                                [
                                                    isActive ? " text-white bg-gray-100/50 " : "hover:bg-gray-50/40 text-gray-200 scale-95",
                                                    "flex flex-col justify-center items-center p-3 w-full rounded-lg transition-all duration-200 scale-95"
                                                ].join(" ")
                                            }
                                        >
                                            {item.icon}
                                            <span className="text-sm mt-2">{item.name}</span>
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Bottom Action Buttons */}
                    <div>
                        <button
                            onClick={handleScreen}
                            className="flex flex-col justify-center items-center p-2 mb-3 w-full bg-blue-700 hover:bg-blue-600 rounded-lg transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d={fullScreen ? "M3 3h8v2H5v6H3V3Zm10 18v-2h6v-6h2v8h-8Zm-8 0v-8h2v6h6v2H5ZM21 3v8h-2V5h-6V3h8Z" : "M7 7H5v2H3V5h4v2Zm10 10h2v-2h2v4h-4v-2ZM7 17v2H3v-4h2v2h2Zm14-8V5h-4v2h2v2h2Z"} />
                            </svg>
                            <span className="mt-2 text-sm hidden lg:block">{fullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}</span>
                        </button>
                        <button
                            onClick={handleSignout}
                            className="flex flex-col justify-center items-center p-2 w-full bg-red-600 hover:bg-red-500 rounded-lg transition-all duration-200"
                        >
                            <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                />
                            </svg>
                            <span className="mt-2 text-sm hidden lg:block">Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideNav;
