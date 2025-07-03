import React from "react";

const Contactus = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! if you have any questions,comments or
        feedback,please use the form below.
      </p>
      <form
        method="POST"
        action="https://api.web3forms.com/submit"
        className="max-w-2xl mx-auto"
      >
        <input
          type="hidden"
          name="access_key"
          value="829a94af-61be-494a-b193-38d29346f53a"
        />
        <div className="grid grid-cols-auto gap-6 mt-6 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90 required"
            name="name"
            id=""
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90 required"
            name="email"
            id=""
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkhover/30 dark:border-white/90 required"
          name="message"
          id=""
        ></textarea>
        <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkhover">
          Sumit now{" "}
          <img src="assets/right-arrow-white.png" alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default Contactus;
