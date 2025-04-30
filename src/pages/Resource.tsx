import Navbar from "../components/Navbar";
import Main from "../components/Resource/Main";
import Hero from "../components/Resource/Hero";
import { useParams } from "react-router-dom";

export default function ResourcePage() {
    const { profileName } = useParams();
    
    return (
        <div>
            <Navbar />
            <Hero profileName={profileName} />
            <Main profileName={profileName}/>
        </div>
    );
}
