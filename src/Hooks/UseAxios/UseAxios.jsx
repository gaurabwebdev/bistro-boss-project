import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const jToken = localStorage.getItem("accessToken");
      if (jToken) {
        config.headers.Authorization = `Bearer ${jToken}`;
      }

      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, [axiosSecure, logOut, navigate]);
  return [axiosSecure];
};

export default useAxiosSecure;
