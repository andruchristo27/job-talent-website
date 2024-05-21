import React from "react";
import Sidebar1 from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GrDislike, GrLike } from "react-icons/gr";
export default function PusatBantuanPage() {
    return (
        <>
            <div className="flex w-full items-start justify-center bg-white-A700">
                <Sidebar1 />
                <div className="flex-1">
                    <Navbar />
                    <div className="flex flex-col gap-[22px] p-8 md:flex-col sm:p-5">
                     <div className="flex flex-col-2 gap-10">
                        <hr className="border-t-2" />
                        <div className="flex flex-col">
                            <p className="text-slate-300">Ketik Pertanyaan atau Kata kunci Pertanyaan</p>
                            <form action="">
                                
                                <CiSearch className="h-5 w-10 relative top-6 left-2"></CiSearch>
                                <input className="pr-3 pl-10 border-2 rounded-2xl h-8 w-80" type="search" placeholder="Cari"/>
                            </form>
                            <div className="mt-10">
                                <h5 className="text-blue-600 font-semibold ">Cara Kerja </h5>
                                <hr className="my-2 border-t-2" />
                                <h5 className="font-semibold">My Profile </h5>
                                <hr className="my-2 border-t-2" />
                                <h5 className="font-semibold">Melamar Pekerjaan </h5>
                                <hr className="my-2 border-t-2" />
                                <h5 className="font-semibold"> Tips Mencari Pekerjaan </h5>
                                <hr className="my-2 border-t-2" />
                                <h5 className="font-semibold">Pemberitahuan Pekerjaan </h5>

                                <div className=" w-56 h-32 bg-blue-600 rounded-md relative mt-52" >
                                    <h5 className="text-white text-left text-lg font-semibold ">tidak menemukan yang anda cari</h5>
                                    <p className="text-white">Hubungi Customer Service Kami</p>
                                </div>

                            </div>
                           
                        </div>
                        <div className="flex-row"> 
                            <p className="text-slate-300"> Urutkan: <span className="text-black font-semibold">Paling relevan </span> 
                        <IoIosArrowDown className="relative left-44 bottom-4 text-black"></IoIosArrowDown> </p> 
                        <div className="border-2 rounded-md flex-col mb-5">
                            <h4 className="text-lg font-semibold my-2" >Apa yang dimaksud Dengan Lamaran Saya?</h4>
                            <p>Lamaran saya adalah cara bagi anda untuk melacak pekerjaan saat anda menjalani proses
                                lamaran. Tergantung pada pekerjaan yang anda lamar, anda juga dapat menerima notifikasi 
                                yang menunjukan bahwa lamaran anda telah ditindaklanjuti oleh pemberi kerja.
                            </p>
                            <hr className="border-t-2 my-2" />
                            <div className="flex flex-row gap-3 my-6"> 
                                <p>Apakah artikel ini bermanfaat ?</p>
                                <button className="bg-white h-9 w-20 text-blue-800 border-2 rounded-lg "><GrLike className="relative top-2 left-4"></GrLike><p className="relative left-2 bottom-3" >Ya</p></button>
                                <button className="bg-white h-9 w-20 text-blue-800 border-2 rounded-lg font-semibold "><GrDislike className="relative top-2 left-2"></GrDislike> <p className="relative left-2 bottom-3">Tidak</p></button>
                            </div>
                        </div>
                        <div className="border-2 rounded-md flex-col mb-5">
                            <h4 className="text-lg font-semibold my-2" >Cara menggunakan Website dan Aplikasi JobTalent1</h4>
                            <p>Kami memberikan tutoriak cara menggunakan Website Jobtalent1 pada laman Youtube kami, silahkan
                                akses youtube.com/JobTalent1 untuk informasi lebih lanjut.
                            </p>
                            <hr className="border-t-2 my-2" />
                            <div className="flex flex-row gap-3 my-6"> 
                                <p>Apakah artikel ini bermanfaat ?</p>
                                <button className="bg-white  h-9 w-20 text-blue-800 border-2 rounded-lg "><GrLike className="relative top-2 left-4"></GrLike><p className="relative left-2 bottom-3" >Ya</p></button>
                                <button className="bg-white  h-9 w-20 text-blue-800 border-2 rounded-lg font-semibold "><GrDislike className="relative top-2 left-2"></GrDislike> <p className="relative left-2 bottom-3">Tidak</p></button>
                            </div>
                        </div>
                        <div className="border-2 rounded-md flex-col mb-5">
                            <h4 className="text-lg font-semibold my-2" >Cara Mengakses riwayat Lamaran Saya?</h4>
                            <p>Untuk mengakses riwayat lamaran, buka halaman Lamaran Saya di profil dasbor Anda. Anda harus masuk ke akun JobHuntly untuk melihat halaman ini.
                            </p>
                            <hr className="border-t-2 my-2" />
                            <div className="flex flex-row gap-3 my-6"> 
                                <p>Apakah artikel ini bermanfaat ?</p>
                                <button className="bg-white h-9 w-20 text-blue-800 border-2 rounded-lg "><GrLike className="relative top-2 left-4"></GrLike><p className="relative left-2 bottom-3" >Ya</p></button>
                                <button className="bg-white h-9 w-20 text-blue-800 border-2 rounded-lg font-semibold "><GrDislike className="relative top-2 left-2"></GrDislike> <p className="relative left-2 bottom-3">Tidak</p></button>
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