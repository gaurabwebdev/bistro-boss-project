import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (category) {
  //         const currentMenu = data.filter((item) => item.category === category);
  //         setMenu(currentMenu);
  //       } else {
  //         setMenu(data);
  //       }
  //       setLoading(false);
  //     });
  // }, [category]);

  const {
    refetch,
    data: menu = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/menu`);
      return res.json();
    },
  });
  return [refetch, menu, loading];
};

export default useMenu;
