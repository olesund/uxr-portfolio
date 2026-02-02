import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const WorkSection: React.FC = () => {
  const projects = [
    {
      title: 'Instagram Reels Video Editor',
      subtitle: 'Instagram / Meta',
      description:
        'Three phases of mixed-methods research that challenged leadership assumptions and led to a major redesign of Instagram\'s video editing tools.',
      tags: ['Mixed Methods', 'Usability Testing', 'Video Analysis', 'Leadership Presentation'],
      href: '/work/instagram-reels',
    },
    {
      title: 'Watch Tab: Video News Consumption',
      subtitle: 'The New York Times',
      description:
        'Research program that ran parallel to an A/B test, combining survey data (n=3,000) with diary studies to evaluate a new video feature.',
      tags: ['Survey Research', 'Diary Study', 'Behavioral Data', 'Stakeholder Management'],
      href: '/work/nyt-watch-tab',
    },
  ];

  return (
    <section className="border-t border-border bg-secondary/30 px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Selected Work
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Case Studies
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkSection;
