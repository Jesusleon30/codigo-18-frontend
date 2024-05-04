import { HeaderUno, HeaderDue } from "./components";

export default function HeaderTotal() {
  return (
    <>
      <HeaderUno title2=" < Code > ">
        <div>
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
        </div>
        </HeaderUno>
    </>
  );
}
