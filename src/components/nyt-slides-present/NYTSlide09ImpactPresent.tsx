import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import { TrendingUp, ArrowRight } from 'lucide-react';

const NYTSlide09ImpactPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={8} header="Impact & Next Steps">
      <div className="space-y-8">
        <div className="rounded-2xl bg-orange-500/20 p-6 text-center border border-orange-500/30">
          <div className="mb-4 flex justify-center">
            <TrendingUp className="h-8 w-8 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Research informed a strategic pivot
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
              <span className="font-bold text-green-400">1</span>
            </div>
            <p className="font-semibold text-white">Strategic Direction Change</p>
            <p className="text-sm text-slate-300">Pivot from feed-centric to integrated video experiences</p>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
              <span className="font-bold text-green-400">2</span>
            </div>
            <p className="font-semibold text-white">New Product Explorations</p>
            <p className="text-sm text-slate-300">Article integration and search-based discovery</p>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
              <span className="font-bold text-green-400">3</span>
            </div>
            <p className="font-semibold text-white">Stakeholder Engagement Preserved</p>
            <p className="text-sm text-slate-300">Team remains committed despite neutral test</p>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
              <span className="font-bold text-green-400">4</span>
            </div>
            <p className="font-semibold text-white">Research as Strategic Partner</p>
            <p className="text-sm text-slate-300">Essential partner in product development</p>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
          <h3 className="mb-3 font-semibold text-white">What's Next</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-orange-400" />
              <p className="text-slate-300">Design explorations for article-page video integration</p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-orange-400" />
              <p className="text-slate-300">Prototype search/navigation approaches</p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-orange-400" />
              <p className="text-slate-300">Validate with target audience (less engaged users)</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide09ImpactPresent;
