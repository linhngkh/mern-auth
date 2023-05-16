import { LogInIcon, LogOutIcon, Menu, XCircle } from "lucide-react";
import useMediaQuery from "../hooks/usemediaQuery";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  return (
    <nav className="h-[10vh]">
      <div
        className={`${flexBetween} fixed top-0 z-30 mx-auto w-full bg-slate-900 p-4 text-white`}
      >
        <div className="w-3/4">
          <Link to="/">
            <h1 className="pl-6 text-2xl">MERN Auth</h1>
          </Link>
        </div>

        {isAboveMediumScreen ? (
          <div className={`${flexBetween} w-1/4 text-sm`}>
            <div className="decoration-none flex justify-end gap-4 text-center text-sm font-bold text-white">
              <Link to="/login">
                <div className="flex items-center gap-2 ">
                  <LogInIcon className="h-6 w-6" />
                  <p>Log In</p>
                </div>
              </Link>
              <Link to="/register">
                <div className="flex items-center gap-2">
                  <LogOutIcon className="h-6 w-6" />
                  <p> Sign Up</p>
                </div>
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
      )}
    </nav>
  );
};

export default Header;
