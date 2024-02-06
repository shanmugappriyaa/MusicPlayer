import React from "react";
import { BsFileEarmarkMusic } from "react-icons/bs";
import { MusicNoteList } from "react-bootstrap-icons";

function Menu({ isSongs, setIsSongs }) {
  return (
    <div className="menu">
      <div
        className={`d-flex menu-item ${isSongs && "active"}`}
        onClick={() => setIsSongs(true)}
      >
        <BsFileEarmarkMusic />
        <span>Songs</span>
      </div>
      <div
        className={`d-flex menu-item ${!isSongs && "active"}`}
        onClick={() => setIsSongs(false)}
      >
        <MusicNoteList />
        <span>Playlist</span>
      </div>
    </div>
  );
}

export default Menu;
