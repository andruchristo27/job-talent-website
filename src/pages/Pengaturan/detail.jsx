import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar1 from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function detail() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex w-full items-start justify-center bg-white-A700">
                <Sidebar1 />
                <div className="flex-1">
                    <Navbar />
                    <div className="flex flex-row gap-8 mt-7 ml-5">
                        <button className="font-sans font-semibold text-slate-400 hover:text-black " onClick={() => navigate('/pengaturan')}>Profil Saya</button>
                        <button className="font-sans font-semibold text-black underline" onClick={() => navigate('/detail')}>Detail Login</button>
                        <button className="font-sans font-semibold text-slate-400 hover:text-black" onClick={() => navigate('/notif')}>Notifikasi</button>
                    </div>
                    <hr className="border-t-2 mt-4" />
                    <div className=" my-6 ml-5">
                        <h3 className="text-lg font-semibold">Informasi Dasar</h3>
                        <p className="text-slate-600">ini adalah Informasi Pribadi Anda yang dapat anda Perbarui kapan Saja</p>
                    </div>
                    <hr className="border-t-2" />
                    <div className="flex flex-row my-6">
                        <div className="w-64 my-3 ml-5">
                            <h3 className="font-semibold text-lg">Perbarui Email</h3>
                            <p className="text-slate-600">Perbarui alamat email adna untuk memastikannya aman</p>

                        </div>
                        <div className="flex ml-24 flex-col  ">
                        <h3 className="font-semibold text-lg">anto89@gmail.com  <img className="relative left-40 bottom-6 " src="src/assets/Icon.svg" alt="" /></h3>
                        <p className="text-slate-600 relative bottom-6">Alamat email anda telah diverifikasi</p>
                        <form className="" action="">
                        <h3 className="font-semibold text-lg">Perbarui Email</h3>
                        <input className="border-2 rounded-md w-96 h-11 block" type="email" placeholder= "     Masukkan Email Baru Anda" name="" id="" />
                        <button className="border-2 rounded-2xl w-36 h-12 bg-blue-800 text-white font-semibold mt-4">Perbarui Email</button>
                        </form>
                        </div>
                        
                    </div>
                    <hr className="border-t-2" />
                    <div className="flex flex-row my-6">
                        <div className="w-64 my-3 ml-5">
                            <h3 className="font-semibold text-lg">Kata Sandi Baru</h3>
                            <p className="text-slate-600">Kelola Kata sandi anda untuk memastikannya aman</p>

                        </div>
                        <div className="flex ml-24 flex-col  ">
                         <form className="" action="">
                        <h3 className="font-semibold text-lg">Kata Sandi Lama</h3>
                        <input className="border-2 rounded-md w-96 h-11 block" type="password" placeholder= "     Masukkan Kata Sandi Lama Anda" name="" id="" />
                        <p className="text-slate-600">Minimal 8 karakter</p>
                        </form>
                        <form className="mt-4" action="">
                        <h3 className="font-semibold text-lg">Kata Sandi baru</h3>
                        <input className="border-2 rounded-md w-96 h-11 block" type="password" placeholder= "     Masukkan Kata Sandi Baru Anda" name="" id="" />
                        <p className="text-slate-600">Minimal 8 karakter</p>
                        </form>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
    );
}