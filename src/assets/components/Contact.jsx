import React from "react";

export const Contact = () => {
  const githubLink = "https://github.com/RaviTejaKaranam";
  const linkedinLink =
    "https://www.linkedin.com/in/ravi-teja-karanam-29696717a/";
  const mailId = "rkaranam1999@gmail.com";

  return (
    <div
      className="mt-5 md:mt-10"
      id="contact"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h1 className="text-4xl font-bold text-center">Contact</h1>
      <p className="text-center mt-2 font-semibold">
        Got Suggestions or Compliments?
      </p>
      <p className="text-center mt-2">
        If you have any cool ideas, feedback, or just want to send some
        appreciation for these animations, feel free to reach out! 😄 I’m always
        up for some fun and creative chat!
      </p>
      <div className="flex justify-center mt-5 gap-6">
        <a
          className="cursor-pointer"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa-brands fa-github fa-2xl"
            style={{ color: "#023047" }}
          ></i>
        </a>
        <a
          className="cursor-pointer"
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa-brands fa-linkedin fa-2xl"
            style={{ color: "#023047" }}
          ></i>
        </a>
        <a className="cursor-pointer" href={`mailto:${mailId}`}>
          <i
            className="fa-solid fa-envelope fa-2xl"
            style={{ color: "#023047" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
