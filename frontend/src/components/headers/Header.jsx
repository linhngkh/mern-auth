import { LogInIcon, LogOutIcon, Menu, ChevronDown } from "lucide-react";
import useMediaQuery from "../../hooks/usemediaQuery";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MobileHeader from "./MobileHeader";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";

const Header = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
        {/* if user logged in */}
        {isAboveMediumScreen ? (
          <div className={`${flexBetween} w-1/4 text-sm`}>
            <div className="decoration-none flex justify-end gap-4 text-center text-sm font-bold text-white">
              {userInfo ? (
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      id="username"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {userInfo.name}
                      <ChevronDown />
                    </button>
                  </div>
                  {isOpen && (
                    <nav
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200 "
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Profile
                        </Link>
                        {/* log out */}
                        <form onClick={logoutHandler}>
                          <button
                            type="submit"
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-slate-200 "
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-3"
                          >
                            Log out
                          </button>
                        </form>
                      </div>
                    </nav>
                  )}
                </div>
              ) : (
                <>
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
                </>
              )}
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
        <MobileHeader
          setIsMenuToggle={setIsMenuToggle}
          isMenuToggle={isMenuToggle}
        />
      )}
    </nav>
  );
};

export default Header;
