import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, SidebarContext, sidebarClasses } from 'react-pro-sidebar';
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import Navbar from "../Navbar";

export default function Sidebar1({ ...props }) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prevCollapsed => !prevCollapsed);
    };

    return (
        <>
            {/* <Navbar toggleCollapsed={toggleCollapsed} /> */}
            <Sidebar
                {...props}
                width="200px !important"
                collapsedWidth="80px !important"
                collapsed={collapsed}
                className={`${props.className} flex flex-col h-screen pt-[34px] top-0 md:p-5 sm:pt-5 bg-gray-50 shadow-xs Isticky overflow-auto`}
            >
                <div className="flex items-center justify-center mb-6 px-4">
                    <img src="logo.svg" alt="Logo" className="w-12 h-12" /> {/* Ganti 'logo.png' dengan path logo Anda */}
                    {!collapsed && (
                        <span className="ml-4 text-xl">JobTalent</span>
                    )}
                </div>
                <Menu menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}>
                    <MenuItem component={<NavLink to="/dashboard" className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(" ")} end />}> Dashboard </MenuItem>
                    <MenuItem component={<NavLink to="/pesan" className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(" ")} end />}> Pesan </MenuItem>
                    <MenuItem component={<NavLink to="/lamaran" className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(" ")} end />}> Lamaran </MenuItem>
                    <MenuItem component={<NavLink to="/carikerja" className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(" ")} end />}> Cari Pekerjaan </MenuItem>
                    <MenuItem component={<NavLink to="/cariperusahaan" className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(" ")} end />}> Cari Perusanaan </MenuItem>
                    <MenuItem component={<NavLink to="/profil" className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(" ")} end />}> Profil Publik </MenuItem>
                    <MenuItem component={<NavLink to="/pengaturan" className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(" ")} end />}> Pengaturan </MenuItem>
                    <MenuItem component={<NavLink to="/pusatbantuan" className={({ isActive, isPending, isTransitioning }) => [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(" ")} end />}> Pusat Bantuan </MenuItem>
                </Menu>
                <button onClick={toggleCollapsed}>{collapsed ? 'Expand' : 'Collapse'}</button>
            </Sidebar>
        </>
    );
}