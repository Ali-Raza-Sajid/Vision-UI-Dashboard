import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Satisfaction from "./Satisfaction";
import { IoMdArrowForward } from "react-icons/io";
import Tracking from "./shared/Tracking";

const WelcomeRow = () => {
  return (
    <section
      aria-label="Welcome and referral tracking"
      className="grid grid-cols-5 md:gap-[.75vw] gap-2 md:mb-[1.25vw] mb-4 w-full"
    >
      {/* Welcome Card */}
      <article
        className="lg:col-span-2 aspect-video col-span-5 h-full w-full bg-cover rounded-2xl bg-[url('/Profile-Background.webp')] md:p-[1.5vw] p-4 flex flex-col justify-between transition-all duration-300  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)]"
        aria-label="Welcome card"
      >
        <header>
          <p className="font-medium md:text-[1vw] text-xs text-secondary">
            Welcome back,
          </p>
          <h2 className="font-bold md:text-[1.9vw] text-2xl md:pb-[.4vw] pb-1">
            Mark Zuckerberg
          </h2>
          <p className="font-medium md:text-[1vw] text-xs text-secondary">
            Glad to see you again! <br /> Ask me anything.
          </p>
        </header>
        <footer className="flex items-center md:text-[1.1vw] text-sm md:gap-[.75vw] gap-2">
          <span className="font-medium">
            Tap to record
          </span>
          <IoMdArrowForward className="md:mt-.4vw]" aria-hidden />
        </footer>
      </article>

      {/* Satisfaction Card */}
      <Satisfaction percentage={95} />

      {/* Referral Tracking */}
      <article className="lg:col-span-2 col-span-3 h-full w-full bg-cover rounded-2xl bg-brand md:p-[.75vw] p-2">
        <header className="flex items-center justify-between">
          <h2 className="md:text-[1vw] text-xs font-semibold">
            Referral Tracking
          </h2>
          <button aria-label="More options">
            <HiOutlineDotsHorizontal className="md:p-[.5vw] p-1 md:text-[1.9vw] text-2xl rounded-xl bg-hover" />
          </button>
        </header>

        <div className="flex md:flex-row flex-col-reverse justify-between h-[90%]">
          <aside className="flex mb-1 md:flex-col justify-center items-center md:w-1/2 md:gap-[.75vw] gap-2">
            <div className="md:px-[1.25vw] md:p-[.75vw] px-2 py-1 bg-[linear-gradient(126.97deg,#060C29_28.26%,rgba(4,12,48,0.5)_91.2%)] backdrop-blur-[120px] w-full md:rounded-xl rounded-md">
              <p className="font-medium md:text-[1vw] text-xs text-secondary">
                Invited
              </p>
              <p className="md:text-[1vw] text-xs font-semibold">
                145 people
              </p>
            </div>
            <div className="md:px-[1.25vw] md:p-[.75vw] px-2 py-1 bg-[linear-gradient(126.97deg,#060C29_28.26%,rgba(4,12,48,0.5)_91.2%)] backdrop-blur-[120px] w-full md:rounded-xl rounded-md">
              <p className="font-medium md:text-[1vw] text-xs text-secondary">
                Bonus
              </p>
              <p className="md:text-[1vw] text-xs font-semibold">
                1,465
              </p>
            </div>
          </aside>
          <Tracking score={93} desc="Total Score" title="Safety" />
        </div>
      </article>
    </section>
  );
};

export default WelcomeRow;
