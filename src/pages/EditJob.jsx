import { useState, useEffect } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditJob = ({ submitEditedJob }) => {
  // const [editedJob, setEditedJob] = useState([]);
  const { id } = useParams();
  const redirect = useNavigate();

  const singleJobEdit = useLoaderData();
  //Fetch the data from Json file base on the selected id
  // useEffect(() => {
  //   try {
  //     const editFetchJob = async () => {
  //       const res = await fetch(`/api/jobs/${id}`);
  //       const data = await res.json();
  //       // console.log(data);
  //       setEditedJob(data);
  //     };
  //     editFetchJob();
  //   } catch (error) {
  //     console.log("Error fetching job to edit: ", error);
  //   }
  // }, []);

  // console.log(singleJobEdit);

  const [type, setType] = useState(singleJobEdit.type);
  const [jobListingName, setJobListingName] = useState(singleJobEdit.title);
  const [description, setDescription] = useState(singleJobEdit.description);
  const [salary, setSalary] = useState(singleJobEdit.salary);
  const [location, setLocation] = useState(singleJobEdit.location);
  const [companyName, setCompanyName] = useState(singleJobEdit.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    singleJobEdit.company.description
  );
  const [contactEmail, setContactEmail] = useState(
    singleJobEdit.company.contactEmail
  );
  const [contactPhone, setContactPhone] = useState(
    singleJobEdit.company.contactPhone
  );
  const editJob = (e) => {
    e.preventDefault();

    const editedJobs = {
      id,
      title: jobListingName,
      type,
      location,
      description,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    console.log(editedJobs);
    submitEditedJob(editedJobs);
    toast.success("Job updated successfully!");
    redirect(`/jobs/${id}`);
  };

  console.log(toast);
  return (
    <>
      <section className="bg-teal-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded m-4 md:m-0">
            <form onSubmit={editJob}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Update Job
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="custom-border rounded w-full py-2 px-3"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option className="option" value="Full-Time">
                    Full-Time
                  </option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="custom-border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  required
                  value={jobListingName}
                  onChange={(e) => setJobListingName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="custom-border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="custom-border rounded w-full py-2 px-3"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="custom-border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="custom-border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  className="custom-border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="custom-border rounded w-full py-2 px-3"
                  placeholder="Email address htmlFor applicants"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="custom-border rounded w-full py-2 px-3"
                  placeholder="Optional phone htmlFor applicants"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="add-job-btn text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditJob;
