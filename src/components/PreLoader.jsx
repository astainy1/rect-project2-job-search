import { BounceLoader, ClipLoader, MoonLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "teal",
};
const PreLoader = ({ loading }) => {
  return (
    <div className="sweet-loading z-50 h-[100vh]">
      <BounceLoader
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default PreLoader;
