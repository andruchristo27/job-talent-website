import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar1 from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function PengaturanPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex w-full items-start justify-center bg-white-A700">
                <Sidebar1 />
                <div className="flex-1">
                    <Navbar />
                    <div className="flex flex-row gap-8 mt-7 ml-5">
                        <button className="font-sans font-semibold text-black underline " onClick={() => navigate('/pengaturan')}>Profil Saya</button>
                        <button className="font-sans font-semibold text-slate-400 hover:text-black" onClick={() => navigate('/detail')}>Detail Login</button>
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
                            <h3 className="font-semibold text-lg">Foto Profil</h3>
                            <p className="text-slate-600">Gambar ini akan ditampilkan secara publik sebagai foto profil Anda, ini akan membantu perekrut mengenali Anda!</p>

                        </div>
                        <div className="flex flex-row ml-24 gap-12">
                            <img src="src/assets/Ellipse 14.svg" alt="" />
                            <div className="w-96 h-44 border-2 border-sky-700 rounded-lg border-dashed flex-col justify-start gap-6 inline-flex items-center text-center p-5">
                                <input type="image" src="src/assets/galery.svg" alt="" />
                                <h4 className="text-slate-600"><span className="text-blue-800 font-bold">Klik Untuk mengganti</span> atau seret dan lepas <br />SVG, PNG, JPG atau GIF (maks. 400 x 400px)</h4>
                            </div>
                        </div>
                        
                    </div>
                    <hr className="border-t-2" />
                    <div className="flex flex-row my-5 ml-5">
                        <h3 className="font-semibold text-lg">Detail Diri Anda</h3>
                        <form className="ml-72 w-max" action="">
                            <span className="block font-medium text-lg text-slate-700">Nama Lengkap*</span>
                            <input type="text" className=" border-2 rounded-md w-96 h-11"placeholder="Anto Ramadhan" id="" />
                            <div className=" flex flex-row gap-8 my-6">
                               <form action="">
                               <span className="block font-medium text-lg text-slate-700">Nomor Telepon</span>
                                <input type="text" className=" border-2 rounded-md w-44 h-11" placeholder="087976544567" name="" id="" />
                               </form>
                               <form action="">
                               <span className="block font-medium text-lg text-slate-700">Email</span>
                                <input type="email" className=" border-2 rounded-md w-44 h-11" placeholder="anto89@gmail.com" name="" id="" />
                               </form>
                            </div>
                            <div className=" flex flex-row gap-8 my-6">
                               <form action="">
                               <span className="block font-medium text-lg text-slate-700">Tanggal Lahir</span>
                                <input type="date" className=" border-2 rounded-md w-44 h-11" name="" id="" />
                               </form>
                               <form action="">
                               <span className="block font-medium text-lg text-slate-700">Jenis Kelamin</span>
                                <input type="text" className=" border-2 rounded-md w-44 h-11" placeholder="Laki-laki" name="" id="" />
                               </form>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}