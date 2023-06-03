import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendar,
  FaHome,
  FaShoppingBag,
  FaBars,
  FaEnvelope,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../../Hooks/UseCart/UseCart";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO:: load data from the server to have dynamic isAdmin based on Data
  const isAdmin = true;
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div>
          <Outlet />
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2 " className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to={"/dashboard/user"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <FaHome className="text-2xl" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/reservation"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <FaUtensils className="text-2xl" />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/payment"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <FaBars className="text-2xl" />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/payment"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <FaBook className="text-2xl" />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/allusers"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <FaUsers className="text-2xl" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/dashboard/user"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <FaHome className="text-2xl" />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/reservation"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <FaCalendar className="text-2xl" />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/mycart"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <div className="flex items-center gap-4">
                    <FaShoppingCart className="text-2xl" />
                    <div className="relative">
                      My Cart
                      <div className="badge badge-secondary absolute -top-2 -right-8 -z-10">
                        +{cart.length || 0}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/payment"}
                  className={`${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                >
                  <FaWallet className="text-2xl" />
                  Payment
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink
              className={`${({ isActive }) => {
                isActive ? "active" : "";
              }}`}
              to={"/"}
            >
              <FaHome className="text-2xl" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${({ isActive }) => {
                isActive ? "active" : "";
              }}`}
              to={"/ourmenu"}
            >
              <FaBars className="text-2xl" />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${({ isActive }) => {
                isActive ? "active" : "";
              }}`}
              to={`/shop/${"salad"}`}
            >
              <FaShoppingBag className="text-2xl" />
              Order
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/contact"}
              className={`${({ isActive }) => {
                isActive ? "active" : "";
              }}`}
            >
              <FaEnvelope className="text-2xl" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
