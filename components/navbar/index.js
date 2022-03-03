import Image from "next/image";
import { FaConnectdevelop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <div>
          <Image
            src='/assets/icon.png'
            className="bounce"
            layout="fill"
          />
        </div>
        <span>
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
