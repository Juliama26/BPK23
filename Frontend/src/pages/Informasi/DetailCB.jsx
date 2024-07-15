import React from "react";
import Informasi from "../../components/Layouts/Informasi/Informasi";
import DetailCB_ from "../../components/Fragments/Informasi/DetailCB_";

export default function DetailCB() {
  return (
    <Informasi clasName="hidden">
      <DetailCB_ />
    </Informasi>
  );
}
