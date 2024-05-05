import axios from "axios";

export const fetchTopAlbums = async () => {
  // const config = {
  //   url: "https://qtify-backend-labs.crio.do/albums/top",
  //   method: "GET",
  // };
  // return await axios(config).data;

  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/new"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/songs"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
