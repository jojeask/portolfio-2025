import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="glass-card overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex gap-2">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-primary-foreground" />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
              >
                <Github className="h-5 w-5 text-secondary-foreground" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-secondary/50 hover:bg-secondary border border-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
