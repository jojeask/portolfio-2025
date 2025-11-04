import { Card, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Development",
      description: "[Replace: Your mobile dev expertise - e.g., 'Expert in iOS and Android development with 5+ years of experience']"
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description: "[Replace: Your coding philosophy - e.g., 'Passionate about writing maintainable, scalable, and efficient code']"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Performance",
      description: "[Replace: Your performance focus - e.g., 'Optimizing apps for speed and seamless user experience']"
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
              [Replace with your bio - Tell your story: background, passion for mobile development, what drives you, your journey into app development]
            </p>
            <p className="text-lg text-muted-foreground">
              [Replace with additional info - Your specializations, what you're currently working on, your approach to development]
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
