import axios from "axios";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {useNavigate, useParams} from "react-router-dom";

export default function DetailDataOPK() {
  const [data, setData] = useState({});
  const [active, setActive] = useState("");
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

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `http://localhost:3071/data-opk/${id}`,
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

  const opkId = data.opkCategory ? data.opkCategory.id : "";

  const renderFieldById = () => {
    switch (opkId) {
      case 1:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Jenis Tradisi Lisan:
              </h2>
              <p>{data.jenis}</p>
            </section>
          </>
        );
      case 2:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Bahasa yang digunakan:
              </h2>
              <p>{data.bahasa}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Pencipta manuskrip:
              </h2>
              <p>{data.pencipta}</p>
            </section>
          </>
        );
      case 3:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Jenis Adat Istiadat:
              </h2>
              <p>{data.jenis}</p>
            </section>
          </>
        );
      case 4:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Jenis Ritus:
              </h2>
              <p>{data.jenis}</p>
            </section>
          </>
        );
      case 5:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Jenis Seni:
              </h2>
              <p>{data.jenis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Fungsi OPK:
              </h2>
              <p>{data.jenis}</p>
            </section>
          </>
        );
      case 6:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Aksara yang digunakan:
              </h2>
              <p>{data.aksara}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Dialek yang digunakan:
              </h2>
              <p>{data.dialek}</p>
            </section>
          </>
        );
      case 7:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Fungsi OPK:
              </h2>
              <p>{data.fungsi}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Bahan yang digunakan:
              </h2>
              <p>{data.bahan}</p>
            </section>
          </>
        );
      case 8:
      case 9:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Jumlah Pemain:
              </h2>
              <p>{data.jml_pemain}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Perlengkapan:
              </h2>
              <p>{data.perlengkapan}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Nilai Moral:
              </h2>
              <p>{data.nilai_moral}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Aturan:
              </h2>
              <p>{data.aturan}</p>
            </section>
          </>
        );
      case 10:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Kegunaan OPK:
              </h2>
              <p>{data.kegunaan}</p>
            </section>
          </>
        );
      default:
        return (
          <>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Etnis yang melakukan:
              </h2>
              <p>{data.etnis}</p>
            </section>
            <section>
              <h2 className="text-base md:text-xl font-semibold text-900">
                Fungsi OPK:
              </h2>
              <p>{data.fungsi}</p>
            </section>
          </>
        );
    }
  };

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

        {/* render item by id */}
        {renderFieldById()}
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
        <section
          className={`flex flex-col gap-y-3 md:gap-y-5 ${
            opkId === 1 || opkId === 3 || opkId === 5 || opkId === 6
              ? "hidden"
              : "block"
          }`}>
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
        </section>
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
          <p>{data.documenUrl}</p>
        </span>
      </section>
    </section>
  );
}
