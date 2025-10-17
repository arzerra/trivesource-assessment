import React from "react";

function header() {
  return (
    <div className="w-full flex flex-row items-center justify-center sm:justify-between px-10 py-5 bg-[#C5C7BC]">
      <div className="flex items-center justify-center gap-3">
        <img src="logo.png" alt="Logo" className="w-10" />
        <p className="hidden sm:text-3xl sm:block">Ian Clark Cañete</p>
      </div>
      <div>
        <h1 className="hidden sm:block text-center text-3xl">
          TriveSource - Netlify Assessment
        </h1>
      </div>
    </div>
  );
}

export default header;
