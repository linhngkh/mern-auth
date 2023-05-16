import { LogInIcon, LogOutIcon } from "lucide-react";

const Header = () => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div
        className={`${flexBetween} mx-auto fixed top-0 z-30 w-full p-6 bg-slate-900 text-white`}
      >
        <div className="w-3/4">
          <h1 className="text-2xl pl-6">MERN Auth</h1>
        </div>
        <div className={`${flexBetween} w-1/4 gap-8 text-sm`}>
          <div className="decoration-none text-white flex space-x-5 items-center justify-normal pr-6">
            <a className="">
              Log In <LogInIcon />
            </a>
            <a>
              Log Out
              <LogOutIcon />
            </a>
          </div>
        </div>
      </div>
      s
    </nav>
  );
};

export default Header;
