import profileData from "../../assets/profiles.json";

interface Profile {
    name3: string;
    name4: string;
    bg_image: string;
    bg_images?: string;
    // Add all other fields here...
}
const typedProfileData: Record<string, Profile> = profileData;

export default function Hero({ profileName }: { profileName: string | undefined }) {
    const profile = typedProfileData[profileName as keyof typeof typedProfileData];

    return (
        <div className="h-screen flex relative overflow-hidden md:bg-transparent bg-[#133748]">
            <Background bg_images={profile.bg_images || 'profile.bg_image'} />
            <div className="flex flex-col text-center justify-center items-center gap-[6px] text-white md:pl-[10vw] md:pt-[10vh] p-2">
                <img src="/logo.png" alt="" className="md:hidden w-[60%] mb-4" />
                <div>
                    <h1 className="text-6xl font-bold font-[Poppins] md:flex">{profile.name3}</h1>
                    <p className="text-2xl max-w-[40ch] text-left text-balance  font-light">
                        {profile.name4}
                    </p>
                </div>
            </div>
        </div>
    );
}

function Background({ bg_images }: { bg_images: string }) {
    // Updated to use `bg_image1` instead of `bg_image`
    return (
        <div className="hidden md:flex">
            <img
                src={bg_images}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />
            <img
                src={bg_images}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />
            <img
                src={bg_images}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />
            <img
                src={bg_images}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />
            <img
                src={bg_images}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />
        </div>
    );
}
