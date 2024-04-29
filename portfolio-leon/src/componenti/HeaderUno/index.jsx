import "./css/index.css";

export default function HeaderUno() {
  return (
    <>
      <section className="bg-fixed flex justify-between p-1  items-center w-full h-20 bg-gray-900 ">
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
          <div className=" hidden  navbar  md:flex md:justify-center md:items-center ">
            <a className="a-navbar" href="#Home">
              Home <span className="span-navbar"></span>
            </a>
            <a className="a-navbar" href="#About Me">
              About Me <span className="span-navbar"></span>
            </a>
            <a className="a-navbar" href="#Skills">
              Skills <span className="span-navbar"></span>
            </a>
            <a className="a-navbar" href="#Portfolio">
              Portfolio <span className="span-navbar"></span>
            </a>
            <a className="a-navbar" href="#Contact">
              Contact <span className="span-navbar"></span>
            </a>
            <span className="span-navbar"></span>
          </div>
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
