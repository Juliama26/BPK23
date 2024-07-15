import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {HiOutlineMinus, HiOutlineTrash} from "react-icons/hi";

import {Button_} from "../../../Elements/Button/Button";
import {Input_} from "../../../Elements/Input/Input";

export default function CategoryList() {
  const [cb, setCb] = useState([]);
  const [opk, setOpk] = useState([]);

  const [newTitleCb, setNewTitleCb] = useState("");
  const [newTitleOpk, setNewTitleOpk] = useState("");

  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await axios.get("http://localhost:3071/auth/whoami");
        const decoded = jwtDecode(response.data.accessToken);
        setToken(response.data.accessToken);
        setExpired(decoded.exp);
      } catch (err) {
        if (err.response) {
          navigate("/user-login");
        }
      }
    };
    refreshToken();
  }, [navigate]);

  useEffect(() => {
    if (token) {
      fetchDataCb();
      fetchDataOpk();
    }
  }, [token]);

  const fetchDataCb = async () => {
    try {
      const response = await axios.get("http://localhost:3071/category/cb", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCb(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleSubmitCb = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3071/category/cb",
        {title: newTitleCb},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
      setCb([...cb, response.data]);
      setNewTitleCb("");
    } catch (err) {
      console.error("Error adding data:", err);
    }
  };

  const handleDeleteCb = async (id) => {
    try {
      await axios.delete(`http://localhost:3071/category/cb/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCb(cb.filter((cb) => cb.id !== id));
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  const fetchDataOpk = async () => {
    try {
      const response = await axios.get("http://localhost:3071/category/opk", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpk(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleSubmitOpk = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3071/category/opk",
        {title: newTitleOpk},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      setOpk([...opk, response.data]);
      setNewTitleOpk("");
    } catch (err) {
      console.error("Error adding data:", err);
    }
  };

  const handleDeleteOpk = async (id) => {
    try {
      await axios.delete(`http://localhost:3071/category/opk/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpk(opk.filter((opk) => opk.id !== id));
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  return (
    <section>
      <h2 className="text-sm py-2 font-semibold opacity-50 uppercase">
        <span className="text-400">Manage / </span>
        Category
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-4">
        <section className="flex flex-col gap-y-3 md:gap-y-5 px-2 md:px-3 md:border-r-2 md:min-h-screen">
          {/* <h1 className="text-xl text-center border-b border-opacity-30">
            Category CB
          </h1> */}
          {/* {message && <p>{message}</p>} */}
          <form onSubmit={handleSubmitCb} className="flex gap-x-3">
            <Input_
              type="text"
              label="Kategori CB"
              value={newTitleCb}
              onChange={(e) => setNewTitleCb(e.target.value)}
            />
            <Button_ type="submit" title="Tambah" />
          </form>
          <section className="mt-5">
            {cb.map((item, index) => (
              <section
                key={index}
                className="py-2 flex items-center justify-between">
                <h4 className="flex items-center">
                  <HiOutlineMinus className="text-xs mr-1" />
                  {item.title}
                </h4>
                <HiOutlineTrash
                  onClick={() => handleDeleteCb(item.id)}
                  className="text-r400 hover:text-r500 cursor-pointer mr-7"
                  size={20}
                />
              </section>
            ))}
          </section>
        </section>
        <section className="flex flex-col gap-y-3 md:gap-y-5 px-2 md:px-3">
          {/* <h1 className="text-xl text-center border-b border-opacity-30">
            Category OPK
          </h1>
          {message && <p>{message}</p>} */}
          <form onSubmit={handleSubmitOpk} className="flex gap-x-3">
            <Input_
              type="text"
              label="Kategori OPK"
              value={newTitleOpk}
              onChange={(e) => setNewTitleOpk(e.target.value)}
            />
            <Button_ type="submit" title="Tambah" />
          </form>
          <section className="md:grid md:grid-cols-2 gap-x-2 mt-5">
            {opk.map((item, index) => (
              <section
                key={index}
                className="py-2 flex items-center justify-between">
                <h4 className="flex items-center">
                  <HiOutlineMinus className="text-xs mr-1" />
                  {item.title}
                </h4>
                <HiOutlineTrash
                  onClick={() => handleDeleteOpk(item.id)}
                  className="text-r400 hover:text-r500 cursor-pointer mr-7"
                  size={20}
                />
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}
