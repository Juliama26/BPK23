import Seni from "../models/seniModel.js";
import User from "../models/usersModel.js";

export const getAllSeni = async (req, res) => {
  try {
    const response = await Seni.findAll({
      include: User,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSeniId = async (req, res) => {
  try {
    const response = await Seni.findOne({
      where: { uuid: req.params.id },
      include: User,
    });
    if (!response)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSeni = async (req, res) => {
  const {
    nama,
    namalain,
    provinsi,
    kota,
    kecamatan,
    desa,
    dusun,
    koordx,
    koordy,
    deskripsi,
    narasumber,
    fotoPath,
    sertiPath,
  } = req.body;
  try {
    await Seni.create({
      nama: nama,
      namalain: namalain,
      provinsi: provinsi,
      kota: kota,
      kecamatan: kecamatan,
      desa: desa,
      dusun: dusun,
      koordx: koordx,
      koordy: koordy,
      deskripsi: deskripsi,
      narasumber: narasumber,
      fotoPath: fotoPath,
      sertiPath: sertiPath,
      userId: req.userId,
    });
    res.status(201).json({ message: "Data berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSeni = async (req, res) => {
  try {
    const response = await Seni.findOne({
      where: { uuid: req.params.id },
      include: User,
    });
    if (!response)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    const {
      nama,
      namalain,
      provinsi,
      kota,
      kecamatan,
      desa,
      dusun,
      koordx,
      koordy,
      deskripsi,
      narasumber,
      fotoPath,
      sertiPath,
    } = req.body;
    await Seni.update(
      {
        nama: nama,
        namalain: namalain,
        provinsi: provinsi,
        kota: kota,
        kecamatan: kecamatan,
        desa: desa,
        dusun: dusun,
        koordx: koordx,
        koordy: koordy,
        deskripsi: deskripsi,
        narasumber: narasumber,
        fotoPath: fotoPath,
        sertiPath: sertiPath,
      },
      {
        where: { id: response.id },
      }
    );
    res.status(201).json({ message: "Data berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSeni = async (req, res) => {
  const data = await Seni.findOne({
    where: { uuid: req.params.id },
  });
  if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    await data.destroy({
      where: { id: data.id },
    });
    res.status(200).json({ message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
