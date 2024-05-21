import React, { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Datepicker from "../../components/Datepicker";

export default function LamaranPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const products = [
        { id: 1, company: 'Toko Ci Leni', position: 'Penjahit Pakaian Kekinian', date: '24 Juli 2021', status: 'Diterima' },
        { id: 2, company: 'PT Bakti Mandiri', position: 'Jahit', date: '20 Juli 2021', status: 'Menunggu' },
        { id: 3, company: 'PT DEF', position: 'Penjahit Pakaian', date: '2024-05-03', status: 'Ditolak' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        { id: 4, company: 'PT GHI', position: 'Penjahit Pakaian', date: '2024-05-04', status: 'Menunggu' },
        // Tambahkan lebih banyak data sesuai kebutuhan
    ];

    const [productList] = useState(products);
    const [rowsLimit] = useState(5);
    const [rowsToShow, setRowsToShow] = useState(productList.slice(0, rowsLimit));
    const [customPagination, setCustomPagination] = useState([]);
    const [totalPage] = useState(Math.ceil(productList?.length / rowsLimit));
    const [currentPage, setCurrentPage] = useState(0);
    const nextPage = () => {
        const startIndex = rowsLimit * (currentPage + 1);
        const endIndex = startIndex + rowsLimit;
        const newArray = products.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        setCurrentPage(currentPage + 1);
    };
    const changePage = (value) => {
        const startIndex = value * rowsLimit;
        const endIndex = startIndex + rowsLimit;
        const newArray = products.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        setCurrentPage(value);
    };
    const previousPage = () => {
        const startIndex = (currentPage - 1) * rowsLimit;
        const endIndex = startIndex + rowsLimit;
        const newArray = products.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(0);
        }
    };
    useMemo(() => {
        setCustomPagination(
            Array(Math.ceil(productList?.length / rowsLimit)).fill(null)
        );
    }, []);
    const getStatusColor = (status) => {
        switch (status) {
            case 'Menunggu':
                return 'border-yellow-500 text-yellow-500';
            case 'Diterima':
                return 'border-green-500 text-green-500';
            case 'Ditolak':
                return 'border-red-500 text-red-500';
            default:
                return 'border-gray-500 text-gray-500';
        }
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
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-xl text-[#25324B] font-bold">Riwayat Lamaran</h1>
                                <input
                                    type="text"
                                    placeholder="Cari..."
                                    className="border border-gray-300 rounded-lg py-2 px-4"
                                />
                            </div>
                            <table className="min-w-full bg-white border-b"   >
                                <thead>
                                    <tr className="text-left">
                                        <th className="py-2 px-4 border-b font-semibold text-md text-gray-500">
                                            #
                                        </th>
                                        <th className="py-2 px-4 border-b font-semibold text-md text-gray-500">
                                            Company
                                        </th>
                                        <th className="py-2 px-4 border-b font-semibold text-md text-gray-500">
                                            Position
                                        </th>
                                        <th className="py-2 px-4 border-b font-semibold text-md text-gray-500">
                                            Tanggal
                                        </th>
                                        <th className="py-2 px-4 border-b font-semibold text-md text-gray-500 text-center">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowsToShow?.map((data, index) => (
                                        <tr key={index}>
                                            <td className="py-2 px-4 border-b">
                                                {index + 1}
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <div className="inline-flex items-center">
                                                    <img className="w-7 h-7 rounded-full mr-3" src="logo.svg" width="32" height="32" alt="User" />
                                                    {data?.company}
                                                </div>
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                {data?.position}
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                {data?.date}
                                            </td>
                                            <td className="py-2 px-4 border-b text-center">
                                                <span className={`inline-block px-3 py-1 border rounded-full ${getStatusColor(data.status)}`}>
                                                    {data.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
                            <div className="text-lg">
                                Showing {currentPage == 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
                                {currentPage == totalPage - 1
                                    ? productList?.length
                                    : (currentPage + 1) * rowsLimit}{" "}
                                of {productList?.length} entries
                            </div>
                            <div className="flex">
                                <ul
                                    className="flex justify-center items-center gap-x-[10px] z-30"
                                    role="navigation"
                                    aria-label="Pagination"
                                >
                                    <li
                                        className={` prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled] ${currentPage == 0
                                            ? "bg-[#cccccc] pointer-events-none"
                                            : " cursor-pointer"
                                            }
  `}
                                        onClick={previousPage}
                                    >
                                        <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" />
                                    </li>
                                    {customPagination?.map((data, index) => (
                                        <li
                                            className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${currentPage == index
                                                ? "text-blue-600  border-sky-500"
                                                : "border-[#E4E4EB] "
                                                }`}
                                            onClick={() => changePage(index)}
                                            key={index}
                                        >
                                            {index + 1}
                                        </li>
                                    ))}
                                    <li
                                        className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${currentPage == totalPage - 1
                                            ? "bg-[#cccccc] pointer-events-none"
                                            : " cursor-pointer"
                                            }`}
                                        onClick={nextPage}
                                    >
                                        <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}