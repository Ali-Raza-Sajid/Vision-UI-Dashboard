import ImageStack from "./shared/ImageStack";

const projects = [
  {
    projectNumber: "Project #1",
    title: "Urban Retreat",
    img: "Avatar1.webp",
    description: "A modern residential complex with sustainable design principles.",
    imageStackIndexes:[1,2,3],
  },
  {
    projectNumber: "Project #2",
    title: "Skyline Tower",
    img: "Avatar2.webp",
    description: "A high-rise office building with cutting-edge technology.",
    imageStackIndexes:[4,5,2],
  },
  {
    projectNumber: "Project #3",
    title: "Eco Village",
    img: "Avatar3.webp",
    description: "A community-focused green living space with eco-friendly materials.",
    imageStackIndexes:[5,1,3],
  },
];

const Projects = () => {
  return (
    <section className="h-full w-full md:col-span-3 col-span-4 bg-cover rounded-2xl bg-brand md:p-[1.5vw] mb-4 p-4">
      <header>
        <h2 className="md:text-[1.25vw] text-base font-semibold">
          Projects Overview
        </h2>
        <h3 className="font-thin md:text-[1vw] text-sm text-secondary">
          Architects design houses of steel and glass.
        </h3>
      </header>
      <section className="grid grid-cols-3 gap-4 md:mt-[.4vw] mt-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-auto w-full md:col-span-1 col-span-4 md:px-[.15vw] md:pt-[.3vw] p-1"
          >
            <img
              src={project.img}
              className="w-full rounded-xl aspect-video object-cover"
              alt={project.title}
            />
            <h3 className="font-medium md:text-[1vw] text-sm md:mt-[.7vw] mt-2 text-secondary">
              {project.projectNumber}
            </h3>
            <h2 className="md:text-[1vw] text-base font-semibold">
              {project.title}
            </h2>
            <h3 className="font-thin md:text-[1vw] text-sm text-secondary">
              {project.description}
            </h3>
            <div className="flex items-center md:-mb-[2vw] md:mt-[.75vw] mt-2 justify-between">
              <button className="md:text-[.8vw] text-sm md:py-[.4vw] py-1 md:px-[1.25vw] px-4 border hover:border-none hover:bg-primary rounded">
                VIEW ALL
              </button>
              <ImageStack indexes={project.imageStackIndexes} />
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;