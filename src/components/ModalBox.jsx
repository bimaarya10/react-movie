/* eslint-disable react/prop-types */
export default function ModalBox({ isVisible, closeModal, movie }) {
  if (!isVisible) return null;

  const namaBulan = [
    "January",
    "February",
    "March",
    "April",
    "Mei",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dateObject = new Date(movie.release_date);
  console.log(dateObject);
  return (
    <div className="fixed z-50 inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center">
      <div className="max-w-2xl relative mt-5 bg-white w-full mx-4 py-6 bg-secondary border border-slate-300 rounded-lg shadow-xl flex px-4 md:px-8">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="w-36 md:w-48 rounded-lg shadow-lg"
          alt=""
        />
        <div className="ml-6">
          <h2 className="text-slate-800 font-serif text-3xl font-semibold">
            {movie.title}
          </h2>
          <p className="text-paragraph mt-1 text-sm md:text-[16px] font-sans text-slate-600">
            {movie.overview}
          </p>
          <p className="text-paragraph mt-3 text-[15px] md:text-[17px] font-sans font-semibold text-slate-600">
            Date : {namaBulan[dateObject.getMonth()]} {dateObject.getFullYear()}
          </p>
          <p className="text-slate-800 mt-3 md:text-[16px] font-semibold">
            ⭐{movie.vote_average.toFixed(1)}
          </p>
          <button
            onClick={closeModal}
            className="bg-slate-700  py-2 hover:bg-slate-800 mt-5 px-5 rounded-lg text-white hover:bg-happyPink"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
