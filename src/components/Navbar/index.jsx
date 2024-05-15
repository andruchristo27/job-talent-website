import React from 'react';
import { useState } from 'react';

export default function Navbar({ toggleCollapsed }) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="flex items-center justify-between p-4 text-black border-b border-gray-300">
            <p className="text-xl font-bold">Navbar</p>
            <div className="flex gap-4">
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md border-2 border-gray-300">Kembali ke Halaman Utama</button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-full border-2 border-gray-300" onClick={toggleCollapsed}>2</button>
            </div>
        </div>
    );
}
