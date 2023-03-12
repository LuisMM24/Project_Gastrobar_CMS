import Header from "../components/organism/Header/Header";

const withHeader = (WrappedComponent: React.FC) => {
  return () => (
    <>
      <Header />
      {<WrappedComponent />}
    </>
  );
};

export default withHeader;
