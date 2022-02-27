import Link from "next/link";
import {
  FaConnectdevelop,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="cont">
        <div>
          <a>
            <FaConnectdevelop
              size="3em"
              className="text-purple-200 animate-spin"
            />
            <span className="uppercase font font-extrabold tracking-wider text-purple-200">Avant Garde</span>
          </a>
          <span className="font-light">
            Innovation and Creative Agency providing solutions for our clients’
            problems.
          </span>
        </div>
        <div>
          <a>
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a>
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a>
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
