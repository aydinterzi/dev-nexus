import ProjectCard from "@/components/ProjectCard";
import FilterSidebar from "@/components/FilterSidebar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const mockProjects = [
  {
    title: "React Geliştirici Aranıyor",
    description:
      "React ile front-end geliştirme yapacak takım arkadaşı aranıyor.",
    skills: ["JavaScript", "React", "CSS"],
    type: "Freelance",
    location: "Uzaktan",
  },
  {
    title: "Node.js Backend Geliştirici",
    description: "Node.js konusunda deneyimli backend geliştirici arıyoruz.",
    skills: ["JavaScript", "Node.js", "Express"],
    type: "Full-time",
    location: "İstanbul",
  },
  {
    title: "Full Stack Geliştirici",
    description:
      "Hem front-end hem back-end geliştirme yapacak full stack geliştirici.",
    skills: ["JavaScript", "React", "Node.js"],
    type: "Part-time",
    location: "Ankara",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex">
      <MaxWidthWrapper>
        <div className="flex flex-row min-h-screen">
          {/* Filter Sidebar */}
          <FilterSidebar />
          {/* Project List */}
          <div className="flex-grow p-8">
            <h1 className="text-2xl font-bold mb-6">Projeler</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  type={project.type}
                  location={project.location}
                />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
