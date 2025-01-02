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
        <h1>this is edit content</h1>
        <EditContentForm />
      </div>
    </div>
  );
};

export default EditContentPages;
