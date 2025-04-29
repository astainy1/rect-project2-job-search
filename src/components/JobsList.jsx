import { useState } from "react";
import { Link } from "react-router-dom";

import { FaLocationArrow } from "react-icons/fa";

const Alljobs = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let jobDescription = job.description;

  if (!showFullDescription) {
    jobDescription = jobDescription.substring(0, 130) + `...`;
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className="mb-2">{jobDescription}</div>

        <button
          type="button"
          className="text-teal-700 mb-4 hover:text-teal-900 cursor-pointer"
          onClick={() => {
            setShowFullDescription((previewState) => !previewState);
          }}
        >
          {showFullDescription ? "See less" : "See more"}
        </button>

        <h3 className="text-teal-900 mb-2">{job.salary} / Year</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3 flex justify-center align-middle">
            <FaLocationArrow className="text-lg inline mr-2 " />
            {job.location}
          </div>
          <Link
            to={{ pathname: `/jobs/${job.id}` }}
            className="h-[36px] bg-teal-700 hover:bg-teal-900 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alljobs;
