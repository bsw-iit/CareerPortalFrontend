import Navbar from "../../components/Navbar";
import Hero from "../../components/explore/Hero_modified";
import Body from "../../components/explore/SDEexploreBody";

export default function SDEexplore() {
  return (
    <div>
      <Navbar />
      <Hero bg="../src/assets/explore/sde-home-bg.svg" heading="SDE" title="Explore different career streams!" />
      <Body />
    </div>
  );
}
