import React from "react";
import { PauseFill, PlayFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeSong } from "../redux/reducer/song";
import { MdOutlineAudiotrack } from "react-icons/md";

import { updateLatestPlaying } from "../data";

function Song(props) {
  const song = useSelector((state) => state.song.value);
  const bgClass = props.id == song?.id ? "play-audio-img" : "audio-img";
  const dispatch = useDispatch();

  return (
    <div
      className="song text-center"
      onClick={() => {
        dispatch(changeSong(props));
        updateLatestPlaying(props);
        setTimeout(() => {
          if (song?.id !== props.id) {
            const player = document.getElementById("audio");
            player.load();
            player.play();
          }
        });
      }}
    >
      {/* <img className="audio-img" alt={props.title} src={props.artwork} /> */}
      <div
        className={`d-flex ${bgClass} justify-content-center align-items-center`}
      >
        <MdOutlineAudiotrack className="sample-song-image" />
      </div>
      <div>{props.title}</div>
      {props.id == song.id ? (
        <PauseFill className="play-logo" />
      ) : (
        <PlayFill className="play-logo" />
      )}

      <div>Artist: {props.artist}</div>
    </div>
  );
}

export default Song;
