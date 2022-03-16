import Image from "next/image";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <div>
          <Image src="/assets/icon.png" className="bounce" alt="logo" layout="fill" />
        </div>
        <span>Avant Garde C.</span>
      </div>
      <div>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
        <Link to="book" spy={true} smooth={true}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
