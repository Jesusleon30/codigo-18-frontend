import {
  Logo,
  TextAnimation,
  Lista,
  Contador,
  Pokedex,
  Lavori,
} from "./components";

export default function MainTotal() {
  return (
    <>
      <div>
        <a
          className="text-5xl text-blue-300 font-semibold flex items-center justify-center"
          href="#About Me"
        >
          About me
        </a>
      </div>
      <TextAnimation
        className="m-[80px] "
        title1="👋 Hi! I'm Jesus Hugo Retamozo Leon"
      />

      <div id="Skills">
        <a
          className="text-5xl text-blue-300 font-semibold flex items-center justify-center"
          href="#Skills"
        >
          Skills
        </a>
      </div>
      <Lista />
      <div>
        <a
          className="text-5xl text-blue-300 font-semibold flex items-center justify-center"
          href="#Portfolio"
        >
          Portfolio
        </a>
      </div>

      <Contador />
      <Lavori/>
      <Logo />
      <div>
        <a
          className="text-5xl text-blue-300 font-semibold flex items-center justify-center"
          href="#Contact"
        >
          Contact
        </a>
      </div>
    </>
  );
}
