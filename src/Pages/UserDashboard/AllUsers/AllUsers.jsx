import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxios/UseAxios";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  // const jToken = localStorage.getItem("accessToken");
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log("res is ", res);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            `You made ${user.name} Admin!`,
            "You clicked the button!",
            "success"
          );
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("User Deleted", "You clicked the button!", "success");
          refetch();
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | All Users</title>
      </Helmet>
      <div>
        <SectionTitle
          subHeading={"---How Many?---"}
          Heading={"Manage All Users"}
        />

        {/* USERS TABLE */}

        <div className="">
          <div className="overflow-x-auto">
            <table className="table text-center mx-auto">
              <thead>
                <tr>
                  <th>S.N.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actiion</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        {user.role === "admin" ? (
                          "Admin"
                        ) : (
                          <button
                            className="btn btn-outline"
                            onClick={() => handleMakeAdmin(user)}
                          >
                            <FaUserShield className="text-2xl text-orange-400"></FaUserShield>
                          </button>
                        )}
                      </td>
                      <td>
                        <img
                          onClick={() => handleDelete(user._id)}
                          className="w-6 h-6 cursor-pointer mx-auto"
                          src="https://i.ibb.co/CvT5nks/delete.png"
                          alt="delete-item"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
