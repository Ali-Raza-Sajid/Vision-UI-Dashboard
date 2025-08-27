import { FaFacebook, FaInstagram, FaSnapchat, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const ProfileInformation = () => {
  return (
    <section className="h-full w-full bg-cover rounded-2xl bg-brand md:p-[1.5vw] p-4">
      <header>
        <h2 className="md:text-[1vw] text-xs  font-semibold ">
          Profile Informations
        </h2>
        <h3 className="font-medium md:text-[.85vw] text-[7px] md:my-[.75vw] my-2 text-secondary">
          Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </h3>
        <div className="lg:h-[.15vw] h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />
        <h3 className="font-medium md:text-[.85vw] text-[7px] md:my-[.6vw] mt-2 mb-1 text-secondary">
          Full Name: <span className="text-white">Mark Zuckerberg</span>
        </h3>
        <h3 className="font-medium md:text-[.85vw] text-[7px] md:my-[.6vw] my-1 text-secondary">
          Mobile: <span className="text-white">(44) 123 1234 123</span>
        </h3>
        <h3 className="font-medium md:text-[.85vw] text-[7px] md:my-[.6vw] my-1 text-secondary">
          Email: <span className="text-white">mark.zuckerberg@example.com</span>
        </h3>
        <h3 className="font-medium md:text-[.85vw] text-[7px] md:my-[.6vw] my-1 text-secondary">
          Location: <span className="text-white">California, USA</span>
        </h3>
        <div className="flex font-medium md:text-[.85vw] text-[7px] md:my-[.6vw] my-1 items-center md:gap-[.75vw] gap-2">
          <h3 className="text-secondary">Social Media:</h3>
          <FaFacebook className="hover:scale-140"/>
          <FaTwitter className="hover:scale-140"/>
          <FaInstagram className="hover:scale-140"/>
          <FaTelegram className="hover:scale-140"/>
          <FaYoutube className="hover:scale-140"/>
          <FaTiktok className="hover:scale-140"/>
          <FaSnapchat className="hover:scale-140"/>
        </div>
      </header>
    </section>
  );
};

export default ProfileInformation;
