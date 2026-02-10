import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const NYTSlide01TitlePresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={0}>
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          NYT Watch Tab: Video News Consumption Research
        </h1>
        <p className="mb-12 text-xl text-slate-300 md:text-2xl">
          A research program that explained neutral A/B test results and informed a strategic pivot
        </p>
        <div className="mt-16 space-y-2 text-slate-400">
          <p className="text-lg">Erik Olesund</p>
          <p>UX Researcher</p>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide01TitlePresent;
