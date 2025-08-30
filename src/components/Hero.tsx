type HeroProps = {
  bg: string;
  heading: string;
  title: string;
};



export default function Hero({bg, heading, title}: HeroProps) {
    return (
        <div className="h-screen flex  relative overflow-hidden md:bg-transparent bg-[#133748]">
            <Background bg = {bg}/>
            <div className="flex flex-col text-center justify-center items-center gap-[6px] text-white  md:pl-[10vw] md:pt-[10vh] p-2">
                <img src="/logo.png" alt="" className="md:hidden w-[60%] mb-4"/>
                <h1 className="text-4xl font-bold font-[Poppins] md:flex">{heading}</h1>
                <p className="max-w-[40ch] text-center text-balance">
                    {title}
                </p>
            </div>
        </div>
    );
}

function Background({bg}: {bg: string}) {
    return (
        <div className="hidden md:flex pt-20">
            <img
                src={bg}
                alt="Background Image"
                className="absolute w-full -z-10  object-cover h-full"
            />{" "}
            <img
                src={bg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover  h-full"
            />{" "}
            <img
                src={bg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />{" "}
            <img
                src={bg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />{" "}
            <img
                src={bg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover  h-full"
            />{" "}
            <img
                src={bg}
                alt="Background Image"
                className="absolute w-full -z-10 object-cover h-full"
            />
        </div>
    );
}
