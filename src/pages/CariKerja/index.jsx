import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function CariKerjaPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm, 'in', selectedCity);
        // Tambahkan logika pencarian di sini
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className="border-b border-b-gray-300 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-1">
                        <div className="relative border border-gray-300 p-4 sm:p-3 rounded-xl overflow-hidden mb-3">
                            <div className="flex items-center justify-center w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                                <input
                                    type="text"
                                    className="flex-grow px-2 py-2 border-0 border-b border-b-gray-300 rounded-md focus:outline-none  mr-3 ml-0"
                                    placeholder="Judul atau kata kunci pekerjaan"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                                <select
                                    className="px-1 py-2 border-0 border-b border-b-gray-300 rounded-md focus:outline-none  mr-3 ml-0"
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                >
                                    <option value="" disabled>Pilih Kota</option>
                                    <option value="Jakarta">Jakarta</option>
                                    <option value="Bandung">Bandung</option>
                                    <option value="Surabaya">Surabaya</option>
                                    <option value="Yogyakarta">Yogyakarta</option>
                                    <option value="Bali">Bali</option>
                                    {/* Tambahkan opsi kota lainnya di sini */}
                                </select>
                                <button
                                    onClick={handleSearch}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 m-3"
                                >
                                    Cari
                                </button>
                            </div>
                        </div>
                        <div className="text-gray-400 font-normal text-sm">
                            <span>Populer : Penjahit, Tukang, Musisi, Event</span>
                        </div>
                    </div>
                    <div className="flex h-screen">
                        <div className="w-2/10 ">
                            <div className="p-4">
                                <div className="text-md font-semibold pt-1.5 pb-2 px-3">Jenis Pekerjaan</div>
                                <ul className="mb-4">
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Full-time</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Part-time</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Proyek</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Magang</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Kontrak</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4">
                                <div className="text-md font-semibold pt-1.5 pb-2 px-3">Kategori</div>
                                <ul className="mb-4">
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Full-time</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Part-time</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Proyek</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Magang</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Kontrak</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4">
                                <div className="text-md font-semibold pt-1.5 pb-2 px-3">Rentan Harga</div>
                                <ul className="mb-4">
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Full-time</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Part-time</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Proyek</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Magang</span>
                                        </label>
                                    </li>
                                    <li className="py-1 px-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-sm font-medium ml-2">Kontrak</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-8/10">
                            <div className="p-5">
                                <div className="text-lg font-bold mb-0">Semua Pekerjaan</div>
                                <div className="text-sm mt-0 mb-4">Menampilkan 9 hasil</div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* disini bos */}
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg">
                                        <div className="p-4">
                                            <div className="flex w-full">
                                                <div className="inline-flex items-center">
                                                    <img className="w-10 h-10 rounded-full" src="logo.svg" width="32" height="32" alt="User" />
                                                </div>
                                                <div className="bg-green-100 flex items-center justify-center rounded-full truncate ml-auto px-4">
                                                    <span className="truncate text-md text-green-500">Full-time</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="flex w-full mt-2">
                                                <span className="font-bold text-md">Penjahit Pakaian Kekinian</span>
                                            </div>
                                            <div className="flex w-full mb-5">
                                                <span className="font-normal text-sm">Toko Ci Leni. Medan</span>
                                            </div>
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center outline outline-1 outline-yellow-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-yellow-500">Industri</span>
                                                </div>
                                                <div className="flex items-center justify-center outline outline-1 outline-blue-500 rounded-full px-2 mr-2">
                                                    <span className="truncate text-md text-blue-500">Jasa</span>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-gray-200 overflow-hidden mt-5">
                                                <div
                                                    className="h-full bg-green-400"
                                                    style={{ width: `70%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                <span className="font-bold">5 applied </span>of 10 capacity</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}