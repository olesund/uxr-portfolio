import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Linkedin, Globe } from 'lucide-react';

const Slide11FinalNote: React.FC = () => {
  return (
    <SlideContainer slideNumber={11} header="Final Note">
      <div className="space-y-10">
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Thank you for taking the time to read through this case study. I hope it gives you a sense of how I approach research challenges.
          </p>
          
          <p className="mt-6 text-lg text-muted-foreground">
            If you have any questions I'm at{' '}
            <a 
              href="mailto:erik.olesund@gmail.com" 
              className="text-primary hover:underline"
            >
              erik.olesund@gmail.com
            </a>
          </p>
          
          <p className="mt-6 text-xl font-medium text-foreground">
            Thanks for reading!
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://www.linkedin.com/in/erik-olesund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://olesund.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Globe className="h-4 w-4" />
            Portfolio
          </a>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide11FinalNote;
