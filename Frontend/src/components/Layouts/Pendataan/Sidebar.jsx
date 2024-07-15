import axios from "axios";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {useNavigate, Link} from "react-router-dom";

import {
  AiOutlineDashboard,
  AiOutlineDatabase,
  AiOutlineContainer,
  AiOutlineLogout,
} from "react-icons/ai";
import {HiUsers, HiOutlineMinus, HiOutlineChevronDown} from "react-icons/hi";
import {BiCategoryAlt} from "react-icons/bi";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Sidebar() {
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
    <Card className="max-w-[15rem] min-h-screen sticky top-0 rounded-none hidden md:block">
      <figure className="flex flex-col items-center gap-y-2 py-3 sticky top-0 z-[3] bg-50">
        <img src="../../../../image/logo.png" alt="Logo..." width={125} />
        <span className="text-3xl font-semibold text-950">BPK XXIII</span>
      </figure>
      <hr className=" border mb-5" />
      <List className="overflow-y-auto">
        <Link to={"/dashboard"}>
          <ListItem className="text-950">
            <ListItemPrefix>
              <AiOutlineDashboard className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>

        {userRole === "Admin" && (
          <>
            <Link to={"/manage/users"}>
              <ListItem className="text-950">
                <ListItemPrefix>
                  <HiUsers className="h-5 w-5" />
                </ListItemPrefix>
                Users
              </ListItem>
            </Link>
            <Link to={"/manage/category"}>
              <ListItem className="text-950">
                <ListItemPrefix>
                  <BiCategoryAlt className="h-5 w-5" />
                </ListItemPrefix>
                Category
              </ListItem>
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
          {(userRole === "Admin" || userRole === "CB") && (
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3">
                <ListItemPrefix>
                  <AiOutlineDatabase className="h-5 w-5" />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal text-950">
                  CB
                </Typography>
              </AccordionHeader>
            </ListItem>
          )}
          <AccordionBody className="py-1">
            <List className="p-0">
              {cb.map((item, index) => (
                <Link to={`/pendataan-cb/${item.id}`} key={index}>
                  <ListItem className="max-w-[14rem] pl-7">
                    <HiOutlineMinus className="h-3 w-5" />
                    {item.title}
                  </ListItem>
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
          {(userRole === "Admin" || userRole === "OPK") && (
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3">
                <ListItemPrefix>
                  <AiOutlineContainer className="h-5 w-5" />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal text-950">
                  OPK
                </Typography>
              </AccordionHeader>
            </ListItem>
          )}
          <AccordionBody className="py-1">
            <List className="p-0">
              {opk.map((item, index) => {
                return (
                  <Link to={`/pendataan-opk/${item.id}`} key={index}>
                    <ListItem className="max-w-[14rem] pl-7">
                      <HiOutlineMinus className="h-3 w-5" />
                      {item.title}
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-5 border" />
        {/* <Link to="/my-profile">
          <ListItem className="text-950">
            <ListItemPrefix>
              <img src={image} alt="logoku" className="rounded-full h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link> */}
        <ListItem onClick={handleLogout} className="text-950">
          <ListItemPrefix>
            <AiOutlineLogout className="h-5 w-5" />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Card>
  );
}
