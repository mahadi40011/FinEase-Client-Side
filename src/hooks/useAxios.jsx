import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "https://fin-ease-server-alpha.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
