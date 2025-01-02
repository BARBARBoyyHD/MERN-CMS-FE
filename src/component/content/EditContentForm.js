import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { singleContent, editContent } from "../../redux";
import LoadingSpinner from "../loading/LoadingSpinner";

const EditContentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: item_id } = useParams(); // Get item_id from the route
  const {
    loading: loadingContent,
    error: errorContent,
    data: singleContentData,
  } = useSelector((state) => state.singleContent);
  const {
    loading: editLoading,
    error: editError,
    data: editData,
  } = useSelector((state) => state.editContent);

  const objekTerkaitOptions = [
    "Tradisi lisan",
    "Adat istiadat",
    "Olahraga tradisional",
    "Pengetahuan tradisional",
    "Bahasa",
    "Bangunan CB",
    "Kawasan CB",
    "Benda CB",
    "Manuskrip",
    "Permainan rakyat",
    "Seni",
    "Teknologi tradisional",
    "Ritus",
    "Situs CB",
    "Struktur CB",
  ];

  const unsurPemajuanOptions = [
    "Merupakan identitas daerah dan budaya",
    "Memiliki nilai penguatan jati diri bangsa",
    "Memiliki nilai pelestarian lingkungan",
    "Memberikan dampak sosial ekonomi, dan budaya",
    "Mendukung pembangunan budaya berkelanjutan",
  ];

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

  // Fetch the single content when the component mounts or when item_id changes
  useEffect(() => {
    if (item_id) {
      dispatch(singleContent(item_id));
    }
  }, [dispatch, item_id]);

  // Populate the form with the fetched data when singleContentData is available
  useEffect(() => {
    if (
      singleContentData &&
      singleContentData.data &&
      singleContentData.data.length > 0
    ) {
      const content = singleContentData.data[0]; // Access the first item in the array
      console.log("Fetched Data:", content); // Debugging

      // Parse objekTerkait and unsurPemajuan from JSON strings to arrays
      const objekTerkait = JSON.parse(content.objekTerkait || "[]");
      const unsurPemajuan = JSON.parse(content.unsurPemajuan || "[]");

      setForm({
        namaKarya: content.namaKarya || "",
        status: content.status || "",
        noRegistrasi: content.noRegistrasi || "",
        noSKinstansi: content.noSKinstansi || "",
        usiaKarya: content.usiaKarya || 0,
        objekTerkait: objekTerkait,
        unsurPemajuan: unsurPemajuan,
        lokasi: content.lokasi || "",
      });
      console.log("Form State Updated:", form); // Debugging
    }
  }, [singleContentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setForm((prevForm) => {
      const updatedValues = checked
        ? [...prevForm[name], value] // Add to array if checked
        : prevForm[name].filter((item) => item !== value); // Remove if unchecked
      return {
        ...prevForm,
        [name]: updatedValues,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      namaKarya: form.namaKarya,
      status: form.status,
      noRegistrasi: form.noRegistrasi,
      noSKinstansi: form.noSKinstansi,
      usiaKarya: form.usiaKarya,
      objekTerkait: form.objekTerkait, // Ensure this is an array
      unsurPemajuan: form.unsurPemajuan, // Ensure this is an array
      lokasi: form.lokasi,
    };

    console.log("Payload to dispatch:", payload); // Debugging
    dispatch(editContent(item_id, payload));
    navigate("/pages/dashboard");
  };

  if (loadingContent)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  if (errorContent) return <div>Error: {errorContent.message}</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Edit Kebudayaan</h1>

      {editLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      )}
      {editError && (
        <p className="text-red-500">
          Error:{" "}
          {typeof editError === "string"
            ? editError
            : editError.message || "An error occurred"}
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
            <input
              type="radio"
              name="status"
              value="Tercatat"
              checked={form.status === "Tercatat"}
              onChange={handleChange}
            />
            <label>Tercatat</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="status"
              value="Ditetapkan"
              checked={form.status === "Ditetapkan"}
              onChange={handleChange}
            />
            <label>Ditetapkan</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="status"
              value="Belum Tercatat"
              checked={form.status === "Belum Tercatat"}
              onChange={handleChange}
            />
            <label>Belum Tercatat</label>
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
          {objekTerkaitOptions.map((option) => (
            <div key={option} className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="objekTerkait"
                value={option}
                onChange={handleCheckboxChange}
                checked={form.objekTerkait.includes(option)}
                className="mr-2"
              />
              <label>{option}</label>
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="unsurPemajuan" className="block text-sm font-medium">
            Unsur Pemajuan
          </label>
          {unsurPemajuanOptions.map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                type="checkbox"
                name="unsurPemajuan"
                value={option}
                onChange={handleCheckboxChange}
                checked={form.unsurPemajuan.includes(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
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

export default EditContentForm;
