import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Datepicker from "../../components/Datepicker";
import DoughnutChart from "../../components/chart/DoughnutChart";

export default function DashboardClientPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const chartData = {
        labels: ['Belum Selesai', 'Sudah Selesai'],
        datasets: [
            {
                data: [
                    10, 30,
                ],

                backgroundColor: ['#ff6384', '#36a2eb'],
                hoverBackgroundColor: ['#ff6384', '#36a2eb'],
                borderWidth: 0,
            },
        ],
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                            <div className="relative">
                                <h2 className="text-xl text-[#25324B] font-bold mb-1">Selamat Pagi Anto</h2>
                                <p className="text-gray-500">Berikut ini adalah apa yang terjadi dengan lamaran pencarian kerja Anda dari tanggal ---.</p>
                            </div>
                            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                                {/* Datepicker built with flatpickr */}
                                <Datepicker />
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
                                <header className="px-5 py-4 border-b border-slate-100">
                                    <h2 className="font-semibold text-slate-800">Status Pekerjaan</h2>
                                </header>
                                {/* Chart built with Chart.js 3 */}
                                {/* Change the height attribute to adjust the chart height */}
                                <DoughnutChart data={chartData} width={200} height={170} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}