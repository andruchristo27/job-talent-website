import React from "react";
import Sidebar1 from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function DashboardClientPage() {
    return (
        <>
            <div className="flex w-full items-start justify-center bg-white-A700">
                <Sidebar1 />
                <div className="flex-1">
                    <Navbar />
                    <div className="flex flex-col gap-[22px] p-8 md:flex-col sm:p-5">
                        main konten dashboard
                        <div className="flex flex-1 flex-col gap-6 md:self-stretch"></div>
                    </div>
                </div>
            </div>
        </>
    );
}