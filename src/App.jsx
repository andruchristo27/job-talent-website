import { Route, Routes } from "react-router-dom"
import DashboardClientPage from "./pages/DashboardClient"
import PesanPage from "./pages/Pesan"
import LamaranPage from "./pages/Lamaran"
import CariKerjaPage from "./pages/CariKerja"
import CariPerusahaanPage from "./pages/CariPerusahaan"
import ProfilePage from "./pages/Profile"
import PengaturanPage from "./pages/Pengaturan"
import PusatBantuanPage from "./pages/PusatBantuan"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={DashboardClientPage} />
        <Route path="/dashboard" Component={DashboardClientPage} />
        <Route path="/pesan" Component={PesanPage} />
        <Route path="/lamaran" Component={LamaranPage} />
        <Route path="/carikerja" Component={CariKerjaPage} />
        <Route path="/cariperusahaan" Component={CariPerusahaanPage} />
        <Route path="/profil" Component={ProfilePage} />
        <Route path="/pengaturan" Component={PengaturanPage} />
        <Route path="/pusatbantuan" Component={PusatBantuanPage} />
      </Routes>
    </div>
  )
}

export default App
