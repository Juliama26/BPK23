import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <header className="flex h-16 items-center justify-end text-secondary px-3 shadow-lg shadow-tertiary">
        <div className="flex justify-between items-center gap-2 font-romans">
          <h1 className="text-lg">{user && user.username}</h1>|
          <button>
            <UserCircleIcon className="h-10 w-10" />
          </button>
        </div>
      </header>
    </div>
  );
}
