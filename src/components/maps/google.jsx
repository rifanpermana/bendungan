import { Thermometer, Cloud } from "lucide-react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

/*reference*/
// https://github.com/google-map-react/google-map-react
// http://google-map-react.github.io/google-map-react/map/main/
// https://github.com/google-map-react/google-map-react/issues/585 (need API?)

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Main() {
  const defaultProps = {
    center: {
      lat: -6.919461626575115,
      lng: 107.61946767752964,
    },
    zoom: 11,
  };

  return (
    <>
      <div className="bg-water-nav text-water-nav border-b border-water-theme flex w-full  p-0 h-14 items-center px-1.5">
        <div className="mx-2 w-full">Map</div>
      </div>
      {/* reduce by topbar h-14 (3.5rem) and footer h-7 (1.75rem)  */}
      <div className="bg-water-base text-water-base dark:text-light h-[calc(100vh-8.75rem)] w-full">
        <div className="h-full relative">
          <div className="h-12 w-40 absolute z-[10] left-0 right-0 mx-auto bottom-0">
            <div className="h-12 rounded-t-xl border border-water-theme border-b-0 flex bg-water-nav p-2 ">
              <Thermometer className="w-8 h-8" />
              <h1 className="mr-2">27°</h1>
              <Cloud className="w-8 h-8" />
              <h1>70%</h1>
            </div>
          </div>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            draggable={true}
            layerTypes={[]}
            // layerTypes={['TransitLayer', 'TrafficLayer']}
            // mapTypeControl: {true} need API
          >
            <AnyReactComponent
              lat={-6.919461626575115}
              lng={107.61946767752964}
              text={"Ada Aja"}
            />
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}

export default Main;
