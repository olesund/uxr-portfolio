import React, { useState } from 'react';
import { usePresentation } from '@/contexts/PresentationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, ArrowDown } from 'lucide-react';

const Slide01Title: React.FC = () => {
  const { isAuthenticated, authenticate } = usePresentation();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Small delay for UX
    setTimeout(() => {
      const success = authenticate(password);
      if (!success) {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 300);
  };

  const scrollToContent = () => {
    document.getElementById('slide-1')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="slide-0"
      className="relative flex min-h-screen snap-start flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-6"
      aria-label="Title slide"
    >
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Instagram Reels Video Editor Research
        </h1>
        <p className="mb-12 text-lg text-muted-foreground md:text-xl">
          Three phases of mixed-methods research that led to a major redesign of Instagram's video editor
        </p>

        {!isAuthenticated ? (
          <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  aria-label="Password"
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" disabled={isLoading || !password}>
                {isLoading ? 'Checking...' : 'Enter'}
              </Button>
            </div>
            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
          </form>
        ) : (
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContent}
            className="group"
          >
            Start Reading
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        )}
      </div>

      <footer className="absolute bottom-8 text-center">
        <p className="text-sm text-muted-foreground">
          Erik Olesund, Lead UX Researcher
        </p>
      </footer>
    </section>
  );
};

export default Slide01Title;
