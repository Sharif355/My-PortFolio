const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-6xl mx-auto px-5 lg:px-0 mt-10 font-poppins"
    >
      <div className="flex items-center gap-2">
        <hr className="border-2 w-20 border-black" />
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>
      <h3 className="p-5">
        Feel free to reach out to me for any queries at{" "}
        <a className="font-bold text-lg underline" href="isharif766@gmail.com">
          isharif766@gmail.com
        </a>
      </h3>
    </div>
  );
};

export default Contact;
