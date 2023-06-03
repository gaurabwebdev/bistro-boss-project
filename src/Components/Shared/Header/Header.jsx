import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/UseCart/UseCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/ourmenu"}>Menu</Link>
      </li>
      <li>
        <Link to={`/shop/${"salad"}`}>Shop</Link>
      </li>

      {!user && (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </>
      )}
      <li>
        <Link to={"dashboard/mycart"}>
          <div className="flex items-center relative">
            <FaShoppingCart className="text-2xl" />
            <div className="badge badge-secondary absolute -top-2 -right-8 -z-10">
              +{cart.length || 0}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        if (error) {
          console.log(error.message);
        }
      });
  };
  return (
    <div className="navbar bg-black fixed z-10 bg-opacity-30 text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Bistro_Boss
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <button onClick={handleSignOut} className="btn">
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
