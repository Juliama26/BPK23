import {useState} from "react";
import {Link} from "react-router-dom";
import {HiOutlineX, HiOutlineMenu} from "react-icons/hi";

const items = [
  {name: "Home", link: "/"},
  {name: "CB", link: "/data-cb"},
  {name: "OPK", link: "/data-opk"},
  {name: "Contact", link: "/contact"},
];
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center h-14 md:h-20 px-3 md:px-10 sticky top-0 z-[5] bg-50 shadow">
      <Link to="/">
        <figure className="flex items-center gap-x-1">
          <img
            src="/image/logo.png"
            alt="logo!"
            width={70}
            className="hidden md:block"
          />
          <figcaption className="flex flex-col -space-y-1">
            <h2 className="text-2xl md:text-3xl font-semibold">BPK23</h2>
            <span className="hidden lg:block text-sm italic">
              Balai Pelestarian Kebudayaan Wilayah XXIII
            </span>
            <span className="hidden lg:block text-sm italic">
              Papua Barat dan Papua Barat Daya
            </span>
          </figcaption>
        </figure>
      </Link>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center">
        {open ? (
          <HiOutlineX className="text-xl" />
        ) : (
          <HiOutlineMenu className="text-xl" />
        )}
      </button>
      <ul
        className={`absolute md:relative w-full md:w-auto top-14 md:top-0 left-0 right-0 pb-5 md:pb-0 md:flex md:justify-between md:items-center z-[-1] md:z-0 transition-all duration-300 ease-in-out bg-white ${
          open
            ? "opacity-100 md:opacity-0 translate-y-0 md:-translate-y-full"
            : "opacity-0 md:opacity-100 -translate-y-full md:translate-y-0"
        }`}>
        {items.map((item, index) => (
          <li
            key={index}
            className="px-3 md:px-5 md:text-lg py-2 hover:text-sky-500 duration-300 ease-in-out">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        <Link
          to="/user-login"
          className="md:hidden px-3 underline hover:text-sky-500 duration-300 ease-in-out">
          Login
        </Link>
      </ul>
      <Link
        to="/user-login"
        // to="/dashboard"
        className="hidden md:block text-lg underline hover:text-sky-500 duration-300 ease-in-out">
        Login
      </Link>
    </header>
  );
}
