import {HiOutlinePencilAlt, HiOutlineTrash} from "react-icons/hi";
import {Tambah} from "../../Elements/Button/Button";
import GrupIndex from "../../Elements/GrupIndex";

import axios from "axios";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {useNavigate, Link} from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [expired, setExpired] = useState("");
  const [isLoginID, setIsLoginID] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BE_URL}/auth/whoami`
      );
      const newToken = response.data.accessToken;
      setToken(newToken);
      const decoded = jwtDecode(newToken);
      setExpired(decoded.exp);
      setIsLoginID(decoded.userId);
    } catch (err) {
      if (err.response) {
        navigate("/user-login");
      }
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BE_URL}/manage/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let sortID = response.data;
      sortID.sort((a, b) =>
        a.id === isLoginID ? -1 : b.id === isLoginID ? 1 : 0
      );
      setUsers(sortID);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BE_URL}/manage/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      setTimeout(() => {
        setMessage("");
      }, 1000);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <section>
      <h2 className="text-sm py-2 font-semibold opacity-50 uppercase">
        <span className="text-400">Manage / </span>
        Users
      </h2>
      <GrupIndex>
        <Tambah />
      </GrupIndex>
      <span className="text-g500">{message}</span>
      <table className="w-full mt-3">
        <thead className="h-12 opacity-70 bg-200">
          <tr>
            <th className="w-14 border-r border-950">No</th>
            <th className="text-start px-1 border-r border-950">Username</th>
            <th className=" text-start px-1 border-r border-950">Email</th>
            <th className="text-start px-1 border-r border-950">Role</th>
            <th className="text-start w-12 px-1 border-r border-950">Avatar</th>
            <th className="text-start w-24 px-1">Action</th>
          </tr>
        </thead>
        <tbody className="opacity-80">
          {users.map((user, index) => (
            <tr className="h-12" key={user.id}>
              <td className={`text-center ${index % 2 === 1 ? "bg-100" : ""}`}>
                {index + 1}
              </td>
              <td className={`px-1 ${index % 2 === 1 ? "bg-100" : ""}`}>
                {user.fullName}
              </td>
              <td className={`px-1 ${index % 2 === 1 ? "bg-100" : ""}`}>
                {user.email}
              </td>
              <td className={`px-1 ${index % 2 === 1 ? "bg-100" : ""}`}>
                {user.user_role}
              </td>
              <td className={`px-3 ${index % 2 === 1 ? "bg-100" : ""}`}>
                <img
                  src={user.imageUrl}
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
              </td>
              <td
                className={`space-x-4 text-center ${
                  index % 2 === 1 ? "bg-100" : ""
                }`}>
                <button>
                  <Link to={`update/${user.id}`}>
                    <HiOutlinePencilAlt
                      className="text-g400 hover:text-g500"
                      size={20}
                    />
                  </Link>
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  disabled={user.id === isLoginID}>
                  <HiOutlineTrash
                    className={`text-r400 hover:text-r500 ${
                      user.id === isLoginID
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    size={20}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
