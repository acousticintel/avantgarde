import { FaConnectdevelop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <div>
        <FaConnectdevelop size="3em" className="animate-spin" />
        <span className="uppercase font font-extrabold tracking-wider">
          Avant Garde
        </span>
      </div>
      <div>
        <a>Home</a>
        <a>About</a>
        <a>Contact US</a>
      </div>
    </nav>
  );
}
