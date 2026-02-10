import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const NYTSlide04ApproachPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={3} header="Research Approach">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white">
          Two-Method Design (Parallel with A/B Test)
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
            <h3 className="mb-4 text-xl font-semibold text-white">A. Quantitative Survey</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Sample</span>
                <span className="font-medium text-white">n=~3,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Method</span>
                <span className="font-medium text-white">Intercept survey</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Analysis</span>
                <span className="font-medium text-white">Python + weighted stats</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              <strong className="text-white">Purpose:</strong> Validate hypotheses at scale
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/80 p-6 border border-slate-700">
            <h3 className="mb-4 text-xl font-semibold text-white">B. Qualitative Diary Study</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Sample</span>
                <span className="font-medium text-white">n=21 via dscout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Duration</span>
                <span className="font-medium text-white">7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Mix</span>
                <span className="font-medium text-white">11 subs / 10 non-subs</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              <strong className="text-white">Purpose:</strong> Understand the "why" behind behaviors
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800/50 p-5 border border-slate-700">
          <h4 className="mb-3 font-semibold text-white">Why This Approach?</h4>
          <div className="grid gap-3 md:grid-cols-2 text-slate-300">
            <p>Survey captured what people do at scale</p>
            <p>Diary study revealed why they behave that way</p>
            <p>Parallel timing: insights ready when A/B results arrived</p>
            <p>Triangulation with behavioral data</p>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide04ApproachPresent;
