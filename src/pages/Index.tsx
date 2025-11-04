import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
