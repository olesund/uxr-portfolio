import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import erikHeadshot from '@/assets/erik-headshot.png';

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid gap-8 md:grid-cols-5 md:items-center">
          {/* Photo - first on mobile */}
          <div className="flex items-center justify-center md:col-span-2 md:order-2">
            <img
              src={erikHeadshot}
              alt="Professional headshot of Erik"
              className="h-48 w-48 rounded-2xl bg-background object-contain md:h-64 md:w-64"
            />
          </div>

          {/* Text content */}
          <div className="space-y-6 md:col-span-3 md:order-1">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                UX Research Portfolio
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Hi, I'm Erik Olesund
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a UX Researcher with 10+ years of experience driving product decisions through fast-moving, mixed-methods research. I combine strong data analysis skills with deep expertise in understanding what users need.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I've led research programs at Instagram, The New York Times, and other companies—often working on high-stakes products where tight deadlines meet complex stakeholder dynamics.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <a href="mailto:erik.olesund@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a
                  href="https://www.linkedin.com/in/erik-olesund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
