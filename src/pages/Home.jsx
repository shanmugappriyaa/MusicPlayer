import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { MusicList } from "../data";
import Song from "../components/Song";
import Playlist from "../components/Playlist";
import { useSelector } from "react-redux";
import Player from "../components/Player";
import { useNavigate } from "react-router-dom";
function Home() {
  const [isSongs, setIsSongs] = useState(true);
  // const [musicList, setMusicList] = useState([...MusicList]);
  const musicList = useSelector((state) => state.list.value);
  const song = useSelector((state) => state.song.value);

  let navigate = useNavigate();
  // useEffect(() => {
  //   const sample = localStorage.getItem("sample");
  //   const localData = JSON.parse(sample);
  //   musicList.unshift(localData);
  //   setMusicList([...musicList]);
  // }, []);

  const [search, setSearch] = useState("");
  return (
    <div className="home">
      <h3 className=" header text-center"> Music Player</h3>
      <div className="d-flex justify-content-center mt-3">
        <div className="col-3">
          <input
            type="search"
            placeholder="Search"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn btn-primary ms-3" onClick={() => navigate("/create")}>
          upload a new song
        </button>
      </div>
      <div className="d-flex content mt-5">
        <Menu isSongs={isSongs} setIsSongs={setIsSongs} />
        <div style={{ flex: 1 }}>
          {isSongs ? (
            <div className="d-flex flex-wrap songs justify-content-center">
              {musicList
                .filter((data) =>
                  data.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => (
                  <Song {...item} />
                ))}
            </div>
          ) : (
            <Playlist search={search} />
          )}
        </div>
      </div>
      {song && <Player />}
    </div>
  );
}

export default Home;
