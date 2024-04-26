export function Header(props) {
  return (
    <div>
      <p>hola desde el archivo Header.jsx</p>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
      <div>
        Hola {props.name} {props.lastname}
      </div>
    </div>
  );
}
