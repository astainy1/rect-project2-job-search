// import { useState, useEffect } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import PreLoader from "../components/PreLoader";

const JobPage = ({ deleteSingleJob }) => {
  const navigate = useNavigate();
  // Function to delete job
  const onJobDelete = (jobID) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    deleteSingleJob(jobID);
    toast.success("Job Deleted successfully!");
    return navigate("/jobs");
  };

  //   const [singleJob, setSingleJob] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const { id } = useParams();
  const singleJob = useLoaderData();

  //   useEffect(() => {
  //     try {
  //       const fetchSingleJob = async () => {
  //         const response = await fetch(`/api/jobs/${id}`);
  //         const data = await response.json();
  //         setSingleJob(data);
  //       };
  //       fetchSingleJob();
  //     } catch (error) {
  //       console.error("Error fetching single job", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, []);
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-teal-500 hover:text-teal-600 flex items-center"
          >
            <FaArrowLeft className=" mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{singleJob.type}</div>
                <h1 className="text-3xl font-bold mb-4">{singleJob.title}</h1>
                <div className="text-orange-700 mb-4 flex align-middle justify-center md:justify-start">
                  <FaLocationArrow className="  mr-2 " />

                  {singleJob.location}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-teal-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{singleJob.description}</p>

                <h3 className="text-teal-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-4">{singleJob.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{singleJob.company.name}</h2>

                <p className="my-2">{singleJob.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {singleJob.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {singleJob.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${singleJob.id}`}
                  className="bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  onClick={() => onJobDelete(singleJob.id)}
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// Function to fetch data
const JobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
};

export { JobPage as default, JobLoader };
