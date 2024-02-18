import { FaCircle } from "react-icons/fa";
const Education = () => {
  return (
    <div
      id="education"
      className="max-w-6xl mx-auto px-5 lg:px-0 my-10 font-poppins"
    >
      <div className="flex items-center gap-2">
        <hr className="border-2 w-20 border-black" />
        <h1 className="text-4xl font-bold">Education</h1>
      </div>
      <div>
        <div>
          {/* University */}
          <div className="flex w-full ">
            <div className="grid h-20 flex-grow card  rounded-box place-items-center w-full">
              <h3 className="text-lg">2019-2023</h3>
            </div>
            <div className="divider divider-horizontal">
              <FaCircle className="text-5xl" />
            </div>
            <div className="grid h-20 flex-grow card  rounded-box place-items-center w-full">
              <h1 className="text-xl font-bold">Feni University.</h1>
              <p>BsC(Computer Science & Engineering)</p>
            </div>
          </div>
          {/* University */}
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card  rounded-box place-items-center w-full">
              <h3 className="text-lg">2015-2017</h3>
            </div>
            <div className="divider divider-horizontal">
              <FaCircle className="text-5xl" />
            </div>
            <div className="grid h-20 flex-grow card  rounded-box place-items-center w-full">
              <h1 className="text-xl font-bold">Feni Government College.</h1>
              <p>HSC(Science)</p>
            </div>
          </div>
          {/* University */}
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card  rounded-box place-items-center w-full">
              <h3 className="text-lg">2010-2015</h3>
            </div>
            <div className="divider divider-horizontal">
              <FaCircle className="text-5xl" />
            </div>
            <div className="grid h-20 flex-grow card  rounded-box place-items-center w-full">
              <h1 className="text-xl font-bold">
                Al Jameatul Falahia Kamil Madrasah,Feni.
              </h1>
              <p>High-School(Science)</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Education;
