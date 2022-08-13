import "./App.css";
import MainColorSwitcher from "./components/main-color-switcher/Main";

// Maps : pilih salah satu
import ReportMap from "./components/maps/leaflet" //leaflet single map
// import ReportMap from "./components/maps/google" //google map single map
// import ReportMap from "./components/maps/leaflet-with-google-layer" //leaflet multi maps inprogress

import logoUrl from "./assets/images/logo.svg"
import DropdownAccount from "./components/dropdown/dropdownaccount"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboards from './components/admin-dashboards';
import Settings from './components/settings';
import Faqs from './components/faqs';

function App() {
  return (
    <div className="App">
      {/* <MainColorSwitcher /> */}
      {/* create fulllscreen only app and create 3 column (shy greed shy) */}
      <div className="min-h-full w-full grid" style={{gridTemplateRows: "auto 1fr auto"}}>
        
        {/* 1 */}
        <div>
          <div className="border-b border-slate-700 flex w-full text-slate-500 p-0 h-14 items-center px-1.5 bg-slate-800">
            <div className="ml-2"></div>
            <div className="logoapp flex m-auto items-center">
              <a href="/">
                <img
                  alt="Logo Bendungan"
                  className="w-8"
                  src={logoUrl}
                />
              </a>
              <h1 className="ml-3 mb-1 text-white">DREAMS {"("}DAM RE-EVALUATION AND MONITORING SYSTEM{")"}</h1>
            </div>
            <div className="md:hidden flex m-auto items-center">
              <a href="/">
                <img
                  alt="Logo Bendungan"
                  className="w-8"
                  src={logoUrl}
                />
              </a>
              <h1 className="ml-3 mb-1 text-white">DREAMS</h1>
            </div>
            <DropdownAccount />
          </div>
        </div>
        
        {/* 2 */}
        <div className="bg-slate-900">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ReportMap />} />
              <Route path='/admin-dashboards' element={<AdminDashboards />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/faqs' element={<Faqs />} />
            </Routes>
          </BrowserRouter>
        </div>
        
        {/* 3 */}
        <div className="border-t border-slate-700 bg-slate-800 text-slate-500 h-7 text-center items-center">
          <p>copyright @theonlyumarsaid 2022</p>
        </div>

      </div>
    </div>
  );
}
export default App