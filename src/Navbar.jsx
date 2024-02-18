import { LuAlignRight } from "react-icons/lu";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl font-poppins mx-auto mt-5 px-5 lg:px-0">
      <div className="flex justify-between items-center">
        <img
          src="https://i.ibb.co/t3t48JC/Untitled-design-2-removebg-preview-1-1.png"
          alt="logo/portfolio"
          className="w-16"
        />
        <ul className="menu p-4  min-h-full text-base-content font-medium text-lg hidden lg:flex flex-row">
          <li>
            <a onClick={() => scrollToSection("skills")}>Skill&apos;s</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("work")}>Work</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("education")}>Education</a>
          </li>
          <li onClick={() => scrollToSection("contact")}>
            <a>Contact</a>
          </li>
        </ul>
        <li className="hidden lg:flex justify-center items-start">
          <button className="btn bg-black text-white">
            <a
              href="https://drive.google.com/file/d/1df4jb5XTMaiPXJ04riUANNsMsiH4lJtL/view?usp=sharing"
              download="Shariful Islam Resume.pdf"
              target="_blank"
            >
              Download CV
            </a>
          </button>
        </li>
      </div>
      <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex lg:hidden  justify-end items-end  ">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn bg-white hover:bg-white "
          >
            <LuAlignRight className="text-2xl " />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content font-medium text-lg">
            {/* Sidebar content here */}

            <li>
              <a>Skill&apos; s</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>Education</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li className="flex justify-center items-start">
              <button className="btn bg-black text-white">
                <a
                  href="https://drive.google.com/file/d/1df4jb5XTMaiPXJ04riUANNsMsiH4lJtL/view?usp=sharing"
                  download="Shariful Islam Resume.pdf"
                  target="_blank"
                >
                  Download CV
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
