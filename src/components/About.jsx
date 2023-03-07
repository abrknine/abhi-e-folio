import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-15">
        As a second-year student at Maharaja Agrasen Institute of Technology, I have discovered a strong passion for front-end development. With a focus on designing and coding, I have developed a range of skills and experience in this field. As a dedicated front-end developer from India, I am committed to creating engaging and visually appealing websites for clients. In addition to my technical expertise, I am also highly committed to my personal fitness goals. Outside of my studies and work, I enjoy gyming, rapping, and running.
        </p>
        <br />
        <p className="text-xl">
        During my internship at Suvidha Foundation as a front-end developer, I was responsible for designing and coding their website while also learning about Git and GitHub. This experience provided me with valuable technical skills and knowledge in the field of front-end development. As a highly motivated individual, I am now seeking new opportunities to further expand my skills and contribute to the growth of an organization. I am passionate about creating visually appealing and user-friendly websites, and am confident in my ability to bring value to any team.
        </p>
      </div>
    </div>
  );
}

export default About;
