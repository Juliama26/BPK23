import React from "react";
import Pendataan from "../../../components/Layouts/Pendataan/Pendataan";
import FormUpdatePengetahuan from "../../../components/Fragments/Pendataan/OPK/FormUpdatePengetahuan";

export default function UpdatePengetahuan() {
  return (
    <Pendataan>
      <FormUpdatePengetahuan title="Ubah Data" />
    </Pendataan>
  );
}
