import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "../../redux";

const AddContentForm = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.addContent);

  const [form, setForm] = useState({
    namaKarya: "",
    status: "",
    noRegistrasi: "",
    noSKinstansi: "",
    usiaKarya: "",
    objekTerkait: "",
    unsurPemajuan: "",
    lokasi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContent(form));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Add New Content</h1>
      {loading && <p className="text-blue-500">Submitting...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && <p className="text-green-500">Content added successfully!</p>}

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
          <input
            type="text"
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
          />
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

        <div>
          <label htmlFor="objekTerkait" className="block text-sm font-medium">
            Objek Terkait
          </label>
          <input
            type="text"
            id="objekTerkait"
            name="objekTerkait"
            value={form.objekTerkait}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="unsurPemajuan" className="block text-sm font-medium">
            Unsur Pemajuan
          </label>
          <input
            type="text"
            id="unsurPemajuan"
            name="unsurPemajuan"
            value={form.unsurPemajuan}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
          />
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
