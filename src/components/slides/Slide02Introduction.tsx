import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import Placeholder from '@/components/presentation/Placeholder';

const Slide02Introduction: React.FC = () => {
  return (
    <SlideContainer slideNumber={1} header="Introduction">
      <div className="grid gap-8 md:grid-cols-5">
        {/* Text content - 60% on desktop */}
        <div className="space-y-6 md:col-span-3 md:order-1">
          <p className="text-lg leading-relaxed text-foreground md:text-xl">
            I'm Erik – a UX researcher with 10+ years driving product decisions through fast-moving research. I combine strong data analysis skills with deep expertise in understanding what users need. I'm an enthusiastic early adopter of AI and thrilled about the possibility of joining Lovable.
          </p>
          <p className="text-lg leading-relaxed text-foreground md:text-xl">
            I'm currently at The New York Times, but today I'm sharing a case study from my time at Instagram that's particularly relevant to this role.
          </p>
          <p className="text-base italic text-muted-foreground">
            Due to confidentiality, I can't share real documents or data—instead I'll provide reconstructed examples.
          </p>
        </div>

        {/* Photo placeholder - 40% on desktop, first on mobile */}
        <div className="md:col-span-2 md:order-2">
          <Placeholder
            type="image"
            description="Professional headshot of Erik"
            aspectRatio="square"
            className="mx-auto max-w-xs md:max-w-none"
          />
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide02Introduction;
