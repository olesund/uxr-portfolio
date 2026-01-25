import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Card, CardContent } from '@/components/ui/card';
import Placeholder from '@/components/presentation/Placeholder';
import { MessageSquare, BarChart3, FlaskConical } from 'lucide-react';

const evidenceCards = [
  {
    icon: MessageSquare,
    title: 'User Feedback',
    description: 'Creators avoided our editor because the step-by-step flow couldn\'t support the editing they wanted',
    phase: 'Phase 1',
  },
  {
    icon: BarChart3,
    title: 'Video Analysis',
    description: 'Popular videos are complex: multiple clips, synced to music with text overlaid',
    phase: 'Phase 2',
  },
  {
    icon: FlaskConical,
    title: 'Usability Testing',
    description: 'High-quality videos require precise timing across layers—nearly impossible with a step-by-step flow',
    phase: 'Phase 3',
  },
];

const Slide08Recommendation: React.FC = () => {
  return (
    <SlideContainer slideNumber={7} header="Final Recommendation">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
          Three Pieces of Evidence
        </h2>
        <p className="text-lg text-muted-foreground">
          The final presentation synthesized findings from all three research phases:
        </p>

        {/* Evidence Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {evidenceCards.map((card) => (
            <Card key={card.title} className="relative overflow-hidden">
              <div className="absolute right-0 top-0 rounded-bl-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {card.phase}
              </div>
              <CardContent className="p-6 pt-10">
                <card.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Message */}
        <div className="rounded-xl border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Key Message to Leadership</p>
          <blockquote className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            'Simple' doesn't always mean 'easy.'
          </blockquote>
          <p className="mb-4 text-lg text-foreground">
            The right editor depends on what you're trying to make.
          </p>
          <p className="text-muted-foreground">
            Leadership assumed 'simple = easy,' but our data showed simplicity becomes a barrier for complex tasks. For videos people actually want to watch (videos with the three success attributes), the 'simple' step-by-step editor was harder to use than the 'complex' stacked timeline.
          </p>
        </div>

        {/* Flywheel Concept */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">The Flywheel Effect</h3>
          <p className="text-muted-foreground">
            We should prioritize high-quality videos because they create a healthy cycle:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg bg-muted/50 p-6 text-center">
            <span className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">Good videos</span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">More viewers</span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">More creator reach</span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">More production</span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">More good videos</span>
          </div>
          <p className="text-center text-sm italic text-muted-foreground">
            Good content is key to getting the flywheel spinning.
          </p>
        </div>

        {/* Flywheel Placeholder */}
        <Placeholder
          type="chart"
          description="Visual flywheel diagram showing the virtuous cycle"
          aspectRatio="video"
        />
      </div>
    </SlideContainer>
  );
};

export default Slide08Recommendation;
