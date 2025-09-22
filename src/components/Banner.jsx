import Shoes from "../assets/Shoes.png";

export default function HeroBanner() {
  return (
    <section className="bg-sky-400 w-270 mt-1 flex items-center justify-center py-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-8 lg:px-12 mt-11">
        <div className="text-white max-w-md text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold">
            Adidas Men Running
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-2">
            Sneakers
          </h2>
          <p className="mt-1 text-sm sm:text-base md:text-lg opacity-90">
            Performance and design. Taken right to the edge.
          </p>
          <button className="mt-5 px-6 py-2 border-b-2 border-white font-semibold text-sm sm:text-base">
            SHOP NOW
          </button>
        </div>


        <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src={Shoes}
            alt="Sneakers"
            className="w-40 sm:w-56 md:w-72 lg:w-96 xl:w-[450px]"
          />
        </div>

      </div>
    </section>
  );
}
