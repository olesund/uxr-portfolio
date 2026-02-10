import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import editorComparison from '@/assets/editor-comparison.png';

const Slide05Phase1Present: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={3} header="Phase 1: Online Creator Community">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Key Finding
            </h2>
            <p className="text-xl text-slate-300">
              Creators actively avoided Instagram's editor in favor of third-party apps like CapCut.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-800/80 p-4 text-sm border border-slate-700">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-slate-400">Method</p>
                <p className="font-medium text-white">Online Community</p>
              </div>
              <div>
                <p className="text-slate-400">Duration</p>
                <p className="font-medium text-white">6 Weeks</p>
              </div>
              <div>
                <p className="text-slate-400">Sample</p>
                <p className="font-medium text-white">20 Creators</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">Why They Avoided Our Editor</p>
          <ul className="space-y-2 text-lg text-white">
            <li>• Preferred "stacked timeline" editors with all layers visible at once</li>
            <li>• Instagram's step-by-step flow required constant switching between screens</li>
            <li>• Making any video was easy, but making a <strong className="text-orange-400">good</strong> video was hard</li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white/10 p-2">
          <img
            src={editorComparison}
            alt="Step-by-step editor vs. Stacked timeline editor comparison"
            className="w-full h-auto max-h-[200px] object-contain"
          />
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide05Phase1Present;
