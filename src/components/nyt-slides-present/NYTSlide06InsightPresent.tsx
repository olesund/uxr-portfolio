import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import { Lightbulb } from 'lucide-react';

const NYTSlide06InsightPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={5} header="Core Insight">
      <div className="space-y-8">
        <div className="rounded-2xl bg-orange-500/20 p-8 text-center border border-orange-500/30">
          <div className="mb-4 flex justify-center">
            <Lightbulb className="h-8 w-8 text-orange-400" />
          </div>
          <blockquote className="text-2xl font-semibold text-white md:text-3xl">
            When users come directly to a news source, they seek specific videos—not passive browsing.
          </blockquote>
          <p className="mt-4 text-slate-300">
            Top job for video: "Get a fuller picture of a particular event"
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">What the Diary Study Revealed</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">No Personalization</p>
              <p className="text-sm text-slate-300">Users expected content tailored to their interests</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">"Scan and Sample" Behavior</p>
              <p className="text-sm text-slate-300">3-5 seconds to capture interest before skipping</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">No Way to Find Specific Videos</p>
              <p className="text-sm text-slate-300">Users want NYT for specific stories, not endless browsing</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">Content Repetition</p>
              <p className="text-sm text-slate-300">Same 15-20 videos all day frustrated users</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide06InsightPresent;
