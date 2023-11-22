import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import {
  HomeIcon,
  UsersIcon,
  PowerIcon,
  QueueListIcon,
  SquaresPlusIcon,
  ArrowLongRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import logo from "./assets/logo.png";

import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../Features/AuthSlice";

export default function Sidebar() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const userRole = user && user.role;
  return (
    <Card className="min-h-screen w-full max-w-[14rem] font-romans text-secondary shadow-lg shadow-tertiary rounded-none">
      <div className="flex items-center gap-2 px-5 pt-2">
        <NavLink to={"/dashboard"}>
          <img src={logo} alt="logo" className="w-14" />
        </NavLink>
        <NavLink to={"/dashboard"} className="text-3xl font-bold">
          BPK23
        </NavLink>
      </div>
      <p className="px-5 text-sm">Balai Pelestarian Kebudayaan Wilayah XXIII</p>
      <hr className=" border-tertiary" />
      <List className="mb-10 mt-2 text-secondary font-romans text-xl">
        <NavLink to={"/dashboard"}>
          <ListItem className="w-52">
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </NavLink>
        {userRole === "Admin" && (
          <NavLink to={"/users"}>
            <ListItem className="w-52">
              <ListItemPrefix>
                <UsersIcon className="h-5 w-5" />
              </ListItemPrefix>
              Users
            </ListItem>
          </NavLink>
        )}
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0 w-52" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <QueueListIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-romans text-xl"
              >
                Data CB
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List>
              <NavLink to={"/benda"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Benda
                </ListItem>
              </NavLink>
              <NavLink to={"/bangunan"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Bangunan
                </ListItem>
              </NavLink>
              <NavLink to={"/struktur"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Struktur
                </ListItem>
              </NavLink>
              <NavLink to={"/situs"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Situs
                </ListItem>
              </NavLink>
              <NavLink to={"/kawasan"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Kawasan
                </ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0 w-52" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <SquaresPlusIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-romans text-xl"
              >
                Data OPK
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List>
              <NavLink to={"/tradisi"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Tradisi Lisan
                </ListItem>
              </NavLink>
              <NavLink to={"/manuskrip"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Manuskrip
                </ListItem>
              </NavLink>
              <NavLink to={"/adat"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Adat Istiadat
                </ListItem>
              </NavLink>
              <NavLink to={"/ritus"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Ritus
                </ListItem>
              </NavLink>
              <NavLink to={"/seni"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Seni
                </ListItem>
              </NavLink>
              <NavLink to={"/bahasa"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Bahasa
                </ListItem>
              </NavLink>
              <NavLink to={"/teknologi"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Teknologi Tradisional
                </ListItem>
              </NavLink>
              <NavLink to={"/permainan"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Permainan Rakyat
                </ListItem>
              </NavLink>
              <NavLink to={"/olahraga"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Olahraga Tradisional
                </ListItem>
              </NavLink>
              <NavLink to={"/pengetahuan"}>
                <ListItem className="w-48">
                  <ListItemPrefix>
                    <ArrowLongRightIcon className="h-3 w-3" />
                  </ListItemPrefix>
                  Pengetahuan Tradisional
                </ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem onClick={logout} className="mt-5 w-52">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Card>
  );
}
