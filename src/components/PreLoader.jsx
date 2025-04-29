const customCss = {
  display: "block",
  margin: "100px auto",
  text: "center"
};
const PreLoader = ({ loading }) => {
  return (
    <div className={customCss} size={150} color="teal">
      Loading...
    </div>
  );
};

export default PreLoader;
