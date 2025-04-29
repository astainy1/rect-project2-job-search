import { useState, useEffect } from "react";
import Alljobs from "./JobsList";
import PreLoader from "./PreLoader";
import Viewjobs from "../components/Viewjobs";
const JobListing = ({ isHome = false}) => {
  const [Job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const JobsURL = isHome
      ? "/api/jobs?_limit=3"
      : "/api/jobs";

    try {
      const fetchAllJobs = async () => {
        const response = await fetch(JobsURL);
        const data = await response.json();
        setJob(data);
      };

      fetchAllJobs();
    } catch (error) {
      console.error("Unexpected error occured.", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="bg-teal-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-900 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <PreLoader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <>
              {Job.map((job) => (
                <Alljobs key={job.id} job={job} />
              ))}
            </>
          </div>
        )}
      </div>
      {isHome ? <Viewjobs text="View All Jobs" /> : ''}
    </section>
  );
};

export default JobListing;
