export default function Header({ children, position }) {
  return (
    <header className={`pt-28 lg:ml-12 px-12 pb-8 flex justify-${position}`}>
      <div className="max-w-lg w-full">
        <h1 className="text-white font-bold italic mb-2 ml-2 text-5xl md:text-6xl">
          Sena Movie
        </h1>
        <p className="ml-2 text-white text-lg mb-6">
          Found your favorite movies here.
        </p>
        {children}
      </div>
    </header>
  );
}
