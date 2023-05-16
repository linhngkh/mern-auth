import { Link } from "react-router-dom";
import { LogInIcon, LogOutIcon, XCircle } from "lucide-react";

const MobileHeader = ({ setIsMenuToggle, isMenuToggle }) => {
  return (
    <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-slate-900 text-white drop-shadow-xl md:top-16">
      <div className="flex justify-end p-12 ">
        <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
          <XCircle className="h-6 w-6" />
        </button>
      </div>
      <div className="ml-[33%] flex flex-col  text-2xl">
        <Link to="/login">
          <div className="flex items-center gap-2">
            <LogInIcon className="h-6 w-6" /> Log In
          </div>
        </Link>
        <Link to="/register">
          <div className="flex items-center gap-2">
            <LogOutIcon className="h-6 w-6" /> Sign Up
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
