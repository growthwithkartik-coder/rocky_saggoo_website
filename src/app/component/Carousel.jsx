"use client";
import Image from "next/image";
import { useEffect } from "react";
import "./carousel.css"; // we'll move custom css here

export default function Carousel() {
  useEffect(() => {
    const items = document.querySelectorAll(".carousel-focus");
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.classList.add("scale-110");
      });
      item.addEventListener("mouseleave", () => {
        item.classList.remove("scale-110");
      });
    });
  }, []);

  const cards = Array(9).fill(0);

  return (
    <div className="">
      <h1
        className="mx-12 my-10 text-gray-700 text-5xl lg:text-4xl text-center"
        style={{ fontFamily: "'Dancing Script', cursive, sans-serif" }}
      >
        🙌 Trusted by Entrepreneurs & Business Leaders
      </h1>

      <div className="container mx-auto w-full overflow-hidden relative">
        <div className="w-full h-full absolute">
          <div
            className="w-1/4 h-full absolute z-50 left-0"
            style={{
              background:
                "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <div
            className="w-1/4 h-full absolute z-50 right-0"
            style={{
              background:
                "linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>

        <div className="carousel-items flex items-center justify-center w-fit">
          {cards.map((_, i) => (
            <div
              key={i}
              className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg transition-transform duration-700 ease-in-out"
              style={{ width: "270px" }}
            >
              <svg
                className="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" />
              </svg>

              <p className="text-teal-400 font-bold text-xl mb-3">Sup3r-Us3r</p>
              <Image
                src="/img/hero.jpg"
                alt="Img"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full shadow-2xl"
              />
              <p className="mt-3 text-gray-600 text-center">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quibusdam!"
              </p>
              <button className="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">
                Button
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
