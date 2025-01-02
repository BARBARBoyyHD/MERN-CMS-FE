import React from "react";
import EditContentForm from "../component/content/EditContentForm";
import NavbarAdmin from "../component/navbar/NavbarAdmin";

const EditContentPages = () => {
  return (
    <div>
      <header>
        <NavbarAdmin />
      </header>
      <div className="mt-[74px]">
        <EditContentForm />
      </div>
    </div>
  );
};

export default EditContentPages;
