import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const NYTSlide08RecommendationsPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={7} header="Recommendations">
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-white">Communication Strategy</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">Pre-meeting 1:1s</p>
              <p className="text-sm text-slate-300">Let stakeholders internalize data before group discussion</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">Led with learning</p>
              <p className="text-sm text-slate-300">Started with validated hypotheses, not failures</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">Framed as opportunities</p>
              <p className="text-sm text-slate-300">Not criticisms of the original vision</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">Let recommendations emerge</p>
              <p className="text-sm text-slate-300">Senior editor suggested the pivot himself</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">The Recommendations</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-orange-500/20 p-5 border border-orange-500/30">
              <p className="mb-2 font-semibold text-white">1. Meet users where they are</p>
              <p className="text-slate-300">Integrate video into article pages—the #1 visited surface</p>
            </div>
            <div className="rounded-2xl bg-orange-500/20 p-5 border border-orange-500/30">
              <p className="mb-2 font-semibold text-white">2. Enable intent-driven discovery</p>
              <p className="text-slate-300">Add search, categories, or navigation for specific videos</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide08RecommendationsPresent;
