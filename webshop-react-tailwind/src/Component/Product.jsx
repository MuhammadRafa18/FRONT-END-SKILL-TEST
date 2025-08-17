import React from "react";
import { Layouts } from "../Pages/Layouts";
import axios from "axios";
import { useEffect, useState } from "react";

export const Product = () => {
  const [meals, setMeals] = useState([]);
  const [Request, setRequest] = useState("");
  const [search, Setsearch] = useState("");
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${Request}`
        );
        // console.log(response.data.meals); // cek hasil di console
        setMeals(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMeals();
  }, [Request]);

  const HandleRequest = (e) => {
    e.preventDefault();
    setRequest(search);
  };
  console.log(search);
  return (
    <Layouts>
      <section className="px-16 space-y-4 py-3 ">
        <form onSubmit={HandleRequest}>
          <div className="flex gap-3 items-center">
            <input
              id="search"
              type="text"
              placeholder="Cari recipe (mis. chicken, beef)..."
              className="w-full  border rounded-lg px-4 py-2"
              onChange={(e) => Setsearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Search
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {meals && meals.length > 0 ? (
            meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Gambar */}
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                />

                {/* Isi Card */}
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {meal.strMeal}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {meal.strCategory} • {meal.strArea}
                  </p>

                  {/* Instruksi singkat */}
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {meal.strInstructions}
                  </p>

                  {/* Link ke YouTube */}
                  {meal.strYoutube && (
                    <a
                      href={meal.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-500 hover:underline text-sm"
                    >
                      Watch Tutorial 🍳
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              ❌ Recipe not found, try another keyword.
            </p>
          )}
        </div>
      </section>
    </Layouts>
  );
};
