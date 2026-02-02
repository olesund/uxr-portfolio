import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import erikHeadshot from '@/assets/erik-headshot.png';

const Slide02Introduction: React.FC = () => {
  return (
    <SlideContainer slideNumber={1} header="Introduction">
      <div className="grid gap-8 md:grid-cols-5">
        {/* Text content - 60% on desktop */}
        <div className="space-y-6 md:col-span-3 md:order-1">
          <p className="text-muted-foreground leading-relaxed">
            I'm Erik – a UX researcher with 10+ years driving product decisions through fast-moving research. I combine strong data analysis skills with deep expertise in understanding what users need.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm currently at The New York Times, but today I'm sharing a case study from my time at Instagram.
          </p>
          <p className="text-sm italic text-muted-foreground">
            Due to confidentiality, I can't share real documents or data—instead I'll provide reconstructed examples.
          </p>
        </div>

        {/* Photo - 40% on desktop, first on mobile */}
        <div className="md:col-span-2 md:order-2 flex items-center justify-center">
          <img
            src={erikHeadshot}
            alt="Professional headshot of Erik"
            className="w-48 h-48 md:w-56 md:h-56 object-contain bg-background rounded-2xl"
          />
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide02Introduction;
