import Image from "next/image";
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
          <div className="logo">
            <div>
              <Image src="/assets/icon.png" className="bounce" layout="fill" />
            </div>
            <span>Avant Garde</span>
          </div>
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
