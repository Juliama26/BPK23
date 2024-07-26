import axios from "axios";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function DetailDataCB() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("");
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

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BE_URL}/data-cb/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setData(response.data);
          setActive(response.data.imageUrl && response.data.imageUrl[0]);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
    };
    fetchData();
  }, [token, id]);

  return (
    <section className="flex flex-col gap-y-5 py-3">
      <section className="flex flex-col md:flex-row md:justify-between md:gap-x-5 px-3 md:px-10 gap-y-3">
        <img
          className="h-40 md:h-64 w-full rounded-lg object-cover object-center"
          src={active}
          alt="gallery-image"
        />
        <section className="flex justify-center gap-x-1 md:flex-col gap-y-1">
          {data.imageUrl &&
            data.imageUrl.map((imageUrl, index) => (
              <img
                key={index}
                onClick={() => setActive(imageUrl)}
                src={imageUrl}
                className="h-10 md:h-16 w-full cursor-pointer rounded-lg object-cover object-center"
                alt={`gallery-image-${index}`}
              />
            ))}
        </section>
      </section>
      <section className="flex flex-col gap-y-3 md:gap-y-5 px-3 md:px-10">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-900">
          {data.nama}
        </h1>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Nama Lain:
          </h2>
          <p>{data.namaLain}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Koordinat X:
          </h2>
          <p>{data.koordx}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Koordinat Y:
          </h2>
          <p>{data.koordy}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Provinsi:
          </h2>
          <p>{data.provinsi}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Kabupaten/Kota:
          </h2>
          <p>{data.kabupaten}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Kecamatan/Distrik:
          </h2>
          <p>{data.kecamatan}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Kelurahan/Desa:
          </h2>
          <p>{data.kelurahan}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Dusun/Kampung:
          </h2>
          <p>{data.dusun}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Deskripsi:
          </h2>
          <p>{data.deskripsi}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Narasumber:
          </h2>
          <p>{data.narasumber}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-900">
            Dokumen Lainnya:
          </h2>
          <Link to={data.documenUrl} target="_blank">
            {data.documenUrl}
          </Link>
        </span>
      </section>
    </section>
  );
}
