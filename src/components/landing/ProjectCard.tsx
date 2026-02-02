import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
  imageSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  tags,
  href,
  imageSrc,
}) => {
  return (
    <Link to={href}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
          {imageSrc && (
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <img
                src={imageSrc}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <CardHeader>
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {subtitle}
            </p>
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="text-base leading-relaxed">
              {description}
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-primary">
              Read case study
              <ArrowRight className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
