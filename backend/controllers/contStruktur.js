import Struktur from "../models/strukturModel.js";
import User from "../models/usersModel.js";

export const getAllStruktur = async (req, res) => {
  try {
    const response = await Struktur.findAll({
      include: User,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStrukturId = async (req, res) => {
  try {
    const response = await Struktur.findOne({
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

export const createStruktur = async (req, res) => {
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
    await Struktur.create({
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

export const updateStruktur = async (req, res) => {
  try {
    const response = await Struktur.findOne({
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
    await Struktur.update(
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

export const deleteStruktur = async (req, res) => {
  const data = await Struktur.findOne({
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
