import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import { Clock, Shield, Layers, Users, MessageCircle, Zap } from 'lucide-react';

const NYTSlide10ReflectionPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={9} header="Reflection">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white">What Made This Work</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
            <div className="mb-2 flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-400" />
              <span className="font-semibold text-white">Strategic Timing</span>
            </div>
            <p className="text-sm text-slate-300">
              Research in parallel with A/B test
            </p>
          </div>

          <div className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
            <div className="mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-400" />
              <span className="font-semibold text-white">Proactive Risk Mitigation</span>
            </div>
            <p className="text-sm text-slate-300">
              Designed to learn either way
            </p>
          </div>

          <div className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
            <div className="mb-2 flex items-center gap-2">
              <Layers className="h-5 w-5 text-orange-400" />
              <span className="font-semibold text-white">Method Triangulation</span>
            </div>
            <p className="text-sm text-slate-300">
              Survey + diary study + behavioral data
            </p>
          </div>

          <div className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
            <div className="mb-2 flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-400" />
              <span className="font-semibold text-white">Stakeholder Partnership</span>
            </div>
            <p className="text-sm text-slate-300">
              XFN partners in research design
            </p>
          </div>

          <div className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
            <div className="mb-2 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-orange-400" />
              <span className="font-semibold text-white">Non-Defensive Communication</span>
            </div>
            <p className="text-sm text-slate-300">
              Pre-meeting 1:1s, led with learning
            </p>
          </div>

          <div className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
            <div className="mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-400" />
              <span className="font-semibold text-white">Speed with Rigor</span>
            </div>
            <p className="text-sm text-slate-300">
              Actionable insights within timeline
            </p>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide10ReflectionPresent;
