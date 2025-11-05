import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socials = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", href: "mailto:jojeask@gmail.com" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/jojeask" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/johan-asklund-0898aa1a6/" },
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-12 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an idea or project in mind? Drop me a message, <br /> I'd love to hear from you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {socials.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                asChild
                className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                  <span className="ml-2">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Johan Asklund. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
