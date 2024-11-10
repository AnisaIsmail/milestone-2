import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-logo">Anisa.</h2>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="footer-social">
            <a href="https://github.com/anisaismail">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anisa-ismail-66b4702ba/">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:ismailanisa817@gmail.com">
              <TfiEmail size={24} />
            </a>
            <a href="/">
              <FaSquareThreads size={24} />
            </a>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Anisa Ismail. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}