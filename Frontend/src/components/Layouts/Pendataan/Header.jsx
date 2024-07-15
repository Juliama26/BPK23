import axios from "axios";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {useNavigate, Link} from "react-router-dom";

import {HiOutlineX, HiOutlineMenu, HiOutlineChevronDown} from "react-icons/hi";

import {
  Card,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const [cb, setCb] = useState([]);
  const [opk, setOpk] = useState([]);

  const [role, setRole] = useState("");
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3071/auth/whoami");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setToken(response.data.accessToken);
      setRole(decoded.role);
      setExpired(decoded.exp);
    } catch (err) {
      if (err.response) {
        navigate("/user-login");
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchDataCb();
      fetchDataOpk();
    }
  }, [token]);

  const fetchDataCb = async () => {
    try {
      const response = await axios.get("http://localhost:3071/public/cb", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCb(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  const fetchDataOpk = async () => {
    try {
      const response = await axios.get("http://localhost:3071/public/opk", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpk(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:3071/auth/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/user-login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const userRole = role;

  return (
    <header className="md:hidden bg-blue-500 h-14 sticky top-0 z-10 ">
      <section className="flex justify-between items-center h-14 bg-500">
        <h1 className="text-lg font-semibold px-3 text-50">BPK XXIII</h1>
        <button
          onClick={() => setMenu(!menu)}
          className=" flex items-center px-3">
          {menu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>
        <nav
          className={`absolute top-12 left-0 right-0 z-[-5] transition-all duration-300 ease-in-out bg-50 ${
            menu ? "opacity-100 translate-y-0 " : "opacity-0 -translate-y-full "
          }`}>
          <Card className="max-w-full min-h-full rounded-none shadow-none">
            <List>
              <Link to={"/dashboard"}>
                <ListItem className="text-950 px-2 py-3">Dashboard</ListItem>
              </Link>
              {userRole === "Admin" && (
                <>
                  <Link to={"/manage/users"}>
                    <ListItem className="text-950 px-2 py-3">Users</ListItem>
                  </Link>
                  <Link to={"/manage/category"}>
                    <ListItem className="text-950 px-2 py-3">Category</ListItem>
                  </Link>
                </>
              )}
              <Accordion
                open={open === 1}
                icon={
                  <HiOutlineChevronDown
                    strokeWidth={2.5}
                    className={`mx-auto h-3 w-3 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }>
                {(role === "Admin" || role === "CB") && (
                  <ListItem className="p-0" selected={open === 1}>
                    <AccordionHeader
                      onClick={() => handleOpen(1)}
                      className="border-b-0 p-2">
                      <Typography className=" font-normal text-950">
                        CB
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                )}
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {cb.map((item, index) => (
                      <Link to={`/pendataan-cb/${item.id}`} key={index}>
                        <ListItem>{item.title}</ListItem>
                      </Link>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={
                  <HiOutlineChevronDown
                    strokeWidth={2.5}
                    className={`mx-auto h-3 w-3 transition-transform ${
                      open === 2 ? "rotate-180" : ""
                    }`}
                  />
                }>
                {(role === "Admin" || role === "OPK") && (
                  <ListItem className="p-0" selected={open === 2}>
                    <AccordionHeader
                      onClick={() => handleOpen(2)}
                      className="border-b-0 p-2">
                      <Typography className=" font-normal text-950">
                        OPK
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                )}
                <AccordionBody className="py-0">
                  <List className="p-0">
                    {opk.map((item, index) => (
                      <Link to={`/pendataan-opk/${item.id}`} key={index}>
                        <ListItem>{item.title}</ListItem>
                      </Link>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
              <hr className="border" />
              {/* <Link to="/my-profile">
                <ListItem className="text-950 p-2">Profile</ListItem>
              </Link> */}
              <ListItem onClick={handleLogout} className="text-950 p-2">
                Logout
              </ListItem>
            </List>
          </Card>
        </nav>
      </section>
    </header>
  );
}
