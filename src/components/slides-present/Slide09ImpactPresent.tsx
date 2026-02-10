import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import reelsEditorBefore from '@/assets/reels-editor-before.png';
import reelsEditorAfter from '@/assets/reels-editor-after.png';

const Slide09ImpactPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={8} header="Impact">
      <div className="space-y-8">
        <div className="rounded-2xl bg-green-500/20 p-6 text-center border border-green-500/30">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-400">Leadership Decision</p>
          <p className="text-2xl font-bold text-white">
            Leadership approved the redesign—a decision they had initially rejected.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <div className="rounded-xl overflow-hidden bg-white/10 p-2">
              <img
                src={reelsEditorBefore}
                alt="Editor before - linear timeline"
                className="w-full h-auto max-h-[180px] object-contain"
              />
            </div>
            <p className="text-center font-medium text-white">Before</p>
            <p className="text-center text-sm text-slate-400">Video clips only on this screen</p>
          </div>
          <div className="space-y-2">
            <div className="rounded-xl overflow-hidden bg-white/10 p-2">
              <img
                src={reelsEditorAfter}
                alt="Editor after - stacked timeline"
                className="w-full h-auto max-h-[180px] object-contain"
              />
            </div>
            <p className="text-center font-medium text-white">After</p>
            <p className="text-center text-sm text-slate-400">Clips, audio, text on one surface</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
            <p className="font-semibold text-white">A/B Test Results</p>
            <p className="text-sm text-slate-300">Significantly more video production, especially high-quality videos</p>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
            <p className="font-semibold text-white">Instagram "Edits" App</p>
            <p className="text-sm text-slate-300">Standalone app built around stacked timeline design</p>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide09ImpactPresent;
