import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Check, X } from 'lucide-react';

const NYTSlide05Findings: React.FC = () => {
  return (
    <SlideContainer slideNumber={4} header="Key Research Findings">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-foreground">Hypothesis Testing Results</h2>

        {/* Validated Hypotheses */}
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-green-500/30 bg-green-500/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600">Validated</span>
            </div>
            <p className="mb-2 font-semibold text-foreground">
              1. Are <em>younger</em> NYT users more likely to consume news videos?
            </p>
            <p className="text-muted-foreground">
              Visitors under 30 who say watching videos online is their <em>primary</em> way to get news are 3x as high as any other age group.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-green-500/30 bg-green-500/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600">Validated</span>
            </div>
            <p className="mb-2 font-semibold text-foreground">
              2. Are <em>less engaged</em> NYT users more likely to consume news videos?
            </p>
            <p className="text-muted-foreground">
              Visitors with fewer active days/month are 2x as likely to use online videos vs. more frequent visitors.
            </p>
          </div>
        </div>

        {/* Invalidated Hypotheses */}
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-red-500/30 bg-red-500/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                <X className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-red-600">Not Validated</span>
            </div>
            <p className="mb-2 font-semibold text-foreground">
              3. Is there a sizable group of users who use video first or exclusively?
            </p>
            <p className="text-muted-foreground">
              The vast majority of users (regardless of age or onsite activity) read or listen to the news first, and sometimes watch videos after. Users who prefer reading outnumber video-first users 4:1.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-red-500/30 bg-red-500/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                <X className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-red-600">Not Validated</span>
            </div>
            <p className="mb-2 font-semibold text-foreground">
              4. Are current users interested in getting videos from NYT in the app?
            </p>
            <p className="text-muted-foreground">
              Awareness of the fact that we offer videos in the app was high, but interest in watching them was low.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-red-500/30 bg-red-500/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                <X className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-red-600">Not Validated</span>
            </div>
            <p className="mb-2 font-semibold text-foreground">
              5. Is the value proposition of an editorially curated Watch Tab clear and attractive?
            </p>
            <p className="text-muted-foreground">
              The Watch Tab's value proposition was neither <em>clear</em> nor <em>attractive</em> to users.
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide05Findings;
