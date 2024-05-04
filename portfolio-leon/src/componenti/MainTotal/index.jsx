import { Logo, TextAnimation, Lista } from "./components";

export default function MainTotal() {
  return (
    <>
      <TextAnimation
        className="m-[80px]"
        title1="👋 Hi! I'm Jesus Hugo Retamozo Leon"
      />

      <div>
        <a
          className="text-5xl text-blue-300 font-semibold flex items-center justify-center"
          href="#Skills"
        >
          Skills
        </a>
      </div>
      <Lista />
      <Logo />
    </>
  );
}
