import React from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/UseAxios/UseAxios";
import Swal from "sweetalert2";

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  console.log(image_hosting_token);
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgUrl = imgRes.data.display_url;
          const { name, recipe, price, category } = data;
          const newItem = {
            name,
            recipe,
            price: parseFloat(price),
            category,
            image: imgUrl,
          };
          axiosSecure
            .post(`/menu`, newItem)
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire(
                  "Added New Item",
                  "You clicked the button!",
                  "success"
                );
              }
            })
            .catch((err) => {
              if (err) {
                console.log(err);
              }
            });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss - Add Item</title>
      </Helmet>
      <SectionTitle subHeading={"---What's New---"} Heading={"Add An Item"} />

      <div className="p-3 bg-base-300 m-8 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              {...register("name", { required: true, maxLength: 80 })}
            />
            {errors.name && (
              <span className="text-red-300">Recipe Name Required</span>
            )}
            <div className="flex flex-col md:flex-row items-center gap-2">
              <select
                className="select select-bordered w-full md:w-1/2 mr-2"
                {...register("category", { required: true })}
              >
                <option defaultValue>Category</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>Drinks</option>
              </select>
              <input
                type="number"
                placeholder="price"
                className="input input-bordered w-full md:w-1/2"
                min={10}
                {...register("price", { required: true, min: 10, max: 300 })}
              />
              {errors.Category && (
                <span className="text-red-300">Select The Category</span>
              )}
              {errors.price && (
                <span className="text-red-300">Price Is Required</span>
              )}
            </div>
            <textarea
              placeholder="Recipe"
              className="textarea textarea-bordered textarea-sm w-full"
              rows={5}
              {...register("recipe", { required: true })}
            ></textarea>
            {errors.recipe && (
              <span className="text-red-300">Description Is Required</span>
            )}
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-300">
                Please upload the recipe image
              </span>
            )}
          </div>
          <button
            onSubmit={(data) => handleSubmit(data)}
            className="btn btn-neutral mt-2"
            type="submit"
          >
            <FaUtensils className="text-2xl mr-2" /> Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
