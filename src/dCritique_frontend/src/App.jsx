import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UploadFile } from "./Components/UploadFile";
import { Loader } from "./Components/Loader";
import AddConfession from "./Components/AddConfession";
import ConfessionGallery from "./Components/ConfessionGallery";
import Header1 from "./Components/Header1";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header1 />} />
          {/* <Route path="/Header" element={<Header1 />} /> */}
          <Route path="/loader" element={<Loader />} />
          <Route path="/ConfessionGallery" element={<ConfessionGallery />} />
          <Route path="/AddConfession" element={<AddConfession />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
