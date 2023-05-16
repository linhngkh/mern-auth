import { LogInIcon, LogOutIcon, Menu, XCircle } from "lucide-react";
import useMediaQuery from "../hooks/usemediaQuery";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 mx-auto w-full bg-slate-900 p-6 text-white`}
      >
        <div className="w-3/4">
          <h1 className="pl-6 text-2xl">MERN Auth</h1>
        </div>
        {isAboveMediumScreen ? (
          <div className={`${flexBetween} w-1/4 gap-8 text-sm`}>
            <div className="decoration-none flex items-center justify-normal space-x-5 pr-6 text-white">
              <Link to="/login">
                Log In <LogInIcon />
              </Link>
              <Link to="/register">
                Sign Up
                <LogOutIcon />
              </Link>
            </div>
          </div>
        ) : (
          <button
            className="rounded-full bg-slate-400 p-2"
            onClick={() => setIsMenuToggle(!isMenuToggle)}
          >
            <Menu />
          </button>
        )}
      </div>
      {/* mobile menu modal */}

      {!isAboveMediumScreen && isMenuToggle && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-slate-900 text-white drop-shadow-xl md:top-16">
          <div className="flex justify-end p-12 ">
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XCircle />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col text-2xl">
            <Link to="/login">
              Log In <LogInIcon />
            </Link>
            <Link to="/register">
              Sign Up
              <LogOutIcon />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
