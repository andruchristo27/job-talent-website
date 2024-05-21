import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar1 from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function notif() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex w-full items-start justify-center bg-white-A700">
                <Sidebar1 />
                <div className="flex-1">
                    <Navbar />
                    <div className="flex flex-row gap-8 mt-7 ml-5">
                        <button className="font-sans font-semibold text-slate-400 hover:text-black " onClick={() => navigate('/pengaturan')}>Profil Saya</button>
                        <button className="font-sans font-semibold text-slate-400 hover:text-black" onClick={() => navigate('/detail')}>Detail Login</button>
                        <button className="font-sans font-semibold text-black underline " onClick={() => navigate('/notif')}>Notifikasi</button>
                    </div>
                    <hr className="border-t-2 mt-4" />
                    <div className=" my-6 ml-5">
                        <h3 className="text-lg font-semibold">Informasi Dasar</h3>
                        <p className="text-slate-600">ini adalah Informasi Pribadi Anda yang dapat anda Perbarui kapan Saja</p>
                    </div>
                    <hr className="bprder-t-2" />
                    <div className="flex flex-row my-6">
                        <div className="w-64 my-3 ml-5">
                            <h3 className="font-semibold text-lg">Notifikasi</h3>
                            <p className="text-slate-600">Menyesuaikan Pengaturan notifikasi pilihan anda</p>

                        </div>
                        <div className="flex ml-24 flex-col  ">
                        <form className="my-2" action="">
                            <input className="w-5 h-5" type="checkbox" name="" />
                           <label className="ml-3 text-lg font-semibold" >Lamaran</label>
                           <p className="ml-8 text-slate-600">ini adalah notifikasi untuk pekerjaan yang <br />anda lamar</p>
                        </form>
                        <form className="my-2" action="">
                            <input className="w-5 h-5" type="checkbox" name=""  />
                           <label className="ml-3 text-lg font-semibold" >Pekerjaan</label>
                           <p className="ml-8 text-slate-600">ini adalah notifikasi untuk lowongan pekerjaan <br />yang sesuai dengan profil anda</p>
                        </form>
                        <form className="my-2" action="">
                            <input className="w-5 h-5" type="checkbox" name=""  />
                           <label className="ml-3 text-lg font-semibold" >Rekomendasi</label>
                           <p className="ml-8 text-slate-600">ini adalah notifikasi untuk rekomendasi yang <br />dipersonalisasi dari perekrut kami</p>
                        </form>
                        <button className="border-2 rounded-2xl w-40 h-12 bg-blue-800 text-white font-semibold mt-4">Simpan Perubahan</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}