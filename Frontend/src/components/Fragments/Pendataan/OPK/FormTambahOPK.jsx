import {useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {useNavigate, useParams} from "react-router-dom";
import {Button_} from "../../../Elements/Button/Button";
import {Input_} from "../../../Elements/Input/Input";
import {Kabupaten_, Provinsi_} from "../../../Elements/Select/Select";
import Textarea_ from "../../../Elements/Textarea/Textarea";

export default function FormTambahOPK(props) {
  const {title} = props;
  const [formData, setFormData] = useState({
    nama: "",
    etnis: "",
    jenis: "",
    aksara: "",
    dialek: "",
    fungsi: "",
    kegunaan: "",
    bahan: "",
    bahasa: "",
    pencipta: "",
    perlengkapan: "",
    nilai_moral: "",
    aturan: "",
    jml_pemain: 0,
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    dusun: "",
    deskripsi: "",
    narasumber: "",
    documenUrl: "",
  });
  const [image, setImage] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

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

  const onChangeImage = (e) => {
    setImage([...image, ...Array.from(e.target.files)]);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const submitData = new FormData();
      for (const key in formData) {
        submitData.append(key, formData[key]);
      }
      image.forEach((file) => submitData.append("imageUrl", file));

      await axios.post(`http://localhost:3071/data-opk/${id}`, submitData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate(`/pendataan-opk/${id}`);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again.");
      }
      setIsLoading(false);
    }
  };

  const renderFieldById = () => {
    switch (id) {
      case "1":
        return (
          <>
            <Input_
              name="nama"
              type="text"
              label="Nama OPK"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="jenis"
                type="text"
                label="Jenis Tradisi Lisan"
                value={formData.jenis}
                onChange={handleChange}
              />
            </section>
          </>
        );
      case "2":
        return (
          <>
            <Input_
              name="nama"
              type="text"
              label="Judul Manuskrip"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input_
                name="bahasa"
                type="text"
                label="Bahasa yang digunakan"
                value={formData.bahasa}
                onChange={handleChange}
              />
              <Input_
                name="pencipta"
                type="text"
                label="Pencipta manuskrip"
                value={formData.pencipta}
                onChange={handleChange}
              />
            </section>
          </>
        );
      case "3":
        return (
          <>
            <Input_
              name="nama"
              type="text"
              label="Nama OPK"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="jenis"
                type="text"
                label="Jenis Adat Istiadat"
                value={formData.jenis}
                onChange={handleChange}
              />
            </section>
          </>
        );
      case "4":
        return (
          <>
            <Input_
              name="nama"
              type="text"
              label="Nama OPK"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="jenis"
                type="text"
                label="Jenis Ritus"
                value={formData.jenis}
                onChange={handleChange}
              />
            </section>
          </>
        );
      case "5":
        return (
          <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-2">
              <Input_
                name="nama"
                type="text"
                label="Nama OPK"
                value={formData.nama}
                onChange={handleChange}
                required
              />
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="jenis"
                type="text"
                label="Jenis Seni"
                value={formData.jenis}
                onChange={handleChange}
              />
              <Input_
                name="fungsi"
                type="text"
                label="Fungsi Seni"
                value={formData.fungsi}
                onChange={handleChange}
              />
            </section>
          </>
        );
      case "6":
        return (
          <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-2">
              <Input_
                name="nama"
                type="text"
                label="Nama OPK"
                value={formData.nama}
                onChange={handleChange}
                required
              />
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="aksara"
                type="text"
                label="Aksara yang digunakan"
                value={formData.aksara}
                onChange={handleChange}
              />
              <Input_
                name="dialek"
                type="text"
                label="Dialek yang digunakan"
                value={formData.dialek}
                onChange={handleChange}
              />
            </section>
          </>
        );
      case "7":
        return (
          <>
            <Input_
              name="nama"
              type="text"
              label="Nama OPK"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="fungsi"
                type="text"
                label="Fungsi Teknologi Tradisional"
                value={formData.fungsi}
                onChange={handleChange}
              />
            </section>
            <Textarea_
              name="bahan"
              type="text"
              label="Bahan yang digunakan"
              value={formData.bahan}
              onChange={handleChange}
            />
          </>
        );
      case "8":
      case "9":
        return (
          <section className="grid grid-cols-1 gap-5">
            <Input_
              name="nama"
              type="text"
              label="Nama OPK"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="jml_pemain"
                type="number"
                label="Jumlah Pemain"
                value={formData.jml_pemain}
                onChange={handleChange}
              />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Textarea_
                name="perlengkapan"
                type="text"
                label="Perlengkapan OPK"
                value={formData.perlengkapan}
                onChange={handleChange}
              />
              <Textarea_
                name="nilai_moral"
                type="text"
                label="Nilai moral yang terkandung"
                value={formData.nilai_moral}
                onChange={handleChange}
              />
            </section>
            <Textarea_
              name="aturan"
              type="text"
              label="Aturan OPK"
              value={formData.aturan}
              onChange={handleChange}
            />
          </section>
        );
      case "10":
        return (
          <>
            <Input_
              name="nama"
              type="text"
              label="Nama OPK"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="kegunaan"
                type="text"
                label="Kegunaan OPK"
                value={formData.kegunaan}
                onChange={handleChange}
              />
            </section>
          </>
        );
      default:
        return (
          <>
            <Input_
              name="nama"
              type="text"
              label="Nama OPK"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input_
                name="etnis"
                type="text"
                label="Etnis yang melaksanakan"
                value={formData.etnis}
                onChange={handleChange}
              />
              <Input_
                name="fungsi"
                type="text"
                label="Fungsi seni"
                value={formData.fungsi}
                onChange={handleChange}
              />
            </section>
          </>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <h1 className="text-xl text-center font-semibold py-6 opacity-70">
        {title}{" "}
        {id === "1"
          ? "Tradisi Lisan"
          : id === "2"
          ? "Manuskrip"
          : id === "3"
          ? "Adat Istiadat"
          : id === "4"
          ? "Ritus"
          : id === "5"
          ? "Seni"
          : id === "6"
          ? "Bahasa"
          : id === "7"
          ? "Teknologi Tradisional"
          : id === "8"
          ? "Permainan Rakyat"
          : id === "9"
          ? "Olahraga Tradisional"
          : id === "10"
          ? "Pengetahuan Tradisional"
          : "OPK"}
      </h1>
      <span className="text-xs text-r500">{message}</span>
      <section className="grid grid-cols-1 gap-y-5">
        {renderFieldById()}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Provinsi_
            name="provinsi"
            value={formData.provinsi}
            onChange={(value) =>
              setFormData((prev) => ({...prev, provinsi: value}))
            }
          />
          <Kabupaten_
            name="kabupaten"
            value={formData.kabupaten}
            onChange={(value) =>
              setFormData((prev) => ({...prev, kabupaten: value}))
            }
          />
        </section>
        <section
          className={`grid grid-cols-1 md:grid-cols-3 gap-2 ${
            id === "1" || id === "3" || id === "5" || id === "6"
              ? "hidden"
              : "block"
          }`}>
          <Input_
            name="kecamatan"
            type="text"
            label="Kecamatan/Distrik"
            value={formData.kecamatan}
            onChange={handleChange}
          />
          <Input_
            name="kelurahan"
            type="text"
            label="Kelurahan/Desa"
            value={formData.kelurahan}
            onChange={handleChange}
          />
          <Input_
            name="dusun"
            type="text"
            label="Dusun/Kampung"
            value={formData.dusun}
            onChange={handleChange}
          />
        </section>
        <Textarea_
          name="deskripsi"
          type="text"
          label="Deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
        />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input_
            name="narasumber"
            type="text"
            label="Narasumber"
            value={formData.narasumber}
            onChange={handleChange}
          />
          <Input_
            type="file"
            name="imageUrl"
            label="Dokumen Gambar (Maksimal 4 file)"
            onChange={onChangeImage}
            multiple
            required
          />
        </section>
        <Input_
          name="documenUrl"
          type="text"
          label="Dokumen Lainnya"
          value={formData.documenUrl}
          onChange={handleChange}
        />
        <Button_
          title={isLoading ? "Loading..." : "Simpan"}
          type="submit"
          className="w-full mt-3"
        />
      </section>
    </form>
  );
}
