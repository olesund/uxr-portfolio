import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';

const Slide10Lessons: React.FC = () => {
  return (
    <SlideContainer slideNumber={9} header="Lessons Learned">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
          What This Project Taught Me
        </h2>

        {/* Lessons */}
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <p className="text-sm font-medium text-primary">01</p>
            <p className="font-semibold text-foreground">Misalignment often comes from different assumptions</p>
            <p className="text-muted-foreground">Our team and leadership both wanted an easy-to-use editor—but we hadn't aligned on what types of videos to prioritize.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <p className="text-sm font-medium text-primary">02</p>
            <p className="font-semibold text-foreground">Consider cost vs. benefit of large studies</p>
            <p className="text-muted-foreground">Phase 3 could maybe have been skipped if we'd just had leadership try editing complex videos themselves in different apps.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <p className="text-sm font-medium text-primary">03</p>
            <p className="font-semibold text-foreground">Study what people make to understand your product</p>
            <p className="text-muted-foreground">Analyzing user-created content in phase 2 showed us what makes videos successful. This was before AI—it was manual and tedious. With AI, I now use this method at much larger scale and speed.</p>
          </div>
        </div>

        {/* What I'd Do Differently */}
        <div className="rounded-lg bg-muted/50 p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">What I'd Do Differently</p>
          <p className="text-foreground">
            Have leadership experience the problem firsthand—ask them to create both simple and complex videos using different editors. My team made videos every week, so we felt the limitations intuitively. Leadership wasn't using the product and assumed 'simple = easy' without testing it. Hands-on experience could have saved weeks of research.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide10Lessons;
