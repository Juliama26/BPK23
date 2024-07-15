import React from "react";
import Informasi from "../../components/Layouts/Informasi/Informasi";
import Contact_ from "../../components/Fragments/Informasi/Contact_";

export default function Contact() {
  return (
    <Informasi clasName="hidden">
      <Contact_ />
    </Informasi>
  );
}
