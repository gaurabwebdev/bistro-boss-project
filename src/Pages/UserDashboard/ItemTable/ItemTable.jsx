import React from "react";
import useMenu from "../../../Hooks/UseMenu/UseMenu";
import useAxiosSecure from "../../../Hooks/UseAxios/UseAxios";
import Swal from "sweetalert2";

const ItemTable = () => {
  const [refetch, menu] = useMenu();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (recipeId) => {
    axiosSecure
      .delete(`/menu/${recipeId}`)
      .then((data) => {
        console.log(data);
        if (data.data.deletedCount > 0) {
          refetch();
          Swal.fire("Item Deleted", "You clicked the button!", "success");
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Food Image</th>
            <th>Recipe Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {menu &&
            menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={item.image}
                    alt="recipe image"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <div className="flex justify-center items-center gap-2">
                    <img
                      className="w-6 h-6 cursor-pointer"
                      src="https://i.ibb.co/wLzNPGN/edit.png"
                      alt="delete-item"
                    />
                    <img
                      onClick={() => handleDelete(item._id)}
                      className="w-6 h-6 cursor-pointer"
                      src="https://i.ibb.co/CvT5nks/delete.png"
                      alt="delete-item"
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Total Products : {menu.length}</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ItemTable;
