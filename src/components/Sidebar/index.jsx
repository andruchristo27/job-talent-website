import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded);
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded');
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col  absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#F8F8F8] p-4 transition-all duration-200 ease-in-out 
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
            >
                {/* Sidebar header */}
                <div className="flex justify-between mb-3 mt-1 pr-3 sm:px-1">
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}
                    <NavLink end to="/" className="block flex items-center justify-center h-full">
                        <img width="50" height="50" src="logo.svg" alt="Home logo" />
                        {sidebarExpanded && (
                            <span className="ml-4 text-xl font-bold">JobTalent</span>
                        )}
                    </NavLink>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>
                        {/* <h3 className="text-xs uppercase text-gray-400 font-semibold pl-3">
                            <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                                •••
                            </span>
                            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
                        </h3> */}
                        <ul className="mt-3">
                            {/* Messages */}
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('dashboard') && 'bg-[#E9EBFD]'}`}>
                                <NavLink
                                    end
                                    to="/dashboard"
                                    className={`block text-gray-400 hover:text-[#0060A5] truncate transition duration-150 ${pathname.includes('dashboard') ? 'text-[#0060A5]' : 'hover:text-[#0060A5]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grow flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>
                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Dashboard
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('pesan') && 'bg-[#E9EBFD]'}`}>
                                <NavLink
                                    end
                                    to="/pesan"
                                    className={`block text-gray-400 hover:text-[#0060A5] truncate transition duration-150 ${pathname.includes('pesan') ? 'text-[#0060A5]' : 'hover:text-[#0060A5]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grow flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                            </svg>

                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Pesan
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('lamaran') && 'bg-[#E9EBFD]'}`}>
                                <NavLink
                                    end
                                    to="/lamaran"
                                    className={`block text-gray-400 hover:text-[#0060A5] truncate transition duration-150 ${pathname.includes('lamaran') ? 'text-[#0060A5]' : 'hover:text-[#0060A5]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grow flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                            </svg>

                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Lamaran
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('cariKerja') && 'bg-[#E9EBFD]'}`}>
                                <NavLink
                                    end
                                    to="/cariKerja"
                                    className={`block text-gray-400 hover:text-[#0060A5] truncate transition duration-150 ${pathname.includes('cariKerja') ? 'text-[#0060A5]' : 'hover:text-[#0060A5]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grow flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                            </svg>

                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Cari Pekerjaan
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('cariPerusahaan') && 'bg-[#E9EBFD]'}`}>
                                <NavLink
                                    end
                                    to="/cariPerusahaan"
                                    className={`block text-gray-400 hover:text-[#0060A5] truncate transition duration-150 ${pathname.includes('cariPerusahaan') ? 'text-[#0060A5]' : 'hover:text-[#0060A5]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grow flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                            </svg>

                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Cari Perusahaan
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('profil') && 'bg-[#E9EBFD]'}`}>
                                <NavLink
                                    end
                                    to="/profil"
                                    className={`block text-gray-400 hover:text-[#0060A5] truncate transition duration-150 ${pathname.includes('profil') ? 'text-[#0060A5]' : 'hover:text-[#0060A5]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grow flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>

                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Profil Publik
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* More group */}
                    <div>
                        <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                            <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                                •••
                            </span>
                            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pengaturan</span>
                        </h3>
                        <ul className="mt-3">
                            {/* Authentication */}
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('pengaturan') && 'bg-[#E9EBFD]'}`}>
                                <NavLink
                                    end
                                    to="/pengaturan"
                                    className={`block text-gray-400 hover:text-[#0060A5] truncate transition duration-150 ${pathname.includes('pengaturan') ? 'text-[#0060A5]' : 'hover:text-[#0060A5]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grow flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Pengaturan
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('bantuan') && 'bg-[#E9EBFD]'}`}>
                                <NavLink
                                    end
                                    to="/pusatbantuan"
                                    className={`block text-gray-400 hover:text-[#0060A5] truncate transition duration-150 ${pathname.includes('bantuan') ? 'text-[#0060A5]' : 'hover:text-[#0060A5]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grow flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                            </svg>
                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Pusat Bantuan
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Expand / collapse button */}
                <div className="pt-3 item-center mt-auto ">
                    <div className="inline-flex justify-center items-center group">
                        <img className="w-10 h-10 rounded-full" src="profile.svg" width="32" height="32" alt="User" />
                        <div className="flex flex-col truncate">
                            <span className="truncate ml-2 text-md font-bold">Anto Ramadhan</span>
                            <span className="truncate ml-2 text-sm font-normal">anto@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
