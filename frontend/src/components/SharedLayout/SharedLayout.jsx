import { Outlet, NavLink, Link } from "react-router-dom";
import useStore from "../../zustand/useStore";
import { LogOut, MessageSquare, User, Settings, Users } from "lucide-react";

const SharedLayout = () => {
  const { authUser, logout } = useStore();

  return (
    <>
      <header
        className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg "
      >
        <div className="container flex justify-between mx-auto px-4 h-16">
          <div className="felx items-center justify-between h-full">
            <NavLink
              to="/"
              className="flex h-[100%] items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10  flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-primary " />
              </div>
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            {authUser && (
              <>
                <Link to="/profile" className="btn btn-md gap-2">
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
                <Link to="/settings" className="btn btn-md gap-2">
                  <Settings className="size-5" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>
                <Link to="/friends" className="btn btn-md gap-2">
                  <Users className="size-5" />
                  <span className="hidden sm:inline">Friends</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex gap-2 btn btn-md items-center"
                  type="button"
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
