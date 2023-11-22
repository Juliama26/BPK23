import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  UserPlusIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);
  const getAllUser = async () => {
    const response = await axios.get("http://localhost:5000/user");
    setUsers(response.data);
  };
  const deleteUser = async (userID, username) => {
    const confirmed = window.confirm(
      `Apakah anda yakin menghapus user ${username}?`
    );
    if (confirmed) {
      await axios.delete(`http://localhost:5000/user/${userID}`);
      getAllUser();
    }
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="font-romans text-secondary py-3 px-2">
      <h1 className="text-xl font-semibold bg-tertiary shadow-md p-2 rounded-md">
        Data Users
      </h1>
      <div className="flex gap-x-1 mt-3 px-2">
        <h5 className="text-xl">List User!</h5>
        <Link to={"/users/add"}>
          <UserPlusIcon className="w-6" />
        </Link>
      </div>
      <hr />
      <div>
        <table className="w-full">
          <thead>
            <tr className=" bg-test">
              <th className="py-2">No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Time</th>
              <th className="w-1/12">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <tr className="border" key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{formatDate(user.createdAt)}</td>
                <td className="grid grid-cols-2 p-2">
                  <button>
                    <Link to={`/users/edit/${user.uuid}`}>
                      <PencilIcon className="w-5" />
                    </Link>
                  </button>
                  <button>
                    <TrashIcon
                      onClick={() => deleteUser(user.uuid, user.username)}
                      className="w-5 text-err"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
