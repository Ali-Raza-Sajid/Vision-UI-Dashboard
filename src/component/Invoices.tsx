import { BsCalendar2CheckFill, BsExclamationCircle, BsThreeDots } from "react-icons/bs";
import CurlyLine from "../icons/CurlyLine";
import { PiBuildingsFill } from "react-icons/pi";
import { BiDownArrowCircle, BiSolidPencil, BiUpArrowCircle } from "react-icons/bi";
import { SiMastercard, SiVisa } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";

interface Invoice {
  date: string;
  order: string;
  price: string;
}
interface Billing {
  name: string;
  company: string;
  mail: string;
  VAT: string;
}
interface Transaction {
  company: string;
  date: string;
  amount: string;
  trend: "true" | "false" | "pending";
  day: boolean;
}

const invoices: Invoice[] = [
  { date: "March, 01, 2020", order: "#MS-415646", price: "$180" },
  { date: "February, 10, 2021", order: "#RV-126749", price: "$250" },
  { date: "April, 05, 2020", order: "#FB-212562", price: "$560" },
  { date: "June, 25, 2019", order: "#QW-103578", price: "$120" },
  { date: "March, 01, 2019", order: "#AR-803481", price: "$300" },
];

const billing: Billing[] = [
  { name: "Oliver Liam", company: "Viking Burrito", mail: "oliver@burrito.com", VAT: "FRB1235476" },
  { name: "Oliver Liam", company: "Viking Burrito", mail: "oliver@burrito.com", VAT: "FRB1235476" },
  { name: "Oliver Liam", company: "Viking Burrito", mail: "oliver@burrito.com", VAT: "FRB1235476" },
];

const transactions: Transaction[] = [
  { company: "Netflix", date: "25 August 2025 at 12:45 PM", amount: "-$2500", trend: "false", day: true },
  { company: "Apple", date: "25 August 2025 at 6:14 AM", amount: "+$2500", trend: "true", day: true },
  { company: "Stripe", date: "24 August 2025 at 9:54 AM", amount: "+$800", trend: "true", day: false },
  { company: "HubSpot", date: "24 August 2025 at 9:54 AM", amount: "+$1700", trend: "true", day: false },
  { company: "WebFow", date: "24 August 2025 at 9:54 AM", amount: "Pending", trend: "pending", day: false },
  { company: "Microsoft", date: "24 August 2025 at 9:54 AM", amount: "+$800", trend: "false", day: false },
];

const Invoices = () => {
  return (
    <section className="grid grid-cols-7 md:gap-[.75vw] gap-2 md:mb-[1.25vw] mb-4 w-full">
      
      {/* CREDIT CARD & BALANCE */}
      <section className="grid md:grid-cols-4 grid-cols-7 md:col-span-4 col-span-7 md:gap-[.75vw] gap-2">
        
        {/* Card */}
        <article className="md:col-span-2 aspect-video col-span-7 h-full w-full bg-cover rounded-2xl bg-[url('/Card.webp')] md:p-[1.5vw] p-4 flex flex-col justify-between transition-all duration-300  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)] ">
          <header className="flex items-center justify-between">
            <h2 className="md:text-[1.1vw] text-sm font-medium">Vision UI</h2>
            <div className="flex">
              <span className="md:h-[2vw] h-6  md:w-[2vw] w-6 bg-[#ffffff3a] rounded-full "></span>
              <span className="md:h-[2vw] h-6  md:w-[2vw] w-6 bg-[#ffffff3a] rounded-full md:-ml-[.75vw] -ml-3 "></span>
            </div>
          </header>
          <div>
            <h1 className="font-bold md:text-[1.25vw] text-lg md:pb-[.4vw] pb-1">
              7812 2139 0823 XXXX
            </h1>
            <div className="flex items-center md:gap-[1.25vw] gap-4">
              <aside>
                <h3 className="font-medium md:text-[.7vw] text-xs text-secondary">VALID THRU</h3>
                <p className="md:text-[1.1vw] text-sm font-medium">05/24</p>
              </aside>
              <aside>
                <h3 className="font-medium md:text-[.7vw] text-xs text-secondary">CVV</h3>
                <p className="md:text-[1.1vw] text-sm font-medium">09X</p>
              </aside>
            </div>
          </div>
        </article>

        {/* Balance */}
        <article className="md:col-span-2 col-span-7  rounded-2xl md:p-[1.5vw] p-4 bg-brand ">
          <div className="md:py-[.75vw]  md:px-[1vw] p-4 md:rounded-2xl rounded bg-[#060b27c4] ">
            <header className="flex justify-between items-center ">
              <h3 className="md:text-base md:text-[.85vw] text-xs">Credit Balance</h3>
              <BsThreeDots className="md:text-[1.25vw] text-sm" />
            </header>
            <div className="flex items-center justify-between">
              <h2 className="md:text-[1.5vw] text-xl font-bold tracking-widest">$25,215</h2>
              <CurlyLine className="md:h-[3vw] h-8 md:w-[5vw] w-12" />
            </div>
          </div>
          <p className="md:text-[1vw] text-xs md:pt-[.75vw] pt-2 text-secondary">Newest</p>
          <div className="flex items-center md:mt-[.4vw] mt-1 justify-between">
            <div className="flex items-center md:gap-[.75vw] gap-2">
              <PiBuildingsFill className="text-green-600 md:text-[3vw] text-3xl md:px-[.75vw] px-2 bg-hover rounded-full" />
              <div>
                <h3 className="md:text-base md:text-[1vw] text-xs font-semibold">Bill & Taxes</h3>
                <p className="md:text-[1vw] text-xs text-secondary">Today, 16:36</p>
              </div>
            </div>
            <h3 className="md:text-base md:text-[1vw] text-xs font-semibold">-$154.50</h3>
          </div>
        </article>

        {/* Payment Method */}
        <article className="md:col-span-4 col-span-7 rounded-2xl md:p-[1.5vw] p-4 bg-brand">
          <header className="flex items-center justify-between">
            <h2 className="md:text-[1.25vw] text-sm">Payment Method</h2>
            <button className="md:text-[1vw] text-xs rounded-full md:px-[1.5vw] px-2 md:py-[.4vw] py-1 bg-primary">
              ADD A NEW CARD
            </button>
          </header>
          <ul className="grid md:grid-cols-2 md:gap-[.75vw] gap-2 md:mt-[.4vw] mt-2">
            <li className="flex items-center bg-hover rounded-full shadow-md shadow-[#ffffff46] justify-between md:p-[.75vw] p-2">
              <div className="flex items-center">
                <SiMastercard className=" md:text-[1.5vw] text-lg font-semibold" />
                <span className="md:text-base md:text-[1vw] text-xs font-semibold md:px-[.75vw] px-2">
                  7812 2139 0823 XXXX
                </span>
              </div>
              <BiSolidPencil className=" md:text-[1.25vw] text-base font-semibold" />
            </li>
            <li className="flex items-center bg-hover rounded-full shadow-md shadow-[#ffffff46] justify-between md:p-[.75vw] p-2">
              <div className="flex items-center">
                <SiVisa className=" md:text-[1.5vw] text-lg font-semibold" />
                <span className="md:text-base md:text-[1vw] text-xs font-semibold md:px-[.75vw] px-2">
                  7812 2139 0823 XXXX
                </span>
              </div>
              <BiSolidPencil className=" md:text-[1.25vw] text-base font-semibold" />
            </li>
          </ul>
        </article>
      </section>

      {/* INVOICES LIST */}
      <section className="md:col-span-3 col-span-7 rounded-2xl md:p-[1.5vw] p-4 bg-brand">
        <header className="flex items-center justify-between md:pb-[1.15vw] pb-3">
          <h2 className="md:text-[1.25vw] text-sm">Invoices</h2>
          <button className="md:text-[1vw] text-xs rounded-full md:px-[1.5vw] px-2 md:py-[.4vw] py-1 bg-primary">
            VIEW ALL
          </button>
        </header>
        <ul>
          {invoices.map((invoice, idx) => (
            <li key={idx} className="flex items-center md:p-[.4vw] hover:bg-hover rounded-md p-1 justify-between">
              <div>
                <h3 className="md:text-base md:text-[1vw] text-xs font-semibold">{invoice.date}</h3>
                <p className="md:text-[1vw] text-xs text-secondary">{invoice.order}</p>
              </div>
              <div className="flex items-center md:text-[.75vw] text-xs text-secondary">
                <span className="md:mr-[.4vw] mr-1">{invoice.price}</span>
                <IoDocumentText className="md:mt-[.1vw] mt-[3px] md:mx-[.4vw] mx-1" />
                <span>PDF</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* BILLING INFO */}
      <section className="md:col-span-4 col-span-7 rounded-2xl md:p-[1.5vw] p-4 bg-brand">
        <h2 className="md:text-[1.25vw] text-sm md:pb-[.75vw] pb-2">Billing Information</h2>
        <ul>
          {billing.map((bill, idx) => (
            <li key={idx} className="flex items-start md:mt-[.75vw] mt-2 justify-between hover:bg-hover bg-gradient-to-br from-[rgba(34,36,56,0.3)] via-transparent to-[rgba(8,12,32,0.24)] rounded-md md:p-[.75vw] p-2">
              <div>
                <h3 className="md:text-base md:text-[1vw] text-xs md:mb-[.4vw] mb-1 font-bold">{bill.name}</h3>
                <p className="md:text-[1vw] text-xs text-secondary">
                  Company Name: {bill.company}
                  <br />
                  Email Address: {bill.mail}
                  <br />
                  VAT Number: {bill.VAT}
                </p>
              </div>
              <div className="flex items-center md:text-[.75vw] text-xs text-secondary">
                <RiDeleteBinFill className="md:mt-[.1vw] mt-[3px] md:mx-[.4vw] mx-1 text-red-600" />
                <span className="md:mr-[.4vw] mr-1 text-red-600">DELETE</span>
                <BiSolidPencil className="md:mt-[.1vw] mt-[3px] md:mx-[.4vw] mx-1" />
                <span>EDIT</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* TRANSACTIONS */}
      <section className="md:col-span-3 col-span-7 rounded-2xl md:p-[1.5vw] p-4 bg-brand">
        <header className="flex items-center justify-between md:pb-[.75vw] pb-2">
          <h2 className="md:text-[1.25vw] text-sm">Your Transactions</h2>
          <div className="flex items-center md:text-[.75vw] text-xs text-secondary">
            <BsCalendar2CheckFill className="md:mt-[.1vw] mt-[3px] md:mx-[.4vw] mx-1" />
            <span>23 - 30 March 2020</span>
          </div>
        </header>

        <h3 className="md:text-[.75vw] text-xs text-secondary">NEWEST</h3>
        <ul>
          {transactions.filter((t) => t.day).map((item, idx) => (
            <li key={idx} className="flex items-center md:p-[.4vw] hover:bg-hover rounded-md p-1 justify-between">
              <aside className="flex items-center md:gap-[.75vw] gap-2">
                {item.trend === "true" && <BiUpArrowCircle className="md:text-[2.5vw] text-3xl text-green-600 font-thin" />}
                {item.trend === "false" && <BiDownArrowCircle className="md:text-[2.5vw] text-3xl text-red-600 font-thin" />}
                {item.trend === "pending" && <BsExclamationCircle className="md:text-[2.5vw] text-3xl text-secondary font-thin" />}
                <div>
                  <h3 className="md:text-base md:text-[1vw] text-xs font-semibold">{item.company}</h3>
                  <p className="md:text-[1vw] text-xs text-secondary">{item.date}</p>
                </div>
              </aside>
              <p className={`md:text-[.75vw] text-xs ${item.trend === "true" ? "text-green-600" : item.trend === "false" ? "text-red-600" : "text-secondary"}`}>
                {item.amount}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="md:text-[.75vw] text-xs text-secondary md:mt-[.75vw] mt-2">PREVIOUS</h3>
        <ul>
          {transactions.filter((t) => !t.day).map((item, idx) => (
            <li key={idx} className="flex items-center md:p-[.4vw] hover:bg-hover rounded-md p-1 justify-between">
              <aside className="flex items-center md:gap-[.75vw] gap-2">
                {item.trend === "true" && <BiUpArrowCircle className="md:text-[2.5vw] text-3xl text-green-600 font-thin" />}
                {item.trend === "false" && <BiDownArrowCircle className="md:text-[2.5vw] text-3xl text-red-600 font-thin" />}
                {item.trend === "pending" && <BsExclamationCircle className="md:text-[2.5vw] text-3xl text-secondary font-thin" />}
                <div>
                  <h3 className="md:text-base md:text-[1vw] text-xs font-semibold">{item.company}</h3>
                  <p className="md:text-[1vw] text-xs text-secondary">{item.date}</p>
                </div>
              </aside>
              <p className={`md:text-[.75vw] text-xs ${item.trend === "true" ? "text-green-600" : item.trend === "false" ? "text-red-600" : "text-secondary"}`}>
                {item.amount}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Invoices;
