import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import appPlaceholder1 from "@/assets/app-placeholder-1.jpg";
import appPlaceholder2 from "@/assets/app-placeholder-2.jpg";
import appPlaceholder3 from "@/assets/app-placeholder-3.jpg";
import mycrave1 from "@/assets/mycrave1.png";
import mycrave2 from "@/assets/mycrave2.png";
import mycrave3 from "@/assets/mycrave3.png";
import mycrave4 from "@/assets/mycrave4.png";
import nexuhubnews from "@/assets/nexuhubnews.png";
import nexuhubwiki from "@/assets/nexuhubwiki.png";
import nexuhubclass from "@/assets/nexuhubclass.png";
import papillonday from "@/assets/papillonday.png";
import papillonmonth from "@/assets/papillonmonth.png";
import papillonweek from "@/assets/papillonweek.png";
import papillontodo from "@/assets/papillontodo.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const projects = [
    {
      title: "Papillon",
      description: "Papillon is a simple and minimalist calendar and to-do app designed to help users stay organized and focused. Built for people with busy lives, it provides a clean and distraction-free way to plan tasks and manage daily routines efficiently. My task in this project was to create the ToDo View and funcitonality.",
      image: papillonday,
      images: [papillonday, papillonweek, papillonmonth, papillontodo],
      tags: ["React Native", "TypeScript", "Expo", "API Calls"],
      /*liveUrl: "#",*/
      /*githubUrl: "#",*/
      detailedDescription: "Papillon was my very first app project, a personal milestone where I brought my ideas to life using React Native and TypeScript. I wanted to create something meaningful: a simple and minimalist productivity app that could help people with busy lives stay organized without feeling overwhelmed.",
      features: [
        "Daily View – Organize your day with a clean, focused overview of today’s tasks and priorities.",
        "To-Do View – Add and manage tasks in a simple, distraction-free list designed for quick organization.",
        "Monthly View – Get the bigger picture and manage long-term tasks or deadlines."
      ],
      /*technologies: ["React Native", "API Calls", "Expo", "TypeScript"]*/
    },
    {
      title: "MyCrave",
      description: "MyCrave is a SwiftUI-based restaurant finder that helps users discover nearby dining spots using real-time location data. With an intuitive design and Google Maps integration, it makes finding the perfect place to eat simple and effortless.",
      image: mycrave1,
      images: [mycrave1, mycrave2, mycrave3, mycrave4],
      tags: ["Swift", "SwiftUI", "Google Maps", "Google Places"],
      liveUrl: "https://apps.apple.com/se/app/mycrave/id6741516126?l=en-GB",
      /*githubUrl: "#",*/
      detailedDescription: "MyCrave was developed using Swift and SwiftUI, integrating Google Maps and Google Places APIs to deliver a smooth and accurate restaurant-finding experience. The app automatically detects the user’s location and displays nearby restaurants, allowing searches to be refined with smart filters such as distance, rating, and price. My task in this project was to create the filtering functionality. I also added the option to remove location services.",
      features: [
        "Nearby Restaurants - Instantly find great places to eat near you.",
        "Smart Filters - Customize your search by distance, raiting & price.",
        "Save Favorites - Like and save the restaurants you love for quick access."
      ],
      /*technologies: ["Flutter", "Dart", "Firebase", "Provider"]*/
    },
    {
      title: "Nexuhub Campus",
      description: "Nexuhub Campus is an educational and collaboration platform built with Kotlin and Jetpack Compose, powered by Firebase for real-time data and scalability. Designed with clean MVVM architecture, the app enables students and educators to stay connected through features like a live newsfeed, collaborative wiki documentation, and efficient class management tools.",
      image: nexuhubnews,
      images: [nexuhubnews, nexuhubwiki, nexuhubclass],
      tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
      /*liveUrl: "#",*/
      /*githubUrl: "#",*/
      detailedDescription: "Nexuhub Campus was developed as a collaborative educational platform using Kotlin, Jetpack Compose, and Firebase as the real-time backend. The project focused on creating a scalable, data-driven app architecture built on clean MVVM patterns, ensuring maintainability and responsive UI updates.\n\nMy main responsibilities included implementing user authentication with validation, developing the profile page with settings, and contributing to various smaller improvements across the app. Working on Nexuhub Campus gave me valuable experience in integrating Firebase services, managing state within Jetpack Compose, and ensuring a seamless user experience across multiple features.",
      features: [
        "Live Newsfeed - Stay connected with real-time updates and announcements.",
        "Collaborative Wiki - Create and share documentation with classmates.",
        "Class Management - Efficient tools for organizing and managing educational content."
      ],
      /*technologies: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"]*/
    },
    {
    title: "Upcoming Project",
      description: "",
      image: appPlaceholder1,
      images: [appPlaceholder1, appPlaceholder2, appPlaceholder3],
      tags: ["", "", "", ""],
      /*liveUrl: "#",*/
      /*githubUrl: "#",*/
      detailedDescription: "",
      features: [],
      /*technologies: ["React Native", "TypeScript", "Expo", "API Calls"]*/
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
          A showcase of mobile projects built using Swift, Kotlin, and React Native – demonstrating my ability to develop both native and cross-platform applications for iOS and Android.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 h-full"
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
