import {Link} from "react-router-dom";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse justify-center items-center md:flex-row md:justify-between h-12 md:h-16 px-3 md:px-10 border-t-2">
      <h3 className="text-xs md:text-base">
        BPK23 © Balai Pelestarian Kebudayaan Wilayah XXIII
      </h3>
      <section className="flex gap-x-4 text-lg md:text-2xl">
        <Link to="/" className="hover:text-400 duration-300 ease-in-out">
          <FaFacebook />
        </Link>
        <Link to="/" className="hover:text-400 duration-300 ease-in-out">
          <FaInstagram />
        </Link>
        <Link to="/" className="hover:text-400 duration-300 ease-in-out">
          <FaTwitter />
        </Link>
      </section>
    </footer>
  );
}
