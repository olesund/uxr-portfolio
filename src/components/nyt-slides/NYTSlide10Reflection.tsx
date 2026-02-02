import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Clock, Shield, Layers, Users, MessageCircle, Zap } from 'lucide-react';

const NYTSlide10Reflection: React.FC = () => {
  return (
    <SlideContainer slideNumber={9} header="Reflection">
      <div className="space-y-10">
        <h2 className="text-2xl font-bold text-foreground">What Made This Work</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-accent/50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Strategic Timing</span>
            </div>
            <p className="text-muted-foreground">
              Running research in parallel with A/B test meant insights were ready when the team needed answers most
            </p>
          </div>

          <div className="rounded-2xl bg-accent/50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Proactive Risk Mitigation</span>
            </div>
            <p className="text-muted-foreground">
              Flagged concerns early, designed research to learn either way (not just validate)
            </p>
          </div>

          <div className="rounded-2xl bg-accent/50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Method Triangulation</span>
            </div>
            <p className="text-muted-foreground">
              Survey tested hypotheses, diary study explained behaviors, behavioral data showed who actually used it
            </p>
          </div>

          <div className="rounded-2xl bg-accent/50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Stakeholder Partnership</span>
            </div>
            <p className="text-muted-foreground">
              Brought XFN partners into research design; they felt ownership over findings
            </p>
          </div>

          <div className="rounded-2xl bg-accent/50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Non-Defensive Communication</span>
            </div>
            <p className="text-muted-foreground">
              Pre-meeting 1:1s, leading with learning, letting recommendations emerge from the group
            </p>
          </div>

          <div className="rounded-2xl bg-accent/50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Speed with Rigor</span>
            </div>
            <p className="text-muted-foreground">
              Delivered actionable insights within product timeline without sacrificing quality
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide10Reflection;
