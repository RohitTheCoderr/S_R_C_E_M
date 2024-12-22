import React from "react";

function Ragging() {
  return (
    <>
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-200 mb-2">
            RAGGING COMMITTEE
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-sky-200">
            Shri Ram College of Engineering & Management
          </h2>
        </div>
      </div>

      <div className="mt-5 px-4 sm:px-8 lg:px-16">
        <p className="font-bold text-sky-900 text-center text-2xl sm:text-3xl mb-4">
          RAGGING COMMITTEE
        </p>
        <p className="font-normal text-sky-800 text-justify">
          At Shri Ram College of Engineering & Management (SRCEM), we are
          committed to fostering a safe, respectful, and inclusive environment
          for all students. The Ragging Committee plays a crucial role in
          upholding this commitment by actively working to prevent and address
          any incidents of ragging within our campus community. Our primary goal
          is to ensure that every student experiences a welcoming and supportive
          atmosphere throughout their academic journey.
        </p>
      </div>

      <div className="mt-5 px-4 sm:px-8 lg:px-16">
        <p className="font-bold text-sky-900 text-xl sm:text-2xl mb-2">
          Objectives and Responsibilities
        </p>
        <p className="font-normal text-sky-800 mb-3">
          The Ragging Committee is established to:
        </p>
        <ul className="list-disc list-inside text-sky-900 space-y-2">
          <li>
            <span className="font-bold">Prevent Ragging:</span> Implement
            proactive measures to prevent ragging and create awareness among
            students about the harmful effects of ragging. We aim to educate
            students about their rights and the zero-tolerance policy towards
            ragging.
          </li>
          <li>
            <span className="font-bold">Monitor and Address Complaints:</span>{" "}
            Receive, investigate, and address any complaints or reports of
            ragging promptly and confidentially. The committee is responsible for
            conducting thorough inquiries and taking appropriate actions to
            resolve issues.
          </li>
          <li>
            <span className="font-bold">Support Victims:</span> Provide support
            and assistance to victims of ragging, ensuring their safety and
            wellbeing. The committee is dedicated to offering counseling and
            support services to those affected by ragging incidents.
          </li>
          <li>
            <span className="font-bold">Promote a Safe Environment:</span> Work
            closely with students, faculty, and staff to maintain a campus
            environment free from harassment and intimidation. The committee
            organizes workshops, seminars, and awareness programs to reinforce
            the importance of a respectful and inclusive community.
          </li>
        </ul>
      </div>

      <div className="mt-5 px-4 sm:px-8 lg:px-16">
        <p className="font-bold text-sky-900 text-xl sm:text-2xl mb-2">
          Reporting and Contact Information
        </p>
        <p className="font-normal text-sky-800 text-justify">
          Any student who experiences or witnesses ragging is encouraged to
          report the incident to the Ragging Committee immediately. Reports can
          be made confidentially through designated channels, including the
          committee's dedicated email address or contact number. The committee
          ensures that all complaints are handled with utmost seriousness and
          confidentiality, with a commitment to protecting the identity of the
          complainant.
        </p>
      </div>

      <div className="mt-5 px-4 sm:px-8 lg:px-16">
        <p className="font-bold text-sky-900 text-xl sm:text-2xl mb-2">
          Commitment to Action
        </p>
        <p className="font-normal text-sky-800 text-justify">
          SRCEM’s Ragging Committee is dedicated to enforcing the institution's
          anti-ragging policies and maintaining a safe, respectful learning
          environment. Through vigilant monitoring, proactive measures, and
          unwavering support for all students, we strive to uphold the integrity
          of our academic community and ensure that every student can thrive
          without fear of harassment.
        </p>
      </div>

      <div className="mt-5 flex justify-center">
        <img
          className="h-40 w-full sm:w-3/4 lg:w-1/2 object-contain"
          src="/images/common/table.png"
          alt="Committee Table"
        />
      </div>
    </>
  );
}

export default Ragging;



