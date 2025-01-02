import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "../../redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../loading/LoadingSpinner";

const AddContentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.addContent);

  const [form, setForm] = useState({
    namaKarya: "",
    status: "",
    noRegistrasi: "",
    noSKinstansi: "",
    usiaKarya: 0,
    objekTerkait: [],
    unsurPemajuan: [],
    lokasi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setForm((prevForm) => {
      const updatedValues = checked
        ? [...prevForm[name], value]
        : prevForm[name].filter((item) => item !== value);
      return {
        ...prevForm,
        [name]: updatedValues,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      // Send arrays instead of strings
      objekTerkait: form.objekTerkait,
      unsurPemajuan: form.unsurPemajuan,
    };

    console.log("Payload to dispatch:", payload); // Debugging
    navigate("/pages/dashboard");
    dispatch(addContent(payload));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Tambah kebudayaan</h1>
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
        
      )}
      {error && (
        <p className="text-red-500">
          Error:{" "}
          {typeof error === "string"
            ? error
            : error.message || "An error occurred"}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="namaKarya" className="block text-sm font-medium">
            Nama Karya
          </label>
          <input
            type="text"
            id="namaKarya"
            name="namaKarya"
            value={form.namaKarya}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium">
            Status
          </label>
          <div className="flex gap-2">
            <label htmlFor="">Tercatat</label>
            <input
              type="radio"
              name="status"
              id="status"
              value="Tercatat"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="">Ditetapkan</label>
            <input
              type="radio"
              name="status"
              id="status"
              value="Ditetapkan"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="">Belum Tercatat</label>
            <input
              type="radio"
              name="status"
              id="status"
              value="Belum Tercatat"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="noRegistrasi" className="block text-sm font-medium">
            No Registrasi
          </label>
          <input
            type="text"
            id="noRegistrasi"
            name="noRegistrasi"
            value={form.noRegistrasi}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="noSKinstansi" className="block text-sm font-medium">
            No SK Instansi
          </label>
          <input
            type="text"
            id="noSKinstansi"
            name="noSKinstansi"
            value={form.noSKinstansi}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="usiaKarya" className="block text-sm font-medium">
            Usia Karya
          </label>
          <input
            type="number"
            id="usiaKarya"
            name="usiaKarya"
            value={form.usiaKarya}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="objekTerkait" className="block text-sm font-medium">
            Objek Terkait
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex flex-row">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Tradisi lisan"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Tradisi lisan</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Adat istiadat"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Adat istiadat</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Olahraga tradisional"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Olahraga tradisional</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Pengetahuan tradisional"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Pengetahuan tradisional</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Bahasa"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Bahasa</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Bangunan CB"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Bangunan CB</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Kawasan CB"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Kawasan CB</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Benda CB"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Benda CB</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Manuskrip"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Manuskrip</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Permainan rakyat"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Permainan rakyat</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Seni"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Seni</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Teknologi tradisional"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Teknologi tradisional</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Ritus"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Ritus</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Situs CB"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Situs CB</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value="Struktur CB"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label>Struktur CB</label>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="unsurPemajuan" className="block text-sm font-medium">
            Unsur Pemajuan
          </label>
          <div className="mt-2 space-y-1 flex flex-col">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value="Merupakan identitas daerah dan budaya"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Merupakan identitas daerah dan budaya
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value=" Memiliki nilai penguatan jati diri bangsa"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Memiliki nilai penguatan jati diri bangsa
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value="Memiliki nilai pelestarian lingkungan"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Memiliki nilai pelestarian lingkungan
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value="Memberikan dampak sosial ekonomi, dan budaya"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Memberikan dampak sosial ekonomi, dan budaya
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value="Mendukung pembangunan budaya berkelanjutan"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Mendukung pembangunan budaya berkelanjutan
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value="Keberadaan terancam punah"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Keberadaan terancam punah
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value="Rentan terhadap klaim dari negara lain"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Rentan terhadap klaim dari negara lain
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value="Berusia lebih dari 2 generasi atau 50 tahun lebih"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Berusia lebih dari 2 generasi atau 50 tahun lebih
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value="Tidak Bertentangan dengan HAM"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Tidak Bertentangan dengan HAM
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="lokasi" className="block text-sm font-medium">
            Lokasi
          </label>
          <textarea
            id="lokasi"
            name="lokasi"
            value={form.lokasi}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContentForm;
