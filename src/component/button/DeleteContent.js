import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContent } from "../../redux";
const DeleteContent = ({item_id}) => {
  const { loading, data, error } = useSelector((state) => state.deleteContent);
  const dispatch = useDispatch()

    const handleDelete = (id)=>{
        dispatch(deleteContent(id))
        window.location.reload()
    }

  return <button onClick={()=> handleDelete(item_id)} className="text-red-500 hover:underline">Delete</button>;
};

export default DeleteContent;
