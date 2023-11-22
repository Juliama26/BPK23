import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full p-3 bg-tertiary shadow-lg">
      <Typography className="text-center text-secondary font-romans font-normal text-sm">
        &copy; Balai Pelestarian Kebudayaan Wilayah XXIII
      </Typography>
    </footer>
  );
}
