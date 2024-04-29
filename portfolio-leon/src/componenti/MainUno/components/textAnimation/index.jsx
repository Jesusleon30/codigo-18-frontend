import "./css/index.css";

export default function TextAnimation() {
  return (
    <>
      <section
        className=" text-center 
      md:flex  md:items-center md:justify-center md:p-5"
      >
        <div>
          <img
            className="xs:h-[25rem] xs:w-[25rem] md:hidden bg-cover sm:h-[50rem] sm:w-[50rem] "
            src="./assets/mobile/jesusStrada.jpg"
            alt=""
          />
        </div>
        <div  className="md:flex md:flex-row-reverse md:justify-center md:items-center">
          <div>
            <div className="wrapper">
              <span className="  md:text-5xl hidden md:block text-xl text-lime-100 ">
                I'm a
              </span>
              <ul className="sec-texts">
                <li className="li-wrapper">
                  <span>Developer - Frontend</span>
                </li>
                <li className="li-wrapper">
                  <span>Tecnico di Automazione Industriale</span>
                </li>
                <li className="li-wrapper">
                  <span>Robotica ABB</span>
                </li>
                <li className="li-wrapper">
                  <span>Installatore e Manutentore</span>
                </li>
                <li className="li-wrapper">
                  <span>Meccanico - Elettrico</span>
                </li>
                <li className="li-wrapper">
                  <span>Programmatore CNC</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className=" h-[12.5rem] w-[12.5rem] md:h-[18.75rem] md:w-[18.75rem] "
              src="./assets/varieImmagini/robot2.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <img
            className="hidden md:block md:h-[21.875rem] md:w-[23.75rem]  md:bg-cover rounded-[20%]"
            src="./assets/icons/Jesus.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
