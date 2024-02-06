import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { add } from "../redux/reducer/list";
import { useDispatch, useSelector } from "react-redux";
function UploadnewAudio() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const list = useSelector((state) => state.list.value);
  console.log(list);
  let dispatch = useDispatch();
  // const [id, setId] = useState("");
  const [detail, setDetail] = useState({
    title: "Sample",
    artist: "Local",
    artwork: "https://samplesongs.netlify.app/album-arts/faded.jpg",
    url: "",
    id: 199,
  });

  useEffect(() => {
    console.log("list========> ", list);
  }, [list]);
  let navigate = useNavigate();

  const UploadnewAudio = (ev) => {
    ev.preventDefault();
    const id = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    console.log("title,id,artist-->", title, id, artist);
    dispatch(add({ title, artist, id, artwork: "", url }));
    localStorage.setItem(
      id,
      JSON.stringify({ title, artist, id, artwork: "", url })
    );
    // setDetail(title, id, artist);
    navigate("/");
  };
  const handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    let { file } = detail;

    file = e.target.files[0];

    // const fileDetail = {
    //   ...detail,
    //   blobUrl: URL.createObjectURL(file),
    // };
    setUrl(URL.createObjectURL(file));
    // localStorage.setItem("sample", JSON.stringify(fileDetail));
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="d-flex row m-2">
        <div className="d-flex justify-content-center">
          <h3 className="">Upload new Audio </h3>
        </div>

        <div className="d-flex col-6 ">
          <form>
            <div className="row p-2 mb-4">
              <label> Song Title</label>
              <input
                type="text"
                placeholder=" Enter the title"
                className="mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Artist </label>
              <input
                placeholder="enter Artist name"
                className="mb-2"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />

              <label>Audio</label>
              <input
                type="file"
                placeholder="audio link"
                className="mb-2"
                onChange={handleFileInputChange}
              />

              <button
                className="mt-2 btn btn-primary"
                onClick={(e) => UploadnewAudio(e)}
              >
                {" "}
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadnewAudio;
