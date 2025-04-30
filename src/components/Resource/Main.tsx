import profileData from "../../assets/profiles.json";

const TimelinePage = ({ profileName }: { profileName: string | undefined }) => {  
  const profile = profileData[profileName as keyof typeof profileData];

  return (  
    <div className="w-full bg-[#FFFFFF] p-8">
      {profile?.guide?.html && (
        <div
          dangerouslySetInnerHTML={{ __html: profile.guide.html }}
        />
      )}
    </div>
  );  
};

export default TimelinePage;
