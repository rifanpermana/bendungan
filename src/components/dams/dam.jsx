import imageURL from "../../assets/images/400X400.png";
import { Thermometer, CloudRainWind, Waves, AlertTriangle, CheckSquare, Eye, Trash2 } from "lucide-react";

// const numbers = [...Array(10).keys()];
const dams = [
  { id: 1, tittle: "Bening", temp: "27", rain: "90" },
  { id: 2, tittle: "Wonorejo", temp: "25", rain: "70" },
  { id: 3, tittle: "Sutami", temp: "35", rain: "50" },
  { id: 4, tittle: "Lahor", temp: "28", rain: "70" },
  { id: 5, tittle: "Wlingi", temp: "39", rain: "60" },
  { id: 6, tittle: "Selorejo", temp: "45", rain: "65" },
  { id: 7, tittle: "Wonogiri", temp: "25", rain: "72" },
];

const damList = dams.map((dam) => (
  <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
    <div className="relative rounded-md bg-light dark:bg-dark">
      <div className="p-3">
        <div className="relative">
          <img
            alt="Midone - HTML Admin Template"
            className="rounded-md h-full w-full object-cover"
            src={imageURL}
          />
          <span className="absolute top-0 bg-pending/80 text-xs m-3 rounded z-10 text-primary">
            Grup: Pengawasan, Jawa Timur, Waspada
          </span>
          <div className="absolute bottom-0 text-water-theme px-3 py-2 w-full z-10 bg-slate-700/70 rounded-md">
            <span className="text-water-theme text-xs">
              Reg. Number : 00{dam.id}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-700 p-3 text-slate-600 dark:text-light text-center font-normal text-xl">{dam.tittle}</div>
      <div className="grid grid-cols-3 border-t border-slate-200 dark:border-slate-700 pl-0 py-3 pr-2 text-slate-600  dark:text-light">
        <div className="flex justify-center items-center">
          <Thermometer className="w-4 h-4" /> {dam.temp}°
        </div>
        <div className="flex justify-center items-center pr-1">
          <CloudRainWind className="w-4 h-4 " /> {dam.rain}mm
        </div>
        <div className="flex justify-center items-center">
          <Waves className="w-4 h-4" /> 120m
        </div>
      </div>
      <div className="grid grid-cols-1 border-t border-slate-200 dark:border-slate-700 p-3 text-black font-semibold bg-danger">
        <div className="flex justify-center items-center text-white">
          <AlertTriangle className="w-4 h-4 ml-1 " /> HIGH RISK
        </div>
      </div>
      <div className="grid grid-cols-2 lg:justify-end items-center p-3 border-t border-slate-200 dark:border-slate-700 ">
        <a className="flex justify-center items-center text-primary ml-3" href="#">
          <Eye className="w-4 h-4 mr-1" /> Preview
        </a>
        <a className="flex justify-center items-center text-secondary mr-3" href="#">
          <CheckSquare className="w-4 h-4 mr-1" /> Edit
        </a>
      </div>
    </div>
  </div>
));

function Dam() {
  return (
    <>
      <div className="bg-water-nav text-water-nav border-b border-water-theme flex w-full  p-0 h-14 items-center px-1.5">
        <div className="mx-2 w-full">Dam</div>
      </div>
      {/* topbar h-14=3.5rem, breadscrumb h-14=3.5rem, footer h-7=1.75rem*/}
      <div
        className={`bg-water-base text-slate-600 h-[calc(100vh-8.75rem)] w-full`}
      >
        {/* BEGIN: Users Layout */}
        <div className="h-full overflow-auto">
          <div className="grid grid-cols-12 gap-3 p-3">
            {damList}
          </div>
        </div>
        {/* END: Users Layout */}
      </div>
    </>
  );
}

export default Dam;
