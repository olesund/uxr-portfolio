import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Card, CardContent } from '@/components/ui/card';
import { User, Users, Building2 } from 'lucide-react';

const Slide03Problem: React.FC = () => {
  return (
    <SlideContainer slideNumber={2} header="Problem + Key Constraints">
      <div className="space-y-8">
        {/* Business Context */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Business Context
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Instagram Reels had recently launched as the company's top priority. But we faced a critical problem: people were watching Reels. A lot of them! But we didn't have enough creators making them. Demand outpaced supply. If viewers couldn't find enough entertaining videos, they'd stop using the feature.
          </p>
        </div>

        {/* Key Questions */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Business Goal
            </p>
            <p className="text-xl font-semibold text-foreground">
              Increase the production of short-form videos.
            </p>
          </div>
          <div className="space-y-2 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Core Question
            </p>
            <p className="text-xl font-semibold text-foreground">
              How do we make it easier for users to make short-form videos on Instagram?
            </p>
          </div>
        </div>

        {/* Scope note */}
        <p className="text-muted-foreground">
          Another team focused on motivating people to make videos. My team focused on making the editing process easier.
        </p>

        {/* Inset Box - Team Info */}
        <Card className="bg-muted/50">
          <CardContent className="grid gap-4 p-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <User className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">My Role</p>
                <p className="font-medium text-foreground">Lead UX Researcher</p>
                <p className="text-sm text-muted-foreground">Designed, ran, and presented all research</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Team</p>
                <p className="font-medium text-foreground">Cross-functional</p>
                <p className="text-sm text-muted-foreground">Product Manager, Product Designer, Data Scientist, iOS Engineer</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Stakeholders</p>
                <p className="font-medium text-foreground">Senior Leadership</p>
                <p className="text-sm text-muted-foreground">Including the Head of Instagram</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideContainer>
  );
};

export default Slide03Problem;
