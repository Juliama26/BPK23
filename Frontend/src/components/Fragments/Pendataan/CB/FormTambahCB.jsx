import axios from "axios";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {useNavigate, useParams} from "react-router-dom";
import {Button_} from "../../../Elements/Button/Button";
import {Input_} from "../../../Elements/Input/Input";
import {Kabupaten_, Provinsi_} from "../../../Elements/Select/Select";
import Textarea_ from "../../../Elements/Textarea/Textarea";

export default function FormTambahCB(props) {
  const {title} = props;
  const [formData, setFormData] = useState({
    nama: "",
    namaLain: "",
    koordx: "",
    koordy: "",
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

      await axios.post(
        `${import.meta.env.VITE_BE_URL}/data-cb/${id}`,
        submitData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate(`/pendataan-cb/${id}`);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again.");
      }
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-xl text-center font-semibold py-6 opacity-70">
        {title}
      </h1>
      <span className="text-xs text-r500">{message}</span>
      <section className="grid grid-cols-1 gap-y-5">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input_
            name="nama"
            type="text"
            label="Nama CB"
            value={formData.nama}
            onChange={handleChange}
            required
          />
          <Input_
            name="namaLain"
            type="text"
            label="Nama Lain"
            value={formData.namaLain}
            onChange={handleChange}
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input_
            name="koordx"
            type="text"
            label="Koordinat X"
            value={formData.koordx}
            onChange={handleChange}
          />
          <Input_
            name="koordy"
            type="text"
            label="Koordinat Y"
            value={formData.koordy}
            onChange={handleChange}
          />
        </section>
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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
