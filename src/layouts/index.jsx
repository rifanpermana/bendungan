import "../../src/App.css";
import MainColorSwitcher from "../../src/components/main-color-switcher/Main";
import DarkModeSwitcher from "../../src/components/dark-mode-switcher/Main";
import logoUrl from "../assets/images/logo.svg";
import DropdownAccount from "../../src/components/dropdown/dropdownaccount";
import Menu from "../../src/components/menu/menu"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* create a fulllscreen app and create 3 column (shy greed shy) */}
      <div className="min-h-full w-full grid grid-rows-fv">
        {/* 1: header */}
        {/* top bar */}
        <div className="bg-water-theme border-b border-water-theme w-full grid grid-cols-topbar p-0 h-14 items-center px-3">
          <div>
            <div className="md:hidden flex m-auto items-center">
              <a href="/">
                <img alt="Logo Bendungan" className="w-8" src={logoUrl} />
              </a>
            </div>
            <div className="hidden md:flex m-auto items-center">
              <a href="/">
                <img alt="Logo Bendungan" className="w-8" src={logoUrl} />
              </a>
              <h1 className="ml-3 mb-1 text-water-tittle">DREAMS</h1>
            </div>
          </div>
          {/* menu */}
          <Menu />
          {/* end of menu */}
          <div>
            <DropdownAccount />
          </div>
        </div>
        {/* end of top bar */}

        {/* 2 */}
        {/* make it strict by defining it's height, reduce by topbar h-14 (3.5rem) and footer h-7 (1.75rem)  */}
        {/* it can be set to h-full too */}
        <div className="h-[calc(100vh-5.25rem)] bg-water-base w-full text-white">
          <Outlet />
        </div>

        {/* 3 */}
        <div className="text-water-footer border-t border-water-theme bg-water-footer h-7 grid grid-cols-topbar px-3 text-center items-center justify-center">
          <div className="border-r border-water-theme pr-1 h-full">
            <MainColorSwitcher />
          </div>
          <div>
            <p className="md:hidden text-sm">copyright @DREAMS 2022</p>
            <p className="hidden md:block  text-sm">
              copyright @DREAMS (DAM RE-EVALUATION AND MONITORING SYSTEMS) 2022
            </p>
          </div>
          <div className="border-l border-water-theme pl-1 h-full">
            <DarkModeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
