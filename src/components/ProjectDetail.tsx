import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    images?: string[];
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    detailedDescription?: string;
    features?: string[];
    technologies?: string[];
  } | null;
}

const ProjectDetail = ({ isOpen, onClose, project }: ProjectDetailProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gradient">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Carousel className="w-full">
            <CarouselContent>
              {(project.images || [project.image]).map((img, index, arr) => (
                <CarouselItem key={index}>
                  <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-fuchsia-500/40">
                    <div
                      className="relative overflow-hidden rounded-[10px] aspect-video bg-zinc-950/90"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                        backgroundPosition: "center",
                      }}
                    >
                      <img
                        src={img}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-contain"
                      />

                      {/* corner accents */}
                      <span className="pointer-events-none absolute left-3 top-3 h-4 w-6 border-l-2 border-t-2 border-cyan-400/60" />
                      <span className="pointer-events-none absolute right-3 top-3 h-4 w-6 border-r-2 border-t-2 border-fuchsia-400/60" />
                      <span className="pointer-events-none absolute left-3 bottom-3 h-4 w-6 border-l-2 border-b-2 border-cyan-400/60" />
                      <span className="pointer-events-none absolute right-3 bottom-3 h-4 w-6 border-r-2 border-b-2 border-fuchsia-400/60" />

                      {/* HUD index badge */}
                      <div className="absolute right-3 top-3 rounded-md px-2 py-1 text-xs font-medium tracking-wider text-white/90 bg-zinc-900/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/50 border border-white/10 shadow">
                        {index + 1} / {arr.length}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-muted-foreground">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary border border-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {project.liveUrl && (
                <Button asChild>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Live
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="secondary" asChild>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
