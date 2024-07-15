import {Link} from "react-router-dom";
import {HiOutlinePlus, HiOutlineDownload} from "react-icons/hi";
import {Button} from "@material-tailwind/react";

const Button_ = (props) => {
  const {title = "Click Here!", type, onClick, className} = props;
  return (
    <Button
      type={type}
      onClick={onClick}
      size="sm"
      className={`${className} capitalize text-sm bg-500 rounded-md`}>
      {title}
    </Button>
  );
};

const Excel = (props) => {
  const {title = "Click Here!", type, onClick} = props;
  return (
    <Button
      type={type}
      onClick={onClick}
      size="sm"
      className="capitalize text-sm bg-500 rounded-md">
      <span className="hidden md:inline">{title}</span>
      <HiOutlineDownload className="w-full text-center text-lg md:hidden" />
    </Button>
  );
};

const Tambah = () => {
  return (
    <Button className="capitalize py-2 px-3 text-sm bg-500 rounded-md">
      <Link to="tambah" className="flex items-center justify-center">
        <HiOutlinePlus className="text-base" />
        Tambah
      </Link>
    </Button>
  );
};
export {Button_, Excel, Tambah};
