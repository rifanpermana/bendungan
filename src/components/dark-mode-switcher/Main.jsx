import '../../assets/css/dark-mode-switcher.css';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeValue, darkMode as darkModeStore } from "../../stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";
import classnames from "classnames";

function Main(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const setDarkModeValue = useSetRecoilState(darkModeValue);

  const setDarkModeClass = () => {
    darkMode ? dom("html").addClass("dark") : dom("html").removeClass("dark");
  };

  const switchMode = () => {
    setDarkModeValue(() => !darkMode);
    localStorage.setItem("darkMode", !darkMode);
    setDarkModeClass();
  };

  setDarkModeClass();

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div
        className="dark-mode-switcher cursor-pointer flex items-center mt-1"
        onClick={switchMode}
      >
        <div className="mr-1 dark:text-slate-200 text-sm">Dark:</div>
        <div
          className={classnames({
            "dark-mode-switcher__toggle": true,
            "dark-mode-switcher__toggle--active": darkMode,
          })}
        ></div>
      </div>
      {/* END: Dark Mode Switcher */}
    </>
  );
}

export default Main;
