import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-0 font-poppins my-8 flex justify-between items-center">
      <div className="flex gap-5 text-3xl">
        <a href="https://github.com/Sharif355" target="_blank">
          {" "}
          <FaGithub />{" "}
        </a>
        <a href="https://www.linkedin.com/in/sharif2a99202/" target="_blank">
          {" "}
          <FaLinkedin />{" "}
        </a>
        <a href="https://www.instagram.com/sharifmoments/" target="_blank">
          {" "}
          <FaInstagram />{" "}
        </a>
        <a href="https://twitter.com/Sharif73845811" target="_blank">
          {" "}
          <FaTwitter />{" "}
        </a>
      </div>
      <p>
        Design & Developed By{" "}
        <a
          className="underline font-bold"
          href="https://www.linkedin.com/in/sharif2a99202/"
          target="_blank"
        >
          Shariful Islam.
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
