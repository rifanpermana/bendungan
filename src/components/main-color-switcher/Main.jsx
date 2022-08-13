import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  colorSchemeValue,
  colorScheme as colorSchemeStore,
} from "../../stores/color-scheme";
import { darkMode as darkModeStore } from "../../stores/dark-mode";
import dom from '@left4code/tw-starter/dist/js/dom';
import classnames from "classnames";

function Main() {
  const darkMode = useRecoilValue(darkModeStore);
  const colorScheme = useRecoilValue(colorSchemeStore);
  const setColorSchemeValue = useSetRecoilState(colorSchemeValue);

  const setColorSchemeClass = () => {
    dom("html")
      .attr("class", colorScheme)
      .addClass(darkMode ? "dark" : "");
  };

  const switchColorScheme = (colorScheme) => {
    setColorSchemeValue(() => colorScheme);
    localStorage.setItem("colorScheme", colorScheme);
    setColorSchemeClass();
  };

  setColorSchemeClass();

  return (
    <>
      {/* BEGIN: Main Color Switcher */}
      <div className="flex items-center justify-center pt-2">
        <a
          onClick={() => {
            switchColorScheme("default");
          }}
          className={classnames({
            "block w-3 h-3 cursor-pointer bg-theme0 rounded-full border mr-1   hover:border-slate-200": true,
            "border-slate-700 dark:border-darkmode-800/80":
              colorScheme == "default",
            "border-primary dark:border-darkmode-600": colorScheme != "default",
          })}
        ></a>
        <a
          onClick={() => {
            switchColorScheme("theme-1");
          }}
          className={classnames({
            "block w-3 h-3 cursor-pointer bg-theme1 rounded-full border mr-1 hover:border-slate-200": true,
            "border-slate-700 dark:border-darkmode-800/80":
              colorScheme == "theme-1",
            "border-primary dark:border-darkmode-600": colorScheme != "theme-1",
          })}
        ></a>
        <a
          onClick={() => {
            switchColorScheme("theme-2");
          }}
          className={classnames({
            "block w-3 h-3 cursor-pointer bg-theme2 rounded-full border mr-1 hover:border-slate-200": true,
            "border-slate-700 dark:border-darkmode-800/80":
              colorScheme == "theme-2",
            "border-primary dark:border-darkmode-600": colorScheme != "theme-2",
          })}
        ></a>
        <a
          onClick={() => {
            switchColorScheme("theme-3");
          }}
          className={classnames({
            "block w-3 h-3 cursor-pointer bg-theme3 rounded-full border mr-1 hover:border-slate-200": true,
            "border-slate-700 dark:border-darkmode-800/80":
              colorScheme == "theme-3",
            "border-primary dark:border-darkmode-600": colorScheme != "theme-3",
          })}
        ></a>
        <a
          onClick={() => {
            switchColorScheme("theme-4");
          }}
          className={classnames({
            "block w-3 h-3 cursor-pointer bg-theme4 rounded-full border hover:border-slate-200": true,
            "border-slate-700 dark:border-darkmode-800/80":
              colorScheme == "theme-4",
            "border-primary dark:border-darkmode-600": colorScheme != "theme-4",
          })}
        ></a>
      </div>
      {/* END: Main Color Switcher */}
    </>
  );
}

export default Main;
