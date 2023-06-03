import React from "react";
import useCart from "../../../Hooks/UseCart/UseCart";
import Swal from "sweetalert2";

const ProductTable = ({ totalPrice }) => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead className="text-center">
          <tr>
            <th>S.N</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* row 1 */}
          {cart &&
            cart.map((item, index) => (
              <tr key={item._id}>
                <td>
                  <span>{index + 1}</span>
                </td>
                <td>
                  <div>
                    <img
                      className="w-16 h-16 rounded-full mx-auto"
                      src={item.image}
                      alt="food-picture"
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                  </div>
                </td>
                <td>${item.price}</td>
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
          <tr className="text-center">
            <th></th>
            <th></th>
            <th>Total:</th>
            <th>{totalPrice}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductTable;
