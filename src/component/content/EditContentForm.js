import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleContent } from "../../redux";

const EditContentForm = () => {
  const dispatch = useDispatch();
  const { id: item_id } = useParams(); // Get item_id from the route
  const { loading, error, data } = useSelector((state) => state.singleContent);

  useEffect(() => {
    if (item_id) {
      dispatch(singleContent(item_id));
    }
  }, [dispatch, item_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Edit Content</h1>
      <p>{JSON.stringify(data)}</p>
      {/* Add form fields for editing here */}
    </div>
  );
};

export default EditContentForm;
