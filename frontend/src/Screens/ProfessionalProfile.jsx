// ProfessionalProfile.jsx
import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex  text-center items-center justify-center flex-col mb-6">
        <img
          className="w-[150px] h-[150px] rounded-full mb-5"
          src="https://placekitten.com/200/200"
          alt="Profile"
        />
        <div>
          <h2 className="text-3xl text-purple-600 font-bold">Surendra Singh</h2>
          <p className="text-gray-600">Web Developer</p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Professional Summary</h3>
        <p className="text-gray-700">
          Experienced web developer with a strong background in front-end and
          back-end technologies. Proven ability to design and implement web
          applications that meet client requirements.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Skills</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>JavaScript (React, Node.js)</li>
          <li>HTML5, CSS3 (Tailwind CSS)</li>
          <li>Database Management (MongoDB, MySQL)</li>
          <li>RESTful API Design</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Experience</h3>
        <div className="mb-4">
          <p className="text-gray-700 font-bold">Senior Web Developer</p>
          <p className="text-gray-600">XYZ Company - January 2020 to Present</p>
          <p className="text-gray-600">
            Led a team of developers in the design and implementation of a new
            customer portal. Collaborated with cross-functional teams to ensure
            project success.
          </p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">Web Developer</p>
          <p className="text-gray-600">ABC Tech - June 2017 to December 2019</p>
          <p className="text-gray-600">
            Developed and maintained web applications, ensuring functionality
            and responsiveness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
