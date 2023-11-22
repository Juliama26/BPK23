import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function UserEdit() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confmPassword, setConfmPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserID = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/${id}`);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.message);
        }
      }
    };
    getUserID();
  }, [id]);
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:5000/user/${id}`, {
        username,
        email,
        password,
        confmPassword,
        role,
      });
      setMsg(response.data.message);
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };

  return (
    <div className="font-romans text-secondary py-3 px-2">
      <h1 className="text-xl font-semibold bg-tertiary shadow-md p-2 rounded-md">
        Edit User!
      </h1>
      <div className="p-2 text-err">{msg}</div>
      <div className="bg-test rounded-md">
        <form onSubmit={updateUser} className="pb-10">
          <div className="p-2 rounded-md">
            <label htmlFor="username" className="block mb-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              required
              autoComplete="off"
              placeholder="Username..."
              className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className=" px-2 rounded-md">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              autoComplete="off"
              placeholder="Email..."
              className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 mb-3">
            <div className=" px-2 rounded-md">
              <label htmlFor="password" className="block mb-1 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password..."
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className=" px-2 rounded-md">
              <label htmlFor="confirm" className="block mb-1 font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm"
                placeholder="Confirm Password..."
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={confmPassword}
                onChange={(e) => setConfmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="px-2 rounded-md">
            <label htmlFor="role" className="block mb-1 font-semibold">
              Role <span className="text-err text-xl">*</span>
            </label>
            <select
              name="role"
              id="role"
              className="block border p-2 w-full rounded-md bg-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" className="text-tertiary">
                ---Silahkan Pilih Role User---
              </option>
              <option value="Admin">Admin</option>
              <option value="OPK">OPK</option>
              <option value="CB">CB</option>
            </select>
            <div className="bg-primary mt-3 p-2 rounded-md hover:bg-tertiary duration-300 ease-in-out">
              <button
                type="submit"
                className="w-full font-romans text-base font-semibold text-center"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
