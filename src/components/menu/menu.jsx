import { Map, User, Landmark, Cpu, List } from "lucide-react";

function Menu() {
  return (
    <div className="text-center flex flex-col justify-center items-center h-full">
      <div className="grid grid-cols-5 w-4/5">
        <a href="/" className="flex">
          <div className="text-water-base flex w-11/12 justify-center bg-water-button-accent shadow-md hover:ring-1 hover:ring-water-theme active:bg-water-theme active:text-water-muted rounded-md active:ring active:ring-water-active py-2">
            <Map className="w-5 md:hidden lg:block" />
            <div className="hidden md:block ml-1">Peta</div>
          </div>
        </a>
        <a href="/dams" className="flex">
          <div className="text-water-base flex w-11/12 justify-center bg-water-button-accent shadow-md hover:ring-1 hover:ring-water-theme active:bg-water-theme active:text-water-muted rounded-md active:ring active:ring-water-active py-2">
            <Landmark className="w-5 md:hidden lg:block" />
            <div className="hidden md:block ml-1">Bendungan</div>
          </div>
        </a>
        <a href="#" className="flex">
          <div className="text-water-base flex w-11/12 justify-center bg-water-button-accent shadow-md hover:ring-1 hover:ring-water-theme active:bg-water-theme active:text-water-muted rounded-md active:ring active:ring-water-active py-2">
            <User className="w-5 md:hidden lg:block" />
            <div className="hidden md:block ml-1">User</div>
          </div>
        </a>
        <a href="#" className="flex">
          <div className="text-water-base flex w-11/12 justify-center bg-water-button-accent shadow-md hover:ring-1 hover:ring-water-theme active:bg-water-theme active:text-water-muted rounded-md active:ring active:ring-water-active py-2">
            <Cpu className="w-5 md:hidden lg:block" />
            <div className="hidden md:block ml-1">Tek. Ref.</div>
          </div>
        </a>
        <a href="/components" className="flex">
          <div className="text-water-base flex w-11/12 justify-center bg-water-button-accent shadow-md hover:ring-1 hover:ring-water-theme active:bg-water-theme active:text-water-muted rounded-md active:ring active:ring-water-active py-2">
            <List className="w-5 md:hidden lg:block" />
            <div className="hidden md:block ml-1">Components</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Menu;
