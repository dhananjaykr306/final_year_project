import React, { useState } from "react";

import SearchModal from "../components/ModalSearch";
import Notifications from "../components/DropdownNotifications";
import Help from "../components/DropdownHelp";
import UserMenu from "../components/DropdownProfile";
import ThemeToggle from "../components/ThemeToggle";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import UserAvatar from "../images/user-avatar-32.png";
import { Link, Stack } from "@mui/joy";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  if (path != "/signin" && path != "/signup") {
    return (
      <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 -mb-px">
            {/* Header: Left side */}
            <div className="flex">
              <button
                className="inline-flex justify-center items-center group mr-4"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  style={{ transform: "rotate(270deg)" }}
                  className="w-8 h-8 rounded-full"
                  src={UserAvatar}
                  width="32"
                  height="32"
                  alt="User"
                />

                <div className="flex items-center truncate">
                  <span className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
                    PID 01
                  </span>
                </div>
              </button>
              {/* <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" /> */}
              {/* <Stack gap={1} direction="row" sx={{ marginLeft: "1rem" }}>
                <button
                  className="inline-flex justify-center items-center group mr-4"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  <div className="flex items-center truncate">
                    <span className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
                      Dashboards
                    </span>
                  </div>
                </button>
              </Stack> */}
            </div>

            {/* Header: Right side */}
            <div className="flex items-center space-x-3">
              {/* <div>
                <button
                  className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3 ${
                    searchModalOpen && "bg-slate-200"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchModalOpen(true);
                  }}
                  aria-controls="search-modal"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-slate-500 dark:text-slate-400"
                      d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                    />
                    <path
                      className="fill-current text-slate-400 dark:text-slate-500"
                      d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                    />
                  </svg>
                </button>
                <SearchModal
                  id="search-modal"
                  searchId="search"
                  modalOpen={searchModalOpen}
                  setModalOpen={setSearchModalOpen}
                />
              </div> */}
              {/* <Notifications align="right" /> */}
              {/* <Help align="right" /> */}
              <ThemeToggle />
              {/*  Divider */}
              <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
              {/* <UserMenu align="right" /> */}
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                to="/signin"
                onClick={() => {
                  localStorage.removeItem("userId");
                  navigate("/signin");
                }}
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
