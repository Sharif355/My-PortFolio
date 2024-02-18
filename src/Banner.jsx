import { PiHandWavingBold } from "react-icons/pi";

const Banner = () => {
  return (
    <div className="max-w-6xl  mx-auto my-20 px-5 lg:px-0 font-poppins">
      <h4 className="flex items-center gap-1 text-xl font-medium">
        <PiHandWavingBold /> there!
      </h4>
      <h1 className="text-4xl font-bold">I&apos;m Shariful Islam.</h1>
      <h1 className="pb-5 text-4xl font-bold">I build Web Applications.</h1>
      <div className="space-y-5 text-xl max-w-3xl text-justify">
        <p>
          I&apos;m a visual learner and a self-taught developer with a strong
          passion for frontend web development.
        </p>
        <p>
          I primarily engage in front-end development using{" "}
          <span className="text-xl font-bold px-1">JavaScript</span>,
          <span className="text-xl font-bold px-1">React.js</span> &{" "}
          <span className="text-xl font-bold px-1">Next.js</span> and like to
          explore & learn different things in my spare time.
        </p>
        <p>
          I have practical experience with backend technologies including
          <span className="text-xl font-bold px-1">Node.js</span>
          for building{" "}
          <span className="text-xl font-bold px-1">RESTful APIs</span>,
          databases like <span className="text-xl font-bold px-1">MongoDB</span>{" "}
          and
          <span className="text-xl font-bold px-1"> Firebase</span> for data
          storage, and version control using{" "}
          <span className="text-xl font-bold px-1 ">Git</span>
          and collaboration on{" "}
          <span className="text-xl font-bold px-1">GitHub</span>.
        </p>
      </div>
    </div>
  );
};

export default Banner;
