import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const NYTSlide03ObjectivesPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={2} header="Research Objectives">
      <div className="space-y-8">
        <p className="text-xl text-slate-300">
          Designed a "learning agenda" to run in parallel with the A/B test:
        </p>

        <div className="space-y-4">
          <div className="rounded-2xl bg-orange-500/20 p-5 border border-orange-500/30">
            <h3 className="mb-3 text-xl font-semibold text-white">1. Test the Core Hypotheses</h3>
            <ul className="space-y-1 text-slate-300">
              <li>• Are younger NYT users more likely to consume news videos?</li>
              <li>• Are less engaged users more likely to consume news videos?</li>
              <li>• Is there a sizable "video-first" user segment?</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
            <h3 className="mb-3 text-xl font-semibold text-white">2. Understand the Experience</h3>
            <ul className="space-y-1 text-slate-300">
              <li>• What draws people to news videos vs. other formats?</li>
              <li>• What expectations do users bring from social platforms?</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
            <h3 className="mb-3 text-xl font-semibold text-white">3. Be Ready for A/B Test Results</h3>
            <div className="grid gap-3 md:grid-cols-2 mt-3">
              <div className="rounded-xl bg-green-500/20 p-3 border border-green-500/30">
                <p className="text-sm font-medium text-green-400">If positive</p>
                <p className="text-white">Understand what's working to scale it</p>
              </div>
              <div className="rounded-xl bg-amber-500/20 p-3 border border-amber-500/30">
                <p className="text-sm font-medium text-amber-400">If neutral/negative</p>
                <p className="text-white">Immediately diagnose why</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide03ObjectivesPresent;
