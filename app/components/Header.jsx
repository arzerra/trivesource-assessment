import React from "react";

function header() {
  return (
    <div className="w-full flex flex-row items-center justify-between p-5 bg-[#C5C7BC]">
      <div className="flex items-center justify-center gap-3">
        <img src="logo.png" alt="Logo" className="w-10" />
        <p>Ian Clark Cañete</p>
      </div>
      <div>
        <h1 className="items-center text-center text-4xl">
          TriveSource - Netlify Assessment
        </h1>
      </div>
      <div>Ian Clark</div>
    </div>
  );
}

export default header;
