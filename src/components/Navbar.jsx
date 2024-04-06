import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  //   const [hamburgerActive, setHamburgerActive] = useState(false);
  const hamburger = useRef();
  const navbar = useRef();

  return (
    <header
      className={`flex right-0 left-0 top-0 shadow-xl fixed bg-white z-50`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center py-1">
        <div className="py-2">
          <h2 className="text-4xl font-serif italic font-bold text-headLine">
            Sena Movie
          </h2>
        </div>
        <div className="flex items-center">
          <nav
            ref={navbar}
            className={`transition-all duration-1000 absolute hidden bg-white rounded-lg lg:block lg:static lg:max-w-full  shadow-lg top-full right-8 lg:pb-3 lg:pt-3 lg:shadow-none pt-5 max-w-[250px] w-full`}
          >
            <ul className="block lg:flex lg:items-center">
              <li>
                <Link
                  to="/"
                  className="lg:text-lg text-base text-slate-900 flex py-2 px-8 hover:text-slate-300 "
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="lg:text-lg text-base text-slate-900 flex py-2 px-8 hover:text-slate-300 "
                >
                  Find Movie
                </Link>
              </li>
              <li>
                <Link
                  to="/top-movie"
                  className="lg:text-lg text-base text-slate-900 flex py-4 lg:py-0 px-8 hover:text-slate-300 "
                >
                  Top Rated
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="px-2 py-[2px] lg:hidden"
            ref={hamburger}
            onClick={() => {
              navbar.current.classList.toggle("hidden");
              hamburger.current.classList.toggle("hamburger-active");
            }}
          >
            <span
              className={`hamburger-button transition-all origin-left `}
            ></span>
            <span className={`hamburger-button transition-all `}></span>
            <span
              className={`hamburger-button transition-all origin-left`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
}
