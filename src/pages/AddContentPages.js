import React from "react";
import NavbarAdmin from "../component/navbar/NavbarAdmin";
import AddContentForm from "../component/content/AddContentForm";

const AddContentPages = () => {
  return (
    <div>
      <header>
        <NavbarAdmin />
      </header>
      <div className="mt-[70px]">
        <AddContentForm/>
      </div>
    </div>
  );
};

export default AddContentPages;
