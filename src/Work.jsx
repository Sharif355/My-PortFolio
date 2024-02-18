import { GoArrowRight } from "react-icons/go";

const Work = () => {
  return (
    <div
      id="work"
      className="max-w-6xl mx-auto px-5 lg:px-0 font-poppins my-16"
    >
      <div className="flex items-center gap-2">
        <hr className="border-2 w-20 border-black" />
        <h1 className="text-4xl font-bold">Recent Work</h1>
      </div>
      {/* Project1 */}
      <div className="flex flex-col-reverse md:flex-row-reverse  gap-5 mt-6">
        <div>
          <img
            src="https://i.ibb.co/ykshWS1/project1.png"
            alt="project1"
            className="object-fit"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl  font-bold ">Shelf2Borrow</h1>
          <p className="text-justify">
            A MERN Stack Project where people can Read, Borrow or Buy Book
            seamlessly navigate through Home,Category & Product pages with an
            intuitive navigation system & user-friendly layout Featuring
            BreadCrumbs for easy traversal.{" "}
          </p>
          <h4 className="flex items-center gap-2 font-bold">
            <GoArrowRight className="text-2xl " /> React
          </h4>
          <h4 className="flex items-center gap-2 font-bold">
            <GoArrowRight className="text-2xl " /> Firebase
          </h4>
          <h4 className="flex items-center gap-2 font-bold">
            <GoArrowRight className="text-2xl " /> MongoDB
          </h4>
          <div className="flex gap-3">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Sharif355/Shelf2Borrow-Client",
                  "_blank"
                )
              }
              className="btn bg-black text-white"
            >
              Client
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Sharif355/Shelf2Borrow-Server",
                  "_blank"
                )
              }
              className="btn bg-black text-white"
            >
              Server
            </button>
            <button
              onClick={() =>
                window.open("https://shelf2borrow.web.app/", "_blank")
              }
              className="btn bg-black text-white"
            >
              Live Site
            </button>
          </div>
        </div>
      </div>
      {/* Project2 */}
      <div className="flex flex-col-reverse md:flex-row  gap-5 mt-10">
        <div>
          <img
            src="https://i.ibb.co/HD0cHBn/Project2.png"
            alt="project2"
            className="object-fit"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl  font-bold ">CozyComps</h1>
          <p className="text-justify">
            A comprehensive MERN Stack project, facilitating pet adoption,
            donations for injured animals, and organizing donation campaigns.
            Users can easily find and adopt their favorite pets, contribute
            towards the welfare of wounded animals, and coordinate donation
            drives.
          </p>
          <p className="text-justify">
            The platform features an intuitive user interface for seamless
            navigation and includes an admin dashboard for centralized
            management and control.
          </p>
          <h4 className="flex items-center gap-2 font-bold">
            <GoArrowRight className="text-2xl " /> React
          </h4>
          <h4 className="flex items-center gap-2 font-bold">
            <GoArrowRight className="text-2xl " /> Firebase
          </h4>
          <h4 className="flex items-center gap-2 font-bold">
            <GoArrowRight className="text-2xl " /> MongoDB
          </h4>
          <div className="flex gap-3">
            <button
              onClick={() =>
                window.open("https://github.com/Sharif355/CozyComps", "_blank")
              }
              className="btn bg-black text-white"
            >
              Client
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Sharif355/CozyComps_Server",
                  "_blank"
                )
              }
              className="btn bg-black text-white"
            >
              Server
            </button>
            <button
              onClick={() =>
                window.open("https://cozycomps-a12.web.app/", "_blank")
              }
              className="btn bg-black text-white"
            >
              Live Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
