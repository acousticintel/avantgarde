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
              <span>+254 784 471 476</span>
            </a>
          </Link>
          <Link href="mailto:info@avantgardec.com">
            <a className="flex">
              <MdMarkEmailRead />
              <span>info@avantgardec.com</span>
            </a>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/avantgarde-c/"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
