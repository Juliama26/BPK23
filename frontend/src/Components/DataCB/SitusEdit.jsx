import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function SitusEdit() {
  const [nama, setNama] = useState("");
  const [namalain, setNamaLain] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [desa, setDesa] = useState("");
  const [dusun, setDusun] = useState("");
  const [koordx, setKoordx] = useState("");
  const [koordy, setKoordy] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [narasumber, setNarasumber] = useState("");
  const [fotoPath, setFotoPath] = useState("");
  const [sertiPath, setSertiPath] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSitusID = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Situs/${id}`);
        setNama(response.data.nama);
        setNamaLain(response.data.namalain);
        setProvinsi(response.data.provinsi);
        setKota(response.data.kota);
        setKecamatan(response.data.kecamatan);
        setDesa(response.data.desa);
        setDusun(response.data.dusun);
        setKoordx(response.data.koordx);
        setKoordy(response.data.koordy);
        setDeskripsi(response.data.deskripsi);
        setNarasumber(response.data.narasumber);
        setFotoPath(response.data.fotoPath);
        setSertiPath(response.data.sertiPath);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.message);
        }
      }
    };
    getSitusID();
  }, [id]);
  const updateSitus = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:5000/Situs/${id}`, {
        nama,
        namalain,
        provinsi,
        kota,
        kecamatan,
        desa,
        dusun,
        koordx,
        koordy,
        deskripsi,
        narasumber,
        fotoPath,
        sertiPath,
      });
      setMsg(response.data.message);
      navigate("/Situs");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };

  return (
    <div className="font-romans text-secondary py-3 px-2">
      <h1 className="text-xl font-semibold bg-tertiary shadow-md p-2 rounded-md">
        Edit Situs!
      </h1>
      <div className="p-2 text-err">{msg}</div>
      <div>
        <form onSubmit={updateSitus} className="w-full mb-10">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="nama" className="block mb-1 font-semibold">
                Nama Situs
              </label>
              <input
                type="text"
                id="nama"
                required
                autoComplete="off"
                placeholder="Nama Situs..."
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="namalain" className="block mb-1 font-semibold">
                Nama Lain
              </label>
              <input
                type="text"
                id="namalain"
                required
                autoComplete="off"
                placeholder="Nama Lain..."
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={namalain}
                onChange={(e) => setNamaLain(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="provinsi" className="block mb-1 font-semibold">
                Provinsi
              </label>
              <select
                name="provinsi"
                id="provinsi"
                className="border p-2 w-full bg-white rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}
              >
                <option className="text-tertiary">---Pilih Provinsi---</option>
                <option>Papua Barat</option>
                <option>Papua Barat Daya</option>
              </select>
            </div>
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="kota" className="block mb-1 font-semibold">
                Kabupaten/Kota
              </label>
              <select
                name="kota"
                id="kota"
                className="border p-2 w-full bg-white rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={kota}
                onChange={(e) => setKota(e.target.value)}
              >
                <option className="text-tertiary">
                  ---Pilih Kabupaten/Kota---
                </option>
                <option>Mybrat</option>
                <option>Raja Ampat</option>
                <option>Sorong</option>
                <option>Sorong Selatan</option>
                <option>Tambrauw</option>
                <option>Kota Sorong</option>
                <option>Fakfak</option>
                <option>Kaimana</option>
                <option>Manokwari</option>
                <option>Manokwari Selatan</option>
                <option>Pegunungan Arfak</option>
                <option>Teluk Bintuni</option>
                <option>Teluk Wondama</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="kecamatan" className="block mb-1 font-semibold">
                Kecamatan/Distrik
              </label>
              <input
                type="text"
                id="kecamatan"
                list="distrik"
                placeholder="Kecamatan/Distrik"
                autoComplete="off"
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={kecamatan}
                onChange={(e) => setKecamatan(e.target.value)}
              />
              <datalist id="distrik">
                <option value="Kokas"></option>
                <option value="FakFak"></option>
                <option value="FakFak Tengah"></option>
                <option value="Kaimana"></option>
                <option value="Misool Barat"></option>
                <option value="Pulau Kofiau"></option>
                <option value="Kepulauan Ayau"></option>
                <option value="Distrik Arguni"></option>
                <option value="Mbahamdandara"></option>
                <option value="Manokwari"></option>
                <option value="Manokwari Selatan"></option>
                <option value="Pegunungan Arfak"></option>
                <option value="Teluk Bintuni"></option>
                <option value="Wondama"></option>
                <option value="Maybrat"></option>
                <option value="Raja Ampat"></option>
                <option value="Sorong"></option>
                <option value="Sorong Selatan"></option>
                <option value="Tambrauw"></option>
              </datalist>
            </div>
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="desa" className="block mb-1 font-semibold">
                Desa/Kelurahan
              </label>
              <input
                type="text"
                id="desa"
                placeholder="Desa/Kel..."
                autoComplete="off"
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={desa}
                onChange={(e) => setDesa(e.target.value)}
              />
            </div>
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="dusun" className="block mb-1 font-semibold">
                Dusun/Kampung
              </label>
              <input
                type="text"
                id="dusun"
                placeholder="Dusun/Kamp..."
                autoComplete="off"
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={dusun}
                onChange={(e) => setDusun(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="koordx" className="block mb-1 font-semibold">
                Koordinat X
              </label>
              <input
                type="text"
                id="koordx"
                required
                placeholder="Koordinat X..."
                autoComplete="off"
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={koordx}
                onChange={(e) => setKoordx(e.target.value)}
              />
            </div>
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="koordy" className="block mb-1 font-semibold">
                Koordinat Y
              </label>
              <input
                type="text"
                id="koordy"
                required
                placeholder="Koordinat Y..."
                autoComplete="off"
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={koordy}
                onChange={(e) => setKoordy(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="deskripsi" className="block mb-1 font-semibold">
                Deskripsi
              </label>
              <textarea
                id="deskripsi"
                placeholder="Masukkan deskripsi..."
                autoComplete="off"
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </div>
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="narasumber" className="block mb-1 font-semibold">
                Narasumber
              </label>
              <input
                type="text"
                id="narasumber"
                placeholder="Narasumber..."
                autoComplete="off"
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={narasumber}
                onChange={(e) => setNarasumber(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="fotoPath" className="block mb-1 font-semibold">
                Gambar
              </label>
              <input
                // type="url"
                type="text"
                id="fotoPath"
                required
                autoComplete="off"
                placeholder="Link Gambar..."
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={fotoPath}
                onChange={(e) => setFotoPath(e.target.value)}
              />
            </div>
            <div className="bg-test p-3 rounded-md">
              <label htmlFor="sertiPath" className="block mb-1 font-semibold">
                Sertifikat
              </label>
              <input
                // type="url"
                type="text"
                id="sertiPath"
                required
                autoComplete="off"
                placeholder="Link Sertifikat..."
                className="border p-2 w-full rounded-md placeholder:text-inring focus:outline-none focus:ring-1 focus:ring-ring 
              focus:border-ring"
                value={sertiPath}
                onChange={(e) => setSertiPath(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-2 px-3 w-full mt-3 rounded font-semibold bg-test hover:bg-tertiary duration-300 ease-in-out"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
