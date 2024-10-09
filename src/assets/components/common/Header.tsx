import { Hamburger } from "../../icons/Hamburger";
import PersonifyIcon from "../../images/personify-icon.png";

export default function Header() {
  return (
    <header className="w-full px-4 grid grid-cols-12 justify-between items-center h-[100px]">
      <div className="h-full w-full col-span-10 flex justify-start items-center gap-4">
        <img
          src={PersonifyIcon}
          alt="Personify icon"
          className="w-14 h-14 object-contain"
        />
        <button className="border-2 border-green-800 text-green-800 font-bold rounded-2xl px-2">
            BETA
        </button>
      </div>
      <div className="col-span-2 h-full w-full flex items-center justify-end">
        <div className="text-black">
          <Hamburger />
        </div>
      </div>
    </header>
  );
}
