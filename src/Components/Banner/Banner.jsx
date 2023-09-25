
const Banner = ({ handleSubmit, setSearch, search }) => {
 
  return (
    <div className="bg-banner-bg bg-cover object-none bg-center  bg-no-repeat h-[80vh]  relative  flex justify-center items-center">
      <div className="flex flex-col items-center gap-10">
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <h1 className="text-5xl text-center font-bold z-10">
          I Grow By Helping People In Need
        </h1>
        <form onSubmit={handleSubmit} className="text-lg  z-10">
          <input
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" p-2 rounded-l-md outline-none"
            type="text"
            placeholder="Search here..."
          />
          <button
            
            className="bg-[#FF444A] text-white  font-semibold px-3 py-2 rounded-r-md"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
