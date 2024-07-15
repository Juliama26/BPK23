import axios from "axios";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Kabupaten_} from "../../Elements/Select/Select";
import {Select, Option, Typography, IconButton} from "@material-tailwind/react";
import {motion} from "framer-motion";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";

export default function DataOPK() {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  const [selecCategoryId, setSelecCategoryId] = useState([]);
  const [selectKabupaten, setSelectKabupaten] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const itemsPerPage = 15;

  useEffect(() => {
    axios
      .get(`http://localhost:3071/public/opk`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selecCategoryId !== null) {
      axios
        .get(`http://localhost:3071/public/data-opk/${selecCategoryId}`)
        .then((response) => {
          setList(response.data);
          filterData(selectKabupaten, response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selecCategoryId]);

  const handleKabupaten = (e) => {
    const value = e;
    filterData(value, list);
    setSelectKabupaten(value);
  };

  const handleCategory = (e) => {
    const selectedCategory = category.find((category) => category.title === e);
    setSelecCategoryId(selectedCategory?.id || null);
  };

  const filterData = (kabupatenValue, dataList) => {
    const filter = dataList.filter((item) => {
      return kabupatenValue === "" || item.kabupaten === kabupatenValue;
    });
    setNotFound(filter.length === 0);
    setFilteredList(filter);
    setActivePage(1);
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
    <section className="px-3 md:px-10">
      <section className="grid grid-cols-2 gap-x-3 mb-4 md:mb-6">
        <Select
          color="blue"
          label="Jenis Cagar Budaya"
          onChange={handleCategory}>
          {category.map((item, index) => (
            <Option key={index} value={item.title}>
              {item.title}
            </Option>
          ))}
        </Select>
        <Kabupaten_
          name="kabupaten"
          label="Kabupaten/Kota"
          value={selectKabupaten}
          onChange={handleKabupaten}
        />
      </section>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-28">
        {paginatedData.map(({imageUrl, uuid, nama}, index) => (
          <motion.div
            key={index + 1 + (activePage - 1) * itemsPerPage}
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.1, delay: index * 0.1}}>
            <Link to={`detail/${uuid}`}>
              <figure className="relative w-full h-40">
                <img
                  src={imageUrl[0]}
                  alt="gallery-photo"
                  className="h-full w-full rounded-lg object-cover object-center"
                />
                <motion.figcaption
                  className="absolute bottom-3 py-2 px-3 left-4 flex w-[calc(100%-2rem)] -translate-x-2/4 rounded-lg border border-200 bg-100/75"
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.3, delay: index * 0.1 + 0.3}}>
                  <Typography>{nama}</Typography>
                </motion.figcaption>
              </figure>
            </Link>
          </motion.div>
        ))}
        {notFound && (selecCategoryId !== "" || selectKabupaten !== "") && (
          <div className="col-span-full text-center">Tidak ada data</div>
        )}
      </section>
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
