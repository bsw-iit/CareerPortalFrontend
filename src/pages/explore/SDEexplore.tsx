import Navbar from "../../components/Navbar";
import Hero from "../../components/explore/Hero_modified";
import Body from "../../components/explore/SDEexploreBody";
import sdeHomeBg from "../../assets/explore/sde-home-bg.svg"; 

export default function SDEexplore() {
  return (
    <div>
      <Navbar />
      <Hero bg={sdeHomeBg} heading="SDE" title="Explore different career streams!" />
      <Body />
    </div>
  );
}
