import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide03ProblemPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={1} header="Problem + Key Constraints">
      <div className="space-y-10">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            The Challenge
          </h2>
          <p className="text-xl text-muted-foreground">
            Reels had launched as Instagram's top priority, but creator supply couldn't keep up with viewer demand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-2 text-sm text-muted-foreground">Business Goal</p>
            <p className="text-xl font-semibold text-foreground">
              Increase short-form video production
            </p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-2 text-sm text-muted-foreground">Core Question</p>
            <p className="text-xl font-semibold text-foreground">
              How do we make it easier to create videos?
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-muted/60 p-6">
          <div className="grid gap-4 md:grid-cols-3 text-center">
            <div>
              <p className="text-sm text-muted-foreground">My Role</p>
              <p className="font-semibold text-foreground">UX Researcher</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team</p>
              <p className="font-semibold text-foreground">Cross-functional</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Stakeholders</p>
              <p className="font-semibold text-foreground">Senior Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide03ProblemPresent;
