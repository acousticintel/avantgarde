import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="cont">
        <div>
          <div className="logo">
            <div>
              <Image src="/assets/icon.png" className="bounce" layout="fill" />
            </div>
            <span>Avant Garde C.</span>
          </div>
          <span className="font-light">Innovation and Creative Agency.</span>
        </div>
        <div>
          <Link href="tel:+254784471476">
            <a className="flex">
              <FaPhoneAlt />
              <span>+254784471476</span>
            </a>
          </Link>
          <Link href="mailto:info@avantgardecontingent.com">
            <a className="flex">
              <MdMarkEmailRead />
              <span>info@avantgardecontingent.com</span>
            </a>
          </Link>
          <a>
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
