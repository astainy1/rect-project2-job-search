import { Link } from "react-router-dom";
const Viewjobs = (props) => {
  return (
    <>
      <section className="m-auto max-w-lg my-10 px-6 ">
        <Link
          to="jobs"
          className=" mb-60 block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          {props.text}
        </Link>
      </section>
    </>
  );
};

export default Viewjobs;
