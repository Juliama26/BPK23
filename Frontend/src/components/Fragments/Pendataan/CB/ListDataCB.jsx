import axios from "axios";
import * as XLSX from "xlsx";
import {jwtDecode} from "jwt-decode";
import {useEffect, useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import {
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiArrowLeft,
  HiArrowRight,
} from "react-icons/hi";
import GrupIndex from "../../../Elements/GrupIndex";
import {Button_, Tambah} from "../../../Elements/Button/Button";
import {Input_} from "../../../Elements/Input/Input";
import {Kabupaten_} from "../../../Elements/Select/Select";
import {IconButton, Typography} from "@material-tailwind/react";
import {motion} from "framer-motion";

export default function ListDataCB() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectKabupaten, setSelectKabupaten] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();
  const itemsPerPage = 10;

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BE_URL}/auth/whoami`
        );
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
      fetchData();
    }
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BE_URL}/data-cb/category/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const sortedData = response.data.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
      setList(sortedData);
      filterData(search, "", response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BE_URL}/data-cb/${id}`,
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
      fetchData();
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    filterData(value, selectKabupaten, list);
  };

  const handleSelectKabupatenChange = (event) => {
    const value = event;
    setSelectKabupaten(value);
    filterData(search, value, list);
  };

  const filterData = (searchValue, kabupatenValue, dataList) => {
    const filtered = dataList.filter((item) => {
      return (
        item.nama.toLowerCase().includes(searchValue.toLowerCase()) &&
        (kabupatenValue === "" || item.kabupaten === kabupatenValue)
      );
    });
    setNotFound(filtered.length === 0);
    setFilteredList(filtered);
    setActivePage(1);
  };

  const exportToExcel = () => {
    const dataToExport = filteredList.map((item, index) => ({
      No: index + 1,
      Nama: item.nama,
      Nama_Lain: item.nama_lain,
      Koordx: item.koordx,
      Koordy: item.koordy,
      Provinsi: item.provinsi,
      Kabupaten: item.kabupaten,
      Kecamatan: item.kecamatan,
      Kelurahan: item.kelurahan,
      Dusun: item.dusun,
      Deskripsi: item.deskripsi,
      Narasumber: item.narasumber,
    }));
    const ws = XLSX.utils.json_to_sheet(dataToExport);
    ws["cols"] = [
      {width: 5},
      {width: 50},
      {width: 20},
      {width: 20},
      {width: 20},
      {width: 20},
      {width: 20},
      {width: 20},
      {width: 20},
      {width: 20},
      {width: 20},
    ];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `${list[0]?.cbCategory?.title}`);
    XLSX.writeFile(wb, `${list[0]?.cbCategory?.title}.xlsx`);
  };

  const next = () => {
    if (activePage < Math.ceil(filteredList.length / itemsPerPage)) {
      setActivePage(activePage + 1);
    }
  };

  const prev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const paginatedData = filteredList.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <section className="min-h-screen">
      {message && (
        <motion.span
          className="fixed top-36 left-1/2 z-[1] bg-50 px-5 py-3 border text-r500 text-opacity-80"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          {message}
        </motion.span>
      )}
      <h2 className="text-sm py-2 font-semibold opacity-50 uppercase">
        <span className="text-400">CB / </span>
        {list[0]?.cbCategory?.title || "?"}
      </h2>
      <section className="flex items-center justify-between py-3 flex-wrap-reverse md:flex-nowrap">
        <GrupIndex>
          <Input_ type="text" label="Pencarian..." onChange={handleSearch} />
          <Kabupaten_
            value={selectKabupaten}
            onChange={handleSelectKabupatenChange}
          />
        </GrupIndex>
        <section className="flex justify-between w-full md:w-auto md:gap-x-3 mb-3 md:mb-0">
          <Button_ title="Excel" onClick={exportToExcel} />
          <Tambah />
        </section>
      </section>
      <motion.table
        className="w-full"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}>
        <thead className="h-12 opacity-70 bg-200">
          <tr>
            <th className="w-14 border-r border-950">No</th>
            <th className="text-start px-1 border-r border-950">Nama Objek</th>
            <th className="text-start px-1 border-r border-950">Provinsi</th>
            <th className="text-start px-1 border-r border-950">Kabupaten</th>
            <th className="text-start w-12 px-1 border-r border-950">Avatar</th>
            <th className="text-start w-20 md:w-24 px-1">Action</th>
          </tr>
        </thead>
        <tbody className="opacity-80">
          {paginatedData.map((item, index) => (
            <motion.tr
              className="h-12"
              key={item.id}
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.1, delay: index * 0.1}}>
              <td className={`text-center ${index % 2 === 1 ? "bg-100" : ""}`}>
                {index + 1 + (activePage - 1) * itemsPerPage}
              </td>
              <td className={`px-1 ${index % 2 === 1 ? "bg-100" : ""}`}>
                <Link to={`detail/${item.uuid}`}>{item.nama}</Link>
              </td>
              <td className={`px-1 ${index % 2 === 1 ? "bg-100" : ""}`}>
                {item.provinsi}
              </td>
              <td className={`px-1 ${index % 2 === 1 ? "bg-100" : ""}`}>
                {item.kabupaten}
              </td>
              <td className={`px-3 ${index % 2 === 1 ? "bg-100" : ""}`}>
                <img
                  src={item.User?.imageUrl}
                  className="rounded-full w-8 h-8"
                  alt="Avatar"
                />
              </td>
              <td
                className={`space-x-4 text-center ${
                  index % 2 === 1 ? "bg-100" : ""
                }`}>
                <button>
                  <Link to={`update/${item.uuid}`}>
                    <HiOutlinePencilAlt
                      className="text-g400 hover:text-g500"
                      size={20}
                    />
                  </Link>
                </button>
                <button onClick={() => handleDelete(item.uuid)}>
                  <HiOutlineTrash
                    className="text-r400 hover:text-r500"
                    size={20}
                  />
                </button>
              </td>
            </motion.tr>
          ))}
          {notFound && (search !== "" || selectKabupaten !== "") && (
            <tr className="h-12">
              <td colSpan={6} className="text-center">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </motion.table>
      <section className="flex items-center justify-end gap-x-3 py-5">
        <IconButton
          size="sm"
          variant="text"
          style={{border: "1px solid #0c506e", color: "#0c506e"}}
          onClick={prev}
          disabled={activePage === 1}>
          <HiArrowLeft strokeWidth={2} />
        </IconButton>
        <Typography color="gray" className="font-normal">
          Page <strong className="text-900">{activePage}</strong> of{" "}
          <strong className="text-900">
            {Math.ceil(filteredList.length / itemsPerPage)}
          </strong>
        </Typography>
        <IconButton
          size="sm"
          variant="text"
          style={{border: "1px solid #0c506e", color: "#0c506e"}}
          onClick={next}
          disabled={
            activePage === Math.ceil(filteredList.length / itemsPerPage)
          }>
          <HiArrowRight strokeWidth={2} />
        </IconButton>
      </section>
    </section>
  );
}
