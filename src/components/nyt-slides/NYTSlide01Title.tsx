import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowLeft } from 'lucide-react';

const NYTSlide01Title: React.FC = () => {
  const scrollToContent = () => {
    document.getElementById('slide-1')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="slide-0"
      className="relative flex min-h-screen snap-start flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-6"
      aria-label="Title slide"
    >
      <Link
        to="/"
        className="absolute left-6 top-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          NYT Watch Tab: Video News Consumption Research
        </h1>
        <p className="mb-12 text-lg text-muted-foreground md:text-xl">
          A research program that explained neutral A/B test results and informed a strategic pivot
        </p>

        <Button
          variant="outline"
          size="lg"
          onClick={scrollToContent}
          className="group"
        >
          Start Reading
          <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>

      <footer className="absolute bottom-8 text-center">
        <p className="text-sm text-muted-foreground">
          Erik Olesund, UX Researcher
        </p>
      </footer>
    </section>
  );
};

export default NYTSlide01Title;
