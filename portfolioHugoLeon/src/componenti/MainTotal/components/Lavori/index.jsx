import "./css/index.css";

export default function Lavori() {
  return (
    <>
      <div>
        <section className="profilo">
          <div className="div-profilo text flex flex-col">
            <p className=" text-xl">siti rapidi</p>

            <ul>
              <li>
                <a href="https://Github.com/" target="_blank">
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://tecsup.instructure.com/login/canvas"
                  target="_blank"
                >
                  Canvas
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  Youtube
                </a>
              </li>

              <li>
                <a href="http://google.com" target="_blank">
                  Google
                </a>
              </li>

              <li>
                <a href="https://translate.google.it/" target="_blank">
                  Traduttore Google
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
