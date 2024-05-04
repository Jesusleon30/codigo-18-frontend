import "./css/index.css";

export default function HeaderUno({children, title2}) {
  return (
    <>
      <section className=" flex justify-between p-1  items-center w-full h-20 colorfondo ">
        {/* es de poner fixed pero tengo que ver los espacios */}
        <div>
          <button>
            <img
              className="h-[80px] w-[80px]"
              src="./assets/iconsLogo/leone5.png"
              alt=""
            />
          </button>
        </div>
        <div>
          <p className="text-1xl font-semibold text- text-center text-indigo-700 md:hidden   title2">{title2}</p>
          {children}
        </div>
        <div>
          <button>
            <img
              className="h-[80px] w-[80px]"
              src="./assets/iconsLogo/leone6.png"
              alt=""
            />
          </button>
        </div>

      </section>
    </>
  );
}
