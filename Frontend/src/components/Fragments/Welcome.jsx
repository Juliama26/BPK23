import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {motion, useAnimation} from "framer-motion";
import {AiOutlineDatabase, AiOutlineContainer} from "react-icons/ai";

export default function Welcome() {
  const [cbCount, setCbCount] = useState(0);
  const [opkCount, setOpkCount] = useState(0);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();

  const cbControls = useAnimation();
  const opkControls = useAnimation();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BE_URL}/auth/whoami`
      );
      const decoded = jwtDecode(response.data.accessToken);
      setToken(response.data.accessToken);
      setFullName(decoded.name);
      setExpired(decoded.exp);
      setRole(decoded.role);
      setImage(decoded.imageUrl);
    } catch (err) {
      if (err.response) {
        navigate("/user-login");
      }
    }
  };

  useEffect(() => {
    if (token) {
      const fetchCB = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BE_URL}/public/data-cb`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCbCount(response.data.length);
          cbControls.start({count: response.data.length});
        } catch (err) {
          console.error("Error fetching CB data:", err);
        }
      };
      fetchCB();
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      const fetchOPK = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BE_URL}/public/data-opk`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setOpkCount(response.data.length);
          opkControls.start({count: response.data.length});
        } catch (err) {
          console.error("Error fetching OPK data:", err);
        }
      };
      fetchOPK();
    }
  }, [token]);

  return (
    <section className="flex flex-col gap-y-16 md:gap-y-32">
      <section className="rounded-lg shadow mx-0 my-3 p-3 md:m-5 md:p-5">
        <motion.section
          className="flex justify-between items-center text-4xl font-bold text-500 mb-4"
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.2}}>
          Hi👋 {fullName}!
          <img src={image} alt="avatar" className="w-12 cursor-pointer" />
        </motion.section>
        <motion.h2
          className="text-2xl font-semibold mb-4 text-950 opacity-80"
          initial={{y: -50}}
          animate={{y: 0}}
          transition={{duration: 0.2}}>
          Selamat Datang di Sistem Pendataan
        </motion.h2>
        <motion.h2
          className="text-xl font-semibold mb-4 text-950 opacity-50"
          initial={{y: -50}}
          animate={{y: 0}}
          transition={{duration: 0.2}}>
          Balai Pelestarian Kebudayaan Wilayah Kerja XXIII
        </motion.h2>
      </section>
      <section className="flex items-center gap-x-10 md:p-5">
        {(role === "Admin" || role === "CB") && (
          <motion.section
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.2}}
            className="w-full flex flex-col items-center gap-y-2 p-5 rounded-lg bg-950/85">
            <h3 className="text-2xl font-semibold text-50">CB</h3>
            <span className="text-2xl font-semibold text-50">
              <AiOutlineDatabase className="inline-block mr-2" /> {cbCount}
            </span>
          </motion.section>
        )}
        {(role === "Admin" || role === "OPK") && (
          <motion.section
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.2}}
            className="w-full flex flex-col items-center gap-y-2 p-5 rounded-lg bg-950/85">
            <h3 className="text-2xl font-semibold text-50">OPK</h3>
            <span className="text-2xl font-semibold text-50">
              <AiOutlineContainer className="inline-block mr-2" /> {opkCount}
            </span>
          </motion.section>
        )}
      </section>
    </section>
  );
}
