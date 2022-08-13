import ReportMap from "@/components/report-map/Main";
import { useRef, useState, useEffect } from "react";

let data="500"
function Main() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 xl:col-span-12">
      	<ReportMap className="relative h-screen w-screen bg-slate-200" />
      </div>
    </div>
  );
}

export default Main;
