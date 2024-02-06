import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeSong } from "../redux/reducer/song";
import { MdOutlineAudiotrack } from "react-icons/md";

function Player() {
  const song = useSelector((state) => state.song.value);
  const list = useSelector((state) => state.list.value);

  const dispatch = useDispatch();
  const index = list.findIndex((item) => item.id == song.id);
  const isPrev = () => index > 0 && list.length > 1;
  const isNext = () => index < list.length - 1 && list.length > 1;

  const audioUrl = song?.url ? song.url : song?.blobUrl;

  const reloadMusic = () => {
    const player = document.getElementById("audio");
    player.load();
    player.play();
  };

  return (
    <div className="player">
      <div className="d-flex justify-content-center align-items-center p-2">
        <div className="d-flex sample-for-player justify-content-center align-items-center me-3">
          <MdOutlineAudiotrack className="player-song-image" />
        </div>
        {song.title}
        <div
          className={`player-controls ${!isPrev() && "cursor-disabled"}`}
          onClick={() => {
            if (isPrev()) {
              dispatch(changeSong(list[index - 1]));
              reloadMusic();
            }
          }}
        >
          <ArrowLeft />
        </div>
        <audio id="audio" className="mx-3" controls>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
        <div
          className={`player-controls ${!isNext() && "cursor-disabled"}`}
          onClick={() => {
            if (isNext()) {
              dispatch(changeSong(list[index + 1]));
              reloadMusic();
            }
          }}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Player;
