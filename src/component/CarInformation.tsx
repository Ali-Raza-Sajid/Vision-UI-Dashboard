import { FaCar } from "react-icons/fa";
import BlueWave from "../icons/BlueWave";
// import Ellipse from "../icons/Ellipse";
import GreenWave from "../icons/GreenWave";
import { MdElectricBolt } from "react-icons/md";
import Tracking from "./shared/Tracking";

const CarInformation = () => {
  return (
    <section className="h-full w-full bg-cover rounded-2xl bg-brand md:p-[1.5vw] p-4">
      <header>
        <h2 className="md:text-[1vw] text-xs  font-semibold ">
          Car Information
        </h2>
        <h3 className="font-medium md:text-[1vw] text-xs  text-secondary">
          Hello! Mark Zuckerberg! Your car is ready.
        </h3>
      </header>

      <section className="flex md:h-[90%]">
        <aside className="  flex flex-col md:mp-[.75vw] mt-2 md:justify- justify-center w-1/3 md:h-full h-[25vh]">
            <Tracking score={68} title=<MdElectricBolt className="md:text-[1.75vw] md:-mt-[1vw] text-primary" /> desc="Current Level"/>
          <footer className="md:block hidden">
            <h2 className="md:text-[1vw]  text-xs text-center font-semibold ">
              0h 58m
            </h2>
            <h3 className="font-medium md:text-[1vw] text-xs text-center   text-secondary">
              Turn to full charge.
            </h3>
          </footer>
        </aside>
        <aside className="flex flex-col justify-center items-center w-2/3 md:mb-[1vw] md:px-[.75vw] px-2 md:gap-[.75vw] gap-2">
          <div className="flex w-full md:gap-[.75vw] gap-2">
            <aside
              className="md:px-4 md:p-[.75vw] px-2 py-1 bg-[linear-gradient(126.97deg,#060C29_28.26%,rgba(4,12,48,0.5)_91.2%)] backdrop-blur-[120px]
             w-full md:rounded-xl rounded-md flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium md:text-[1vw] text-xs  text-secondary">
                  Battery Health
                </h3>
                <h2 className="md:text-base md:text-[1vw] text-xs  font-semibold ">
                  76%
                </h2>
              </div>
              <FaCar className="md:text-[1.5vw] bg-primary rounded md:block hidden" />
            </aside>
            <aside
              className="md:px-4 md:p-[.75vw] px-2 py-1 bg-[linear-gradient(126.97deg,#060C29_28.26%,rgba(4,12,48,0.5)_91.2%)] backdrop-blur-[120px]
             w-full md:rounded-xl rounded-md flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium md:text-[1vw] text-xs  text-secondary">
                  Efficiency
                </h3>
                <h2 className="md:text-base md:text-[1vw] text-xs  font-semibold ">
                  + 20%
                </h2>
              </div>
              <GreenWave className="md:h-[3vw] md:w-[4.5vw] md:block hidden" />
            </aside>
          </div>
          <div className="flex w-full md:gap-[.75vw] gap-2">
            <aside
              className="md:px-4 md:p-[.75vw] px-2 py-1 bg-[linear-gradient(126.97deg,#060C29_28.26%,rgba(4,12,48,0.5)_91.2%)] backdrop-blur-[120px]
             w-full md:rounded-xl rounded-md flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium md:text-[1vw] text-xs  text-secondary">
                  Consumption
                </h3>
                <h2 className="md:text-base md:text-[1vw] text-xs  font-semibold ">
                  163W/km
                </h2>
              </div>
              <MdElectricBolt className="md:text-[1.5vw] bg-primary rounded md:block hidden" />
            </aside>
            <aside
              className="md:px-4 md:p-[.75vw] px-2 py-1 bg-[linear-gradient(126.97deg,#060C29_28.26%,rgba(4,12,48,0.5)_91.2%)] backdrop-blur-[120px]
             w-full md:rounded-xl rounded-md flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium md:text-[1vw] text-xs  text-secondary">
                  This Week
                </h3>
                <h2 className="md:text-base md:text-[1vw] text-xs  font-semibold ">
                  1.342km
                </h2>
              </div>
              <BlueWave className="md:h-[3vw] md:w-[4vw] md:block hidden" />
            </aside>
          </div>
        </aside>
      </section>

      <footer className="md:hidden block">
        <h2 className="md:text-[1vw] text-xs text-center font-semibold ">
          0h 58m
        </h2>
        <h3 className="font-medium md:text-[1vw] text-xs text-center   text-secondary">
          Turn to full charge.
        </h3>
      </footer>
    </section>
  );
};

export default CarInformation;
