import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../redux";
import LoadingSpinner from "../loading/LoadingSpinner";
import { Link } from "react-router-dom";
import DeleteContent from "../button/DeleteContent";

const ShowAllContent = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.getContent);

  const [displayedData, setDisplayedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const itemsPerPage = 10; // Adjust this to control how many items load at a time

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  useEffect(() => {
    if (data?.data) {
      // Load the first batch of items
      const initialData = data.data.slice(0, itemsPerPage);
      setDisplayedData(initialData);
    }
  }, [data]);

  const loadMoreData = () => {
    if (!data?.data) return;

    setIsFetching(true);
    const nextPage = currentPage + 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newItems = data.data.slice(startIndex, endIndex);

    // Append new items to the displayed data
    setDisplayedData((prev) => [...prev, ...newItems]);
    setCurrentPage(nextPage);
    setIsFetching(false);
  };
  // Detect when the user scrolls to the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, data]);

  return (
    <div className="min-h-screen p-5">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      )}
      {error && (
        <p className="text-center text-lg text-red-500">Error: {error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.namaKarya}
            </h3>
            <p className="text-gray-600">
              <strong>Status:</strong> {item.status}
            </p>
            <p className="text-gray-600">
              <strong>No. Registrasi:</strong> {item.noRegistrasi}
            </p>
            <p className="text-gray-600">
              <strong>No. SK Instansi:</strong> {item.noSKinstansi}
            </p>
            <p className="text-gray-600">
              <strong>Usia Karya:</strong> {item.usiaKarya} tahun
            </p>
            <p className="text-gray-600">
              <strong>Objek Terkait:</strong> {item.objekTerkait}
            </p>
            <p className="text-gray-600">
              <strong>Unsur Pemajuan:</strong> {item.unsurPemajuan}
            </p>
            <p className="text-gray-600">
              <strong>Lokasi:</strong> {item.lokasi}
            </p>
            <div className="flex justify-between items-center p-3">
              <p className="text-gray-500 italic text-sm ">
                <strong>Created At:</strong> {item.created_at}
              </p>
              <div className="flex space-x-4 text-sm">
                <Link item_id = {item.id} to={`/pages/edit/content/${item.id}`}className="text-blue-500 hover:underline">Edit</Link>
               <DeleteContent item_id={item.id}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isFetching && (
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default ShowAllContent;
