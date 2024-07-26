import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Carousel} from "@material-tailwind/react";

export default function DetailCB_() {
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BE_URL}/public/opk-id/${id}`
      );
      setData(response.data);
    };
    fetchData();
  }, [id]);

  const sendId = data.categoryId;

  const renderFieldId = () => {
    switch (sendId) {
      case 1:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Jenis Tradisi Lisan
              </h2>
              <p>{data.jenis}</p>
            </span>
          </>
        );
      case 2:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Bahasa yang digunakan
              </h2>
              <p>{data.bahasa}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Pencipta manuskrip
              </h2>
              <p>{data.pencipta}</p>
            </span>
          </>
        );
      case 3:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Jenis Adat Istiadat
              </h2>
              <p>{data.jenis}</p>
            </span>
          </>
        );
      case 4:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Jenis Ritus
              </h2>
              <p>{data.jenis}</p>
            </span>
          </>
        );
      case 5:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Jenis Seni
              </h2>
              <p>{data.jenis}</p>
            </span>
          </>
        );
      case 6:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Aksara yang digunakan
              </h2>
              <p>{data.aksara}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Dialek yang digunakan
              </h2>
              <p>{data.dialek}</p>
            </span>
          </>
        );
      case 7:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Fungsi OPK
              </h2>
              <p>{data.fungsi}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Bahan yang digunakan
              </h2>
              <p>{data.bahan}</p>
            </span>
          </>
        );
      case 8:
      case 9:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Jumlah Pemain
              </h2>
              <p>{data.jml_pemain}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Perlengkapan
              </h2>
              <p>{data.perlengkapan}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Nilai Moral
              </h2>
              <p>{data.nilai_moral}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Aturan
              </h2>
              <p>{data.aturan}</p>
            </span>
          </>
        );
      case 10:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Kegunaan OPK
              </h2>
              <p>{data.kegunaan}</p>
            </span>
          </>
        );
      default:
        return (
          <>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Etnis yang melakukan
              </h2>
              <p>{data.etnis}</p>
            </span>
            <span>
              <h2 className="text-base md:text-xl font-semibold text-950">
                Fungsi OPK
              </h2>
              <p>{data.fungsi}</p>
            </span>
          </>
        );
    }
  };

  return (
    <section className="min-h-screen p-3 md:px-10 md:py-5">
      <section className="flex flex-col items-center gap-y-3 md:gap-y-5">
        {data.imageUrl && data.imageUrl.length > 0 ? (
          <Carousel loop={true} autoplay={true} className="w-full md:w-1/2">
            {data.imageUrl.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt="Warisan Budaya Papua"
                className="w-full h-52 md:h-80 rounded-lg object-center"
              />
            ))}
          </Carousel>
        ) : (
          <p>Loading images...</p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-950">
          {data.nama}
        </h1>
      </section>
      <section className="flex flex-col gap-y-5 md:mx-20 mt-8 md:mt-14">
        <span>
          <h2 className="text-base md:text-xl font-semibold text-950">
            Deskripsi:
          </h2>
          <p>{data.deskripsi}</p>
        </span>
        {renderFieldId()}
        <span>
          <h2 className="text-base md:text-xl font-semibold text-950">
            Provinsi:
          </h2>
          <p>{data.provinsi}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-950">
            Kabupaten/Kota:
          </h2>
          <p>{data.kabupaten}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-950">
            Kecamatan/Distrik:
          </h2>
          <p>{data.kecamatan}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-950">
            Kelurahan/Desa:
          </h2>
          <p>{data.kelurahan}</p>
        </span>
        <span>
          <h2 className="text-base md:text-xl font-semibold text-950">
            Dusun/Kampung:
          </h2>
          <p>{data.dusun}</p>
        </span>
      </section>
    </section>
  );
}
