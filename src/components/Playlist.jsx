import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";
import { PlayList } from "../data";
import { changeList } from "../redux/reducer/list";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";

function Playlist({ search }) {
  const [isPlaylist, setIsPlayList] = useState(true);
  const [playlist, setPlayList] = useState({});
  const list = useSelector((state) => state.list.value);
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-wrap songs">
      {isPlaylist ? (
        PlayList.filter((data) =>
          data.title.toLowerCase().includes(search.toLowerCase())
        ).map((item) => (
          <div
            className="song  text-center"
            onClick={() => {
              setPlayList(item);
              setIsPlayList(false);
              dispatch(changeList(item.songs));
            }}
          >
            <img className="audio-img" alt={item.title} src={item.imgUrl} />
            <div>{item.title}</div>
          </div>
        ))
      ) : (
        <div>
          <div className="playlist-header">
            <ArrowLeftCircleFill onClick={() => setPlayList(true)} />
            {playlist.title}
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {list
              .filter((data) =>
                data.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <Song {...item} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Playlist;
