import ProjectCard from "./ProjectCard";
import appPlaceholder1 from "@/assets/app-placeholder-1.jpg";
import appPlaceholder2 from "@/assets/app-placeholder-2.jpg";
import appPlaceholder3 from "@/assets/app-placeholder-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "[App Name 1]",
      description: "[Brief description of your app - what problem it solves, key features, target audience. Replace this placeholder text with your actual app description.]",
      image: appPlaceholder1,
      tags: ["React Native", "iOS", "Android"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "[App Name 2]",
      description: "[Brief description of your app - what problem it solves, key features, target audience. Replace this placeholder text with your actual app description.]",
      image: appPlaceholder2,
      tags: ["Flutter", "Firebase", "UI/UX"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "[App Name 3]",
      description: "[Brief description of your app - what problem it solves, key features, target audience. Replace this placeholder text with your actual app description.]",
      image: appPlaceholder3,
      tags: ["Swift", "iOS", "Core Data"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 container mx-auto px-4">
      <div className="space-y-12">
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            [Replace with your projects intro - e.g., "A selection of mobile applications I've built, showcasing my expertise in cross-platform development."]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
