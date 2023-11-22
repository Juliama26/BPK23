import React from "react";
import { useSelector } from "react-redux";

export default function Welcome() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="font-romans text-secondary py-3 px-2">
      <h1 className="text-xl font-semibold bg-tertiary shadow-md p-2 rounded-md">
        Dashboard
      </h1>
      <div className="mt-5 px-2 text-xl">
        <h5>
          Hi👋<strong>{user && user.username}</strong>
        </h5>
        <h5>Selamat Datang di Sistem Pendataan BPK23...</h5>
      </div>
    </div>
  );
}
