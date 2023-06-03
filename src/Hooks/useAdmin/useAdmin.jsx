import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
};

export default useAdmin;
