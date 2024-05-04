import "./css/index.css";
import userImg0 from "../../../../../public/assets/varieImmagini/ABByumi.jpg";
import userImg1 from "../../../../../public/assets/desktop/robotABB.jpg";
import userImg2 from "../../../../../public/assets/desktop/QEindustriale.jpg";
import userImg3 from "../../../../../public/assets/desktop/stampa3d.png";
import userImg4 from "../../../../../public/assets/desktop/tornitura.jpg";
import userImg5 from "../../../../../public/assets/desktop/progettazione_meccanica.png";
import userImg6 from "../../../../../public/assets/desktop/progetto-3d.jpg";
import userImg8 from "../../../../../public/assets/varieImmagini/developerdesk.jpg";



const users = [
  {
    id: 0,
    name: "Developers",
    description: "Frontend - Backend",
    image: userImg8,
  },
  {
    id: 1,
    name: "Robotica Yumi Cobot",
    description: "Collaborativo",
    image: userImg0,
  },
  {
    id: 2,
    name: "Robot 6 axis ABB",
    description: "Industriale",
    image: userImg1,
  },
  {
    id: 3,
    name: "Quadro Elettrico ",
    description: "Industriale",
    image: userImg2,
  },
  {
    id: 4,
    name: "Stampa 3D",
    description: "",
    image: userImg3,
  },
  {
    id: 6,
    name: "CAD ",
    description: "Soliworks",
    image: userImg5,
  },
  {
    id: 5,
    name: "Turning",
    description: "Programmatore CNC",
    image: userImg4,
  },
  {
    id: 7,
    name: "Meccanica",
    description: "",
    image: userImg6,
  },
];

export default function Lista() {
  return (
    <section className="section-lista">
      {users.map((user) => {
        return (
          <div className="card-lista m-2 gap-2" key={user.id}>
            <img className="image-lista" src={user.image} alt={user.name} />
            <h2 className="name-lista text-2xl">{user.name}</h2>
            <p className="description-lista">{user.description}</p>
            <button className="text-white open">Open</button>
          </div>
        );
      })}
    </section>
  );
}
