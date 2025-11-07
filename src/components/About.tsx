import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Palette, Settings } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Frontend",
      tags: ["React Native", "TypeScript", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose"]
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend",
      tags: ["Firebase", "AI Integration"]
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Design",
      tags: ["UI/UX Design", "Figma"]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Tools & Workflow",
      tags: ["GitHub", "Notion", "Trello"]
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="space-y-16">
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground">
              Hey! I'm Johan, a 24 year old former after-school teacher who discovered a passion for mobile development. I'm currently studying iPhone and Android Development at Malmö Yrkeshögskola, where I've learned everything from UI/UX to frontend and backend.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm a self-driven learner who loves challenges and figuring things out on my own. When I'm not coding, you'll probably find me playing football or hiking somewhere in nature.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm excited to keep growing as a developer and build apps that make a real difference.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="glass-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <CardContent className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-lg glow-effect">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary border border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
