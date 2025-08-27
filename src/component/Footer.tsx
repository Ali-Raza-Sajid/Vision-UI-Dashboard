const Footer = () => {
  return (
    <section className="w-full md:text-[1.9vw] text-2xl md:px-[3vw] px-4 md:mb-[1.5vw] mb-2 ">
      <div className="flex items-center justify-between md:font-medium md:text-[1vw] text-xs">
            <h2>
                Crafted by Ali Raza Sajid with mentorship & expertise from <a className="border-b " href="http://sahalimran.com/" target="blank">Sahal Imran</a>.
                </h2>
            <aside className="md:flex hidden w-[15vw] justify-between">
                <span>Blogs</span>
                <span>About</span>
                <span>Contact</span>
            </aside>
          </div>
    </section>
  );
};

export default Footer;
