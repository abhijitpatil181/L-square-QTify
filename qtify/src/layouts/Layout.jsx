import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { useEffect } from "react";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "../apis/album";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const Layout = () => {
  const [data, setData] = useState({});

  const theme = useTheme();

  const generateData = (key, api) => {
    api().then((data) => {
      setData((prevState) => ({
        ...prevState,
        [key]: data,
      }));
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <Navbar />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
    </>
  );
};

export default Layout;
