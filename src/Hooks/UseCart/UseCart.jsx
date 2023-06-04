import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../UseAxios/UseAxios";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  // const jToken = localStorage.getItem("accessToken");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;

// queryFn: async () => {
//       const res = await fetch(
//         `http://localhost:5000/carts?email=${user?.email}`,
//         {
//           headers: {
//             authorization: `Bearer ${jToken}`,
//           },
//         }
//       );

//       return res.json();
//     },
