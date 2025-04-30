import { Link } from "react-router-dom";

const ManageJob = ({ getID }) => {
  return (
    <>
      {" "}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold mb-6">Manage Job</h3>
        <Link
          to={`/edit-job/${getID}`}
          className="bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >
          Update Job
        </Link>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
          onClick={() => onJobDelete(getID)}
        >
          Delete Job
        </button>
      </div>
    </>
  );
};

export default ManageJob;
