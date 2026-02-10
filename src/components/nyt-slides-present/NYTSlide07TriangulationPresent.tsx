import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import { AlertTriangle, TrendingDown } from 'lucide-react';

const NYTSlide07TriangulationPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={6} header="Triangulating with Behavioral Data">
      <div className="space-y-8">
        <div className="rounded-2xl bg-amber-500/20 p-6 border border-amber-500/30">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            <span className="font-semibold text-white">The A/B Test Came Back Neutral</span>
          </div>
          <p className="text-slate-300">
            Because research ran in parallel, we immediately had data to explain why.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            The Core Problem: Wrong Audience Reached the Feature
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
              <p className="mb-2 text-sm font-medium text-slate-400">Survey predicted</p>
              <p className="text-white">Less engaged users 2x more likely to prefer video</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="mb-2 text-sm font-medium text-slate-400">Behavioral data showed</p>
              <p className="text-white">Majority of Watch Tab users were already super-engaged (7 days/week)</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-red-500/20 p-5 border border-red-500/30">
          <div className="flex items-start gap-3">
            <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
            <div>
              <p className="font-semibold text-white">The Disconnect</p>
              <p className="mt-1 text-slate-300">
                Feature reached our most engaged users, not the less-engaged video-using audience we were targeting.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
          <p className="mb-3 font-semibold text-white">Why Engagement Was Shallow</p>
          <ul className="space-y-2 text-slate-300">
            <li>• Users wanted to find specific videos, not browse a feed</li>
            <li>• "Scan and sample" meant if first video wasn't relevant, they bounced</li>
          </ul>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide07TriangulationPresent;
