import Navbar from "../components/Navbar";
import Main from "../components/explore/Main";
import Hero from "../components/explore/Hero";
import { useParams } from "react-router-dom";

export default function ExplorePage() {
    const { profileName } = useParams();
    
    return (
        <div>
            <Navbar />
            <Hero profileName={profileName} />
            <Main profileName={profileName} />
        </div>
    );
}