import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';

const Slide10Lessons: React.FC = () => {
  return (
    <SlideContainer
      slideNumber={9}
      header="Lessons Learned"
      className="!bg-[hsl(220,10%,20%)] !border-[hsl(220,10%,30%)]"
    >
      <div className="space-y-10">
        {/* Header override for dark background */}
        <style>{`
          #slide-9 .text-primary { color: hsl(25, 70%, 55%); }
          #slide-9 > div > p { color: hsl(40, 30%, 95%); }
        `}</style>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-[hsl(40,30%,95%)]">What This Project Taught Me</h3>
        </div>

        {/* Lessons */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-5">
            <p className="mb-1 text-sm font-medium" style={{ color: 'hsl(25, 70%, 55%)' }}>01</p>
            <p className="font-semibold text-[hsl(40,30%,95%)]">Misalignment often comes from different assumptions</p>
            <p className="mt-1 text-[hsl(40,30%,85%)]/80">Our team and leadership both wanted an easy-to-use editor—but we hadn't aligned on what types of videos to prioritize.</p>
          </div>

          <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-5">
            <p className="mb-1 text-sm font-medium" style={{ color: 'hsl(25, 70%, 55%)' }}>02</p>
            <p className="font-semibold text-[hsl(40,30%,95%)]">Study what people make to understand your product</p>
            <p className="mt-1 text-[hsl(40,30%,85%)]/80">Analyzing user-created content showed us what makes videos successful. This was before AI made it easy—it was manual and tedious. Today I use this method at much larger scale.</p>
          </div>
        </div>

        {/* What I'd Do Differently */}
        <div className="rounded-2xl bg-[hsl(25,50%,35%)]/30 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>What I'd Do Differently</p>
          <p className="text-[hsl(40,30%,95%)]">
            Have leadership experience the problem firsthand. My team made videos every week, so we felt the limitations intuitively. Leadership wasn't using the product and assumed 'simple = easy' without testing it. Hands-on experience could have accelerated alignment.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide10Lessons;
