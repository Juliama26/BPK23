import {Select, Option} from "@material-tailwind/react";
const Role_ = (props) => {
  const {name, value, onChange} = props;
  return (
    <Select
      color="blue"
      label="Pilih Role"
      id={name}
      name={name}
      value={value}
      onChange={onChange}>
      <Option value="Admin">Admin</Option>
      <Option value="CB">CB</Option>
      <Option value="OPK">OPK</Option>
    </Select>
  );
};

const Provinsi_ = (props) => {
  const {name, value, onChange} = props;
  return (
    <Select
      color="blue"
      label="Pilih Provinsi"
      id={name}
      name={name}
      value={value}
      onChange={onChange}>
      <Option value="Papua Barat">Papua Barat</Option>
      <Option value="Papua Barat Daya">Papua Barat Daya</Option>
    </Select>
  );
};

const Kabupaten_ = (props) => {
  const {name, value, onChange} = props;
  return (
    <Select
      color="blue"
      label="Pilih Kabupaten/Kota"
      id={name}
      name={name}
      value={value}
      onChange={onChange}>
      <Option value="Manokwari">Manokwari</Option>
      <Option value="Fak-Fak">Fak-Fak</Option>
      <Option value="Kaimana">Kaimana</Option>
      <Option value="Sorong">Sorong</Option>
      <Option value="Maybrat">Maybrat</Option>
      <Option value="Tambrauw">Tambrauw</Option>
      <Option value="Teluk Bintuni">Teluk Bintuni</Option>
      <Option value="Teluk Wondama">Teluk Wondama</Option>
      <Option value="Manokwari Selatan">Manokwari Selatan</Option>
      <Option value="Pengunungan Arfak">Pengunungan Arfak</Option>
      <Option value="Sorong Selatan">Sorong Selatan</Option>
      <Option value="Raja Ampat">Raja Ampat</Option>
      <Option value="Kota Sorong">Kota Sorong</Option>
    </Select>
  );
};

const JenisCB = (props) => {
  const {name, value, onChange} = props;
  return (
    <Select
      color="blue"
      label="Pilih Cagar Budaya"
      id={name}
      name={name}
      value={value}
      onChange={onChange}>
      <Option value="Benda">Benda</Option>
      <Option value="Bangunan">Bangunan</Option>
      <Option value="Struktur">Struktur</Option>
      <Option value="Situs">Situs</Option>
      <Option value="Kawasan">Kawasan</Option>
    </Select>
  );
};
const JenisOPK = (props) => {
  const {name, value, onChange} = props;
  return (
    <Select
      color="blue"
      label="Pilih Objek Pemajuan Kebudayaan"
      id={name}
      name={name}
      value={value}
      onChange={onChange}>
      <Option value="Tradisi Lisan">Tradisi Lisan</Option>
      <Option value="Manuskrip">Manuskrip</Option>
      <Option value="Adat Istiadat">Adat Istiadat</Option>
      <Option value="Ritus">Ritus</Option>
      <Option value="Seni">Seni</Option>
      <Option value="Bahasa">Bahasa</Option>
      <Option value="Permainan Rakyat">Permainan Rakyat</Option>
      <Option value="Olahraga Tradisional">Olahraga Tradisional</Option>
      <Option value="Teknologi Tradisional">Teknologi Tradisional</Option>
      <Option value="Pengetahuan Tradisional">Pengetahuan Tradisional</Option>
    </Select>
  );
};

export {Role_, Provinsi_, Kabupaten_, JenisCB, JenisOPK};
