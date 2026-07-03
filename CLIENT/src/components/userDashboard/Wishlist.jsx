import React from "react";
import {
  MdFavorite,
  MdShoppingCart,
} from "react-icons/md";

const Wishlist = () => {

  const wishlist = [];

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Wishlist
        </h1>

        <p className="text-gray-500 mt-2">
          Your favourite food items.
        </p>

      </div>

      {/* Wishlist */}

      {wishlist.length === 0 ? (

        <div className="bg-white rounded-3xl shadow-lg py-20 text-center">

          <MdFavorite
            size={80}
            className="mx-auto text-red-300"
          />

          <h2 className="text-2xl font-bold mt-5">
            Wishlist is Empty
          </h2>

          <p className="text-gray-500 mt-2">
            Save your favourite foods to see them here.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {wishlist.map((food) => (

            <div
              key={food._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >

              <img
                src={food.image}
                alt={food.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold">
                  {food.name}
                </h2>

                <p className="text-orange-500 text-lg font-semibold mt-2">
                  ₹{food.price}
                </p>

                <div className="flex gap-3 mt-5">

                  <button
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
                  >
                    <MdShoppingCart />

                    Add to Cart
                  </button>

                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-5 rounded-xl transition"
                  >
                    <MdFavorite />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Wishlist;