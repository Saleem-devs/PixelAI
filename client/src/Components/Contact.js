import React from "react";

function Contact() {
  return (
    <section className="py-16 bg-[#f9fafc]">
      <div className="py-12 px-3 mx-auto w-11/12 md:w-2/3 rounded-3xl bg-black text-white text-center">
        <h3 className="text-2xl font-semibold mb-8">
          Have any Suggestion or Feedbacks?
        </h3>
        <p className="text-lg text-[#8c8c8e] mb-8">
          Do you have any suggestion or feedbacks regarding this project or need
          partnership/collaboration on another project? Reach out to me below,
          I'm always available and would love to help in any way I can.
        </p>
        <a
          href="https://twitter.com/abdsalam_saleem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-1.5 px-4 text-black rounded-md bg-[#f9fafc] font-semibold text-lg transition-transform duration-300 ease-out transform hover:-translate-y-1">
            Send Me a Message
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
