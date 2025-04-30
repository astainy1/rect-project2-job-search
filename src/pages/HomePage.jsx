import Hero from "../components/Hero";
import JobListing from "../components/JobListings";

import HomeCards from "../components/cards/HomeCards";

const HomePage = () => {
  return (
    <>
      <Hero
        supTitle="Find the React Jobs that suit your skills and needs."
        mainTitle="Liberia Developers Jobs"
      />
      <HomeCards />
      <JobListing isHome={true} />

    </>
  );
};

export default HomePage;
