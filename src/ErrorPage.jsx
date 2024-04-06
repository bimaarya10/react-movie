export default function ErrorPage() {
  return (
    <div className="max-w-lg mx-auto w-full text-center pt-28">
      <h1 className="text-5xl md:text-8xl text-white font-bold">Error</h1>
        <img src="./error.svg" className="w-40 block mx-auto md:w-56" alt="" />
      <h4 className="text-slate-300 font-semibold text-xl md:text-xl mt-5">
        Forbidden, the site can`t be reach
      </h4>
    </div>
  );
}
