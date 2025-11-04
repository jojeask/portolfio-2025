import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import appPlaceholder1 from "@/assets/app-placeholder-1.jpg";
import appPlaceholder2 from "@/assets/app-placeholder-2.jpg";
import appPlaceholder3 from "@/assets/app-placeholder-3.jpg";
import appPlaceholder4 from "@/assets/app-placeholder-4.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const projects = [
    {
      title: "[App Name 1]",
      description: "[Brief description of your app - what problem it solves, key features, target audience. Replace this placeholder text with your actual app description.]",
      image: appPlaceholder1,
      images: [appPlaceholder1, appPlaceholder2, appPlaceholder3],
      tags: ["React Native", "iOS", "Android"],
      liveUrl: "#",
      githubUrl: "#",
      detailedDescription: "[Add more detailed information about this project here - the development process, challenges faced, solutions implemented, etc.]",
      features: [
        "[Feature 1 - describe a key feature]",
        "[Feature 2 - describe another feature]",
        "[Feature 3 - describe another feature]"
      ],
      technologies: ["React Native", "Redux", "Firebase", "TypeScript"]
    },
    {
      title: "[App Name 2]",
      description: "[Brief description of your app - what problem it solves, key features, target audience. Replace this placeholder text with your actual app description.]",
      image: appPlaceholder2,
      images: [appPlaceholder2, appPlaceholder1, appPlaceholder4],
      tags: ["Flutter", "Firebase", "UI/UX"],
      liveUrl: "#",
      githubUrl: "#",
      detailedDescription: "[Add more detailed information about this project here - the development process, challenges faced, solutions implemented, etc.]",
      features: [
        "[Feature 1 - describe a key feature]",
        "[Feature 2 - describe another feature]",
        "[Feature 3 - describe another feature]"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Provider"]
    },
    {
      title: "[App Name 3]",
      description: "[Brief description of your app - what problem it solves, key features, target audience. Replace this placeholder text with your actual app description.]",
      image: appPlaceholder3,
      images: [appPlaceholder3, appPlaceholder4, appPlaceholder1],
      tags: ["Swift", "iOS", "Core Data"],
      liveUrl: "#",
      githubUrl: "#",
      detailedDescription: "[Add more detailed information about this project here - the development process, challenges faced, solutions implemented, etc.]",
      features: [
        "[Feature 1 - describe a key feature]",
        "[Feature 2 - describe another feature]",
        "[Feature 3 - describe another feature]"
      ],
      technologies: ["Swift", "SwiftUI", "Core Data", "Combine"]
    },
    {
      title: "[App Name 4]",
      description: "[Brief description of your app - what problem it solves, key features, target audience. Replace this placeholder text with your actual app description.]",
      image: appPlaceholder4,
      images: [appPlaceholder4, appPlaceholder2, appPlaceholder3],
      tags: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      detailedDescription: "[Add more detailed information about this project here - the development process, challenges faced, solutions implemented, etc.]",
      features: [
        "[Feature 1 - describe a key feature]",
        "[Feature 2 - describe another feature]",
        "[Feature 3 - describe another feature]"
      ],
      technologies: ["React Native", "Node.js", "Express", "MongoDB"]
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <ProjectCard {...project} onClick={() => handleProjectClick(project)} />
            </div>
          ))}
        </div>
      </div>

      <ProjectDetail 
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
