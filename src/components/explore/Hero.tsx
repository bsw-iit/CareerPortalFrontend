import React from "react"
import profileData from "../../assets/profiles.json";

export default function Hero({profileName}: {profileName: string|undefined}) {
    const profile = profileData[profileName as keyof typeof profileData];

    return (
        <div className="h-screen flex  relative overflow-hidden md:bg-transparent bg-[#133748]">
            <Background bg_image={profile.bg_image} />
            <div className="flex flex-col text-center justify-center items-center gap-[6px] text-white  md:pl-[10vw] md:pt-[10vh] p-2">
                <img src="/logo.png" alt="" className="md:hidden w-[60%] mb-4"/>
                <div>
                    <h1 className="text-6xl font-bold font-[Poppins] md:flex ">{splitAndRender(profile.name)}</h1>
                    <p className=" text-2xl max-w-[40ch] text-left text-balance">
                        {profile.name2}
                    </p>
                </div>
            </div>
        </div>
    );
}

function Background({ bg_image }: { bg_image: string }) {
    //I had to make this because somehow when I was exporting the svg from figma, the opacity of the svg was litte off
    return (
        <div className="hidden md:flex">
            <img
                src={bg_image}
                alt="Background Image"
                className="absolute w-full -z-10  object-cover h-full"
            />{" "}
            <img
                src={bg_image}
                alt="Background Image"
                className="absolute w-full -z-10  object-cover h-full"
            />{" "}
            <img
                src={bg_image}
                alt="Background Image"
                className="absolute w-full -z-10  object-cover h-full"
            />{" "}
            <img
                src={bg_image}
                alt="Background Image"
                className="absolute w-full -z-10  object-cover h-full"
            />{" "}
            <img
                src={bg_image}
                alt="Background Image"
                className="absolute w-full -z-10  object-cover h-full"
            />{" "}
        </div>
    );
}
function splitAndRender(text: string): JSX.Element {
    const parts = text.split("!!");

    return (
        <div
            className={parts.length > 1 ? "text-left" : "text-center"}
            style={{ lineHeight: "70px" }}
        >
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {part}
                </React.Fragment>
            ))}
        </div>
    );
}

