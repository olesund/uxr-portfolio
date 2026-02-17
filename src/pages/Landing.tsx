import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AboutSection from '@/components/landing/AboutSection';
import WorkSection from '@/components/landing/WorkSection';

const CORRECT_PASSWORD = 'open';

const Landing: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = (location.state as { from?: string })?.from;

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('portfolio_authenticated') === 'true';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        sessionStorage.setItem('portfolio_authenticated', 'true');
        if (redirectTo) {
          navigate(redirectTo, { replace: true });
        } else {
          setIsAuthenticated(true);
        }
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-background">
      <AboutSection />

      {!isAuthenticated ? (
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

            <div className="mx-auto max-w-sm">
              <p className="mb-6 text-center text-muted-foreground">
                Enter the password to view case studies.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <p className="text-center text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </section>
      ) : (
        <WorkSection />
      )}

      <footer className="border-t border-border bg-background px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Portfolio built in collaboration with Lovable and Claude Code
        </p>
      </footer>
    </main>
  );
};

export default Landing;
