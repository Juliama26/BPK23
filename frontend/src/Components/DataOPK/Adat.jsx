import React from "react";
import { Link } from "react-router-dom";
import {
  DocumentPlusIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

export default function Adat() {
  const [Adat, setAdat] = useState([]);
  const [msg, setMsg] = useState("");
  const [serch, setSerch] = useState("");
  const [dataFound, setDataFound] = useState(true);
  useEffect(() => {
    getAllAdat();
  }, []);
  const getAllAdat = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Adat");
      setAdat(response.data);
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };
  const deleteAdat = async (AdatID, nama) => {
    try {
      const confirmed = window.confirm(
        `Apakah anda yakin menghapus data ${nama}?`
      );
      if (confirmed) {
        await axios.delete(`http://localhost:5000/Adat/${AdatID}`);
        getAllAdat();
      }
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };
  const exportDataToXLSX = () => {
    const dataToExport = Adat.map((item, index) => ({
      No: index + 1,
      Nama_Situs: item.nama,
      Nama_Lain: item.namalain,
      Provinsi: item.provinsi,
      Kab_Kota: item.kota,
      Kec_Distrik: item.kecamatan,
      Desa_Kel: item.desa,
      Dusun_Kamp: item.dusun,
      Koord_X: item.koordx,
      Koord_Y: item.koordy,
      Narasumber: item.narasumber,
      Deskripsi: item.deskripsi,
      Gambar: item.fotoPath,
      Sertifikat: item.sertiPath,
    }));

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    ws["!cols"] = [
      { width: 5 },
      { width: 28 },
      { width: 12 },
      { width: 16 },
      { width: 18 },
      { width: 18 },
      { width: 18 },
      { width: 18 },
      { width: 16 },
      { width: 16 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Adat");
    XLSX.writeFile(wb, "Adat.xlsx");
  };

  const serchHandler = (e) => {
    setSerch(e.target.value);
    const filteredData = Adat.filter((item) =>
      item.nama.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataFound(filteredData.length > 0);
  };

  const filterdAdat = Adat.filter((item) =>
    item.nama.toLowerCase().includes(serch.toLowerCase())
  );
  return (
    <div className="font-romans text-secondary py-3 px-2">
      <h1 className="text-xl font-semibold bg-tertiary shadow-md p-2 rounded-md">
        Data Adat
      </h1>
      <div className="flex justify-between">
        <div className="flex gap-x-1 mt-3 px-2">
          <h5 className="text-xl">List Adat!</h5>
          <Link to={"/Adat/add"}>
            <DocumentPlusIcon className="w-6 text-ring hover:text-secondary duration-300 ease-in-out" />
          </Link>
        </div>
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={serch}
            onChange={serchHandler}
            className="mt-3 px-2  border rounded"
          />
          <button
            onClick={exportDataToXLSX}
            className="mt-3 px-2 py-1 border rounded-md bg-ring text-test font-semibold hover:bg-tertiary hover:text-secondary duration-300 ease-in-out"
          >
            Export Excel
          </button>
        </div>
      </div>
      <hr className="mt-1" />
      <div className="text-err">{msg}</div>
      <table className="w-full">
        <thead>
          <tr className="bg-test">
            <th className="py-2">No</th>
            <th>Nama Situs</th>
            <th>Provinsi</th>
            <th>Kab/Kota</th>
            <th>Kec/Distrik</th>
            <th>Kel/Desa</th>
            <th>Dusun/Kamp</th>
            <th>Koord X</th>
            <th>Koord Y</th>
            <th className="w-1/12">Action</th>
          </tr>
        </thead>
        {dataFound ? (
          <tbody className="text-center">
            {filterdAdat.map((Adat, index) => (
              <tr className="border" key={Adat.uuid}>
                <td>{index + 1}</td>
                <td>{Adat.nama}</td>
                <td>{Adat.provinsi}</td>
                <td>{Adat.kota}</td>
                <td>{Adat.kecamatan}</td>
                <td>{Adat.desa}</td>
                <td>{Adat.dusun}</td>
                <td>{Adat.koordx}</td>
                <td>{Adat.koordy}</td>
                <td className="space-x-3">
                  <button>
                    <Link to={`/Adat/edit/${Adat.uuid}`}>
                      <PencilIcon className="w-5" />
                    </Link>
                  </button>
                  <button onClick={() => deleteAdat(Adat.uuid, Adat.nama)}>
                    <TrashIcon className="w-5 text-err" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={10} className="text-center">
                Ups.. Data Tidak Ditemukan😞
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
