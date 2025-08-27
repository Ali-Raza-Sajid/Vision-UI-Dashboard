import { IoMdArrowForward } from "react-icons/io";
import CarInformation from "../component/CarInformation";
import ProfileInformation from "../component/ProfileInformation";
import PlatformSettings from "../component/PlatformSetting";
import Projects from "../component/Projects";
import ProfileHeader from "../component/ProfileHeader";

const Profile = () => {
  return (
    // <section className="grid grid-cols-7 md:gap-[.75vw] gap-2 md:mb-[1.25vw] mb-4 w-full">
    <section className="grid grid-cols-4 md:pb-[1.25vw] pb-4 md:gap-[.75vw] gap-2">
      <ProfileHeader/>
      <div className="md:col-span-1 aspect-square col-span-2 h-full w-full bg-cover rounded-2xl bg-[url('/Profile-Card.webp')] md:p-[1.5vw] p-4 flex flex-col justify-between transition-all duration-300  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)] ">
        <div>
          <h1 className="font-bold md:text-[1.9vw] text-2xl md:pb-[.4vw] pb-1">
            Welcome back!
          </h1>
          <h3 className="font-medium md:text-[1vw] text-xs text-secondary">
            Nice to see you again! Mark Zuckerberg
          </h3>
        </div>
        <div className="flex items-center">
          <h2 className="md:text-[1.1vw] text-sm font-medium">Tap to record</h2>
          <IoMdArrowForward />
        </div>
      </div>
      <div className=" md:col-span-2 md:block hidden ">
        <CarInformation/>
      </div>
      <div className="col-span-2 md:hidden block">
        <ProfileInformation/>
      </div>
      <div className="col-span-4 md:hidden block ">
        <CarInformation/>
      </div>
      <div className=" md:col-span-1 md:block hidden ">
        <ProfileInformation/>
      </div>

    <PlatformSettings/>
    <Projects/>
    
    </section>
    // </section>
  );
};

export default Profile;
