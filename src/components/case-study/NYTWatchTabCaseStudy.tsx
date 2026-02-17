/**
 * NYT Watch Tab Case Study
 *
 * Content comes from: src/data/nyt-watch-tab-content.ts
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, Check, X, Lightbulb, AlertTriangle, TrendingDown, TrendingUp, ArrowRight, Users, FileText, BarChart3, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { sharedContent, readContent, presentContent } from '@/data/nyt-watch-tab-content';
import { ModeToggle } from '@/components/presentation/ModeToggle';
import { PresentSlide } from '@/components/presentation/PresentSlide';
import { Carousel } from '@/components/presentation/Carousel';
import { ProgressiveReveal } from '@/components/presentation/ProgressiveReveal';

// Assets for analysis modals
import exampleChart from '@/assets/example_grouped_vertical_bar_chart.png';
import regressionChart from '@/assets/regression-chart.png';
import videoRoleChart from '@/assets/video-role-chart.png';
import pewSocialMediaChart from '@/assets/pew-social-media-chart.png';
import figjamScreenshot from '@/assets/figjam-synthesis-screenshot.png';

// Shared modal content — reused in both read and present modes
const SurveyQuestionExamplesModal: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm" className="gap-2">
        <FileText className="h-4 w-4" />
        Survey Examples
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
      <DialogHeader><DialogTitle>Survey Question Examples</DialogTitle></DialogHeader>
      <div className="space-y-6 pt-4">
        {readContent.approach.survey.questionExamples.map((example, i) => (
          <div key={i} className="rounded-lg bg-muted/50 p-4">
            <p className="mb-2 text-sm font-medium text-primary">{example.category}</p>
            <p className="mb-3 font-medium text-foreground">{example.question}</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              {example.options.map((opt, j) => <p key={j}>• {opt}</p>)}
            </div>
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const SurveyAnalysisModal: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm" className="gap-2">
        <BarChart3 className="h-4 w-4" />
        Analysis Approach
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
      <DialogHeader><DialogTitle>Survey Analysis Approach</DialogTitle></DialogHeader>
      <div className="space-y-6 pt-4">
        {readContent.approach.survey.analysisSteps.map((step, i) => (
          <div key={i} className="rounded-lg bg-muted/50 p-4">
            <p className="mb-2 text-sm font-medium text-primary">{step.title}</p>
            <p className="text-sm text-muted-foreground">{step.description}</p>
            {i === 3 && (
              <>
                <div className="mt-3 rounded-lg overflow-hidden bg-white p-2">
                  <img src={regressionChart} alt="Regression analysis example" className="w-full h-auto" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground italic">Example regression output (data shown is illustrative)</p>
              </>
            )}
            {i === 4 && (
              <>
                <div className="mt-3 space-y-3">
                  <div className="rounded-lg overflow-hidden bg-white p-2"><img src={exampleChart} alt="Example grouped bar chart" className="w-full h-auto" /></div>
                  <div className="rounded-lg overflow-hidden bg-white p-2"><img src={videoRoleChart} alt="Video role in news consumption" className="w-full h-auto" /></div>
                  <div className="rounded-lg overflow-hidden bg-white p-2"><img src={pewSocialMediaChart} alt="News consumption by social media site" className="w-full h-auto" /></div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground italic">Example visualizations (illustrative, not actual results)</p>
              </>
            )}
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const DiaryActivityModal: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm" className="gap-2">
        <BookOpen className="h-4 w-4" />
        Diary Activities
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
      <DialogHeader><DialogTitle>Diary Study Activity Examples</DialogTitle></DialogHeader>
      <div className="space-y-6 pt-4">
        {readContent.approach.diaryStudy.activityExamples.map((example, i) => (
          <div key={i} className="rounded-lg bg-muted/50 p-4">
            <p className="mb-2 text-sm font-medium text-primary">{example.day}</p>
            <p className="mb-3 font-medium text-foreground">{example.title}</p>
            <p className="text-sm text-muted-foreground">{example.description}</p>
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const DiaryAnalysisModal: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm" className="gap-2">
        <Users className="h-4 w-4" />
        Analysis Approach
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
      <DialogHeader><DialogTitle>Diary Study Analysis Approach</DialogTitle></DialogHeader>
      <div className="space-y-6 pt-4">
        {readContent.approach.diaryStudy.analysisSteps.map((step, i) => (
          <div key={i} className="rounded-lg bg-muted/50 p-4">
            <p className="mb-2 text-sm font-medium text-primary">{step.title}</p>
            <p className="text-sm text-muted-foreground">{step.description}</p>
            {i === 1 && (
              <>
                <div className="mt-3 rounded-lg overflow-hidden">
                  <img src={figjamScreenshot} alt="FigJam synthesis board" className="w-full h-auto" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground italic">FigJam board used for collaborative synthesis</p>
              </>
            )}
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

// ============================================
// SLIDE WRAPPER COMPONENTS
// ============================================

const ReadSlide: React.FC<{
  slideNumber: number;
  header?: string;
  children: React.ReactNode;
}> = ({ slideNumber, header, children }) => {
  const isEven = slideNumber % 2 === 0;

  return (
    <section
      id={`slide-${slideNumber}`}
      className={cn(
        'relative scroll-mt-0 snap-start px-6 py-12 md:px-12 lg:px-20',
        'border-b border-border min-h-[80vh] py-16 md:py-24',
        isEven ? 'bg-[hsl(30,15%,91%)]' : 'bg-background'
      )}
    >
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {header && (
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">
            {header}
          </p>
        )}
        {children}
      </motion.div>
    </section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

const NYTWatchTabCaseStudy: React.FC = () => {
  const [mode, setMode] = useState<'read' | 'present'>('read');
  const [resetKey, setResetKey] = useState(0);

  const scrollToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReset = () => {
    setResetKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ============================================
  // PRESENT MODE SLIDE RENDERERS
  // ============================================

  const renderPresentTitle = () => (
    <section className="relative flex min-h-screen snap-start flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-6">
      <Link to="/" className="absolute left-6 top-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12">
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>
      <ModeToggle mode={mode} onModeChange={setMode} onReset={handleReset} className="absolute right-6 top-6 md:right-12" />
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {presentContent.title.headline}
        </h1>
        <p className="mb-12 text-lg text-muted-foreground md:text-xl">
          {presentContent.title.subtitle}
        </p>
      </div>
      <footer className="absolute bottom-8 text-center">
        <p className="text-sm text-muted-foreground">{sharedContent.meta.author}, {sharedContent.meta.role}</p>
      </footer>
    </section>
  );

  const renderPresentContext = () => (
    <PresentSlide header={presentContent.context.header}>
      <div className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-2 text-sm text-muted-foreground">The Opportunity</p>
            <p className="text-lg font-medium text-foreground">{presentContent.context.opportunity}</p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-2 text-sm text-muted-foreground">Proposed Solution</p>
            <p className="text-lg font-semibold text-foreground">{presentContent.context.proposedSolution}</p>
            <p className="mt-2 text-muted-foreground">{presentContent.context.proposedSolutionDetail}</p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">{presentContent.context.assumptionsHeader}</p>
          <div className="space-y-3">
            {presentContent.context.assumptions.map((a, i) => (
              <div key={i} className="rounded-xl bg-muted/60 p-4">
                <p className="text-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-background p-5">
          <div className="grid gap-6 sm:grid-cols-3">
            <div><p className="text-sm text-muted-foreground">My Role</p><p className="font-medium text-foreground">{sharedContent.team.myRole}</p><p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.myRoleDescription}</p></div>
            <div><p className="text-sm text-muted-foreground">Team</p><p className="font-medium text-foreground">{sharedContent.team.team}</p><p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.teamDescription}</p></div>
            <div><p className="text-sm text-muted-foreground">Stakeholders</p><p className="font-medium text-foreground">{sharedContent.team.stakeholders}</p><p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.stakeholdersDescription}</p></div>
          </div>
        </div>
      </div>
    </PresentSlide>
  );

  const renderPresentObjectives = () => (
    <PresentSlide header={presentContent.objectives.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-accent/50 p-5">
          <p className="text-lg text-foreground">{presentContent.objectives.framing}</p>
        </div>
        <div className="space-y-4">
          {presentContent.objectives.objectivesList.map((obj, i) => (
            <div key={i} className="rounded-2xl bg-muted/60 p-6">
              <h3 className="mb-3 text-xl font-semibold text-foreground">{obj.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {obj.questions.map((q, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PresentSlide>
  );

  const renderPresentApproach = () => (
    <PresentSlide header={presentContent.approach.header}>
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-foreground">{presentContent.approach.title}</h3>
        <Carousel>
          {presentContent.approach.methods.map((method) => (
            <div key={method.title} className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground">{method.title}</h4>
              <div className="rounded-2xl bg-muted/60 p-6">
                <div className="grid gap-4 sm:grid-cols-2 mb-4">
                  {Object.entries(method.details).filter(([key]) => key !== 'description').map(([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-muted-foreground capitalize">{key}</p>
                      <p className="font-medium text-foreground">{value as string}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{method.details.description}</p>
              </div>
              {method.title.includes('Survey') && (
                <div className="flex gap-3">
                  <SurveyQuestionExamplesModal />
                  <SurveyAnalysisModal />
                </div>
              )}
              {method.title.includes('Diary') && (
                <div className="flex gap-3">
                  <DiaryActivityModal />
                  <DiaryAnalysisModal />
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </PresentSlide>
  );

  const renderPresentFindings = () => (
    <PresentSlide header={presentContent.findings.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="text-xl font-semibold text-foreground">{presentContent.findings.leadFinding}</p>
        </div>
        <div className="space-y-3">
          {presentContent.findings.validated.map((item, i) => (
            <div key={i} className="rounded-2xl border-2 border-green-500/30 bg-green-500/5 p-5">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600">Validated</span>
              </div>
              <p className="mb-1 font-semibold text-foreground">{item.hypothesis}</p>
              <p className="text-muted-foreground">{item.finding}</p>
            </div>
          ))}
          {presentContent.findings.notValidated.map((item, i) => (
            <div key={i} className="rounded-2xl border-2 border-red-400/30 bg-red-500/5 p-5">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                  <X className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-red-700">Not Validated</span>
              </div>
              <p className="mb-1 font-semibold text-foreground">{item.hypothesis}</p>
              <p className="text-muted-foreground">{item.finding}</p>
            </div>
          ))}
        </div>
      </div>
    </PresentSlide>
  );

  const renderPresentInsight = () => (
    <PresentSlide header={presentContent.insight.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-[hsl(210,35%,93%)] p-6">
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Key Insight</span>
          </div>
          <blockquote className="text-2xl font-semibold text-foreground md:text-3xl">{presentContent.insight.keyInsight}</blockquote>
          <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Survey finding:</strong> {presentContent.insight.surveyFinding}</p>
        </div>
        <Carousel>
          {presentContent.insight.issues.map((issue, i) => (
            <div key={i} className="rounded-2xl bg-muted/60 p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">{issue.title}</h3>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{issue.description}</p>
              <div className="rounded-xl bg-background p-5">
                <p className="italic text-foreground">"{issue.quote}"</p>
                <p className="mt-2 text-sm text-muted-foreground">— {issue.participant} (Diary study participant)</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </PresentSlide>
  );

  const renderPresentTriangulation = () => (
    <PresentSlide header={presentContent.triangulation.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-amber-500/10 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-foreground">{presentContent.triangulation.abTestResult}</p>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">{presentContent.triangulation.coreProblemTitle}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-2 text-sm font-medium text-muted-foreground">What the survey predicted</p>
              <p className="text-foreground">{presentContent.triangulation.surveyPredicted}</p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-2 text-sm font-medium text-muted-foreground">What behavioral data showed</p>
              <p className="text-foreground">{presentContent.triangulation.behavioralShowed}</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border-2 border-red-400/30 bg-red-500/5 p-5">
            <div className="flex items-start gap-3">
              <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-700" />
              <div>
                <p className="font-semibold text-foreground">The Disconnect</p>
                <p className="mt-1 text-muted-foreground">{presentContent.triangulation.disconnect}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {presentContent.triangulation.diaryExplanation.map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-foreground">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </PresentSlide>
  );

  const renderPresentRecommendations = () => (
    <PresentSlide header={presentContent.recommendations.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-amber-500/10 p-5">
          <p className="text-foreground"><strong>The challenge:</strong> {presentContent.recommendations.challenge}</p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Communication Strategy</h3>
          <ProgressiveReveal>
            {presentContent.recommendations.strategies.map((strategy, i) => (
              <div key={i} className="rounded-2xl bg-muted/60 p-6">
                <p className="mb-2 text-sm font-semibold text-primary">{strategy.title}</p>
                <p className="text-muted-foreground">{strategy.description}</p>
              </div>
            ))}
          </ProgressiveReveal>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Recommendations</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {presentContent.recommendations.recommendationsList.map((rec, i) => (
              <div key={i} className="rounded-2xl bg-accent/50 p-5">
                <p className="mb-1 font-semibold text-foreground">{rec.title}</p>
                <p className="mb-3 text-sm text-muted-foreground">{rec.subtitle}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {rec.points.map((pt, j) => <li key={j}>• {pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PresentSlide>
  );

  const renderPresentImpact = () => (
    <PresentSlide header={presentContent.impact.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-[hsl(210,35%,93%)] p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">{presentContent.impact.title}</h2>
          </div>
          {presentContent.impact.timingNote && (
            <p className="mt-2 text-sm text-muted-foreground">{presentContent.impact.timingNote}</p>
          )}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {presentContent.impact.impactPoints.map((point) => (
            <div key={point.number} className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(90,30%,85%)]">
                <span className="text-lg font-bold text-[hsl(90,40%,28%)]">{point.number}</span>
              </div>
              <p className="font-semibold text-foreground">{point.title}</p>
              <p className="mt-2 text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PresentSlide>
  );

  const renderPresentReflection = () => (
    <PresentSlide header={presentContent.reflection.header}>
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-foreground">{presentContent.reflection.title}</h3>
        <ProgressiveReveal>
          {presentContent.reflection.lessonsList.map((lesson) => (
            <div key={lesson.number} className="rounded-2xl bg-muted/60 p-6">
              <div className="mb-2 flex items-baseline gap-3">
                <span className="text-sm font-medium text-primary">{lesson.number}</span>
                <h3 className="text-xl font-semibold text-foreground">{lesson.title}</h3>
              </div>
              <p className="text-lg text-muted-foreground">{lesson.description}</p>
            </div>
          ))}
        </ProgressiveReveal>
      </div>
    </PresentSlide>
  );

  const renderPresentMode = () => (
    <>
      <div className="fixed top-6 right-6 md:right-12 z-50">
        <ModeToggle mode={mode} onModeChange={setMode} onReset={handleReset} />
      </div>
      <Link to="/" className="fixed left-6 top-6 z-50 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12">
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>
      <div key={resetKey} className="snap-y snap-mandatory overflow-y-scroll h-screen">
        {renderPresentTitle()}
        {renderPresentContext()}
        {renderPresentObjectives()}
        {renderPresentApproach()}
        {renderPresentFindings()}
        {renderPresentInsight()}
        {renderPresentTriangulation()}
        {renderPresentRecommendations()}
        {renderPresentImpact()}
        {renderPresentReflection()}
      </div>
    </>
  );

  // Present mode rendering
  if (mode === 'present') {
    return renderPresentMode();
  }

  // Read mode
  return (
    <>
      {/* Slide 0: Title */}
      <section
        id="slide-0"
        className="relative flex min-h-screen snap-start flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-6"
      >
        <Link to="/" className="absolute left-6 top-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
        <ModeToggle mode={mode} onModeChange={setMode} onReset={handleReset} className="absolute right-6 top-6 md:right-12" />
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {sharedContent.meta.title}
          </h1>
          <p className="mb-12 text-lg text-muted-foreground md:text-xl">
            {readContent.title.subtitle}
          </p>
          <Button variant="outline" size="lg" onClick={() => scrollToSlide(1)} className="group">
            Start Reading
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
        <footer className="absolute bottom-8 text-center">
          <p className="text-sm text-muted-foreground">{sharedContent.meta.author}, {sharedContent.meta.role}</p>
        </footer>
      </section>

      {/* Slide 1: Context */}
      <ReadSlide slideNumber={1} header={readContent.context.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{readContent.context.opportunityTitle}</h3>
            <p className="leading-relaxed text-muted-foreground">{readContent.context.opportunity}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{readContent.context.opportunityDetail}</p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-5">
            <p className="mb-1 text-sm text-muted-foreground">The Proposed Solution</p>
            <p className="text-lg font-semibold text-foreground">{readContent.context.proposedSolution}</p>
            <p className="mt-2 text-muted-foreground">{readContent.context.proposedSolutionDetail}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Assumptions Behind the Watch Tab</h3>
            <div className="space-y-3">
              {readContent.context.assumptions.map((assumption, i) => (
                <div key={i} className="rounded-xl bg-muted/60 p-4">
                  <p className="text-foreground">{assumption}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="mb-3 text-lg font-semibold text-foreground">{readContent.context.stakeholderDynamicsTitle}</h3>
            <p className="leading-relaxed text-muted-foreground">{readContent.context.stakeholderDynamics}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{readContent.context.stakeholderDynamicsDetail}</p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">My Role</p>
                <p className="font-medium text-foreground">{sharedContent.team.myRole}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.myRoleDescription}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Team</p>
                <p className="font-medium text-foreground">{sharedContent.team.team}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.teamDescription}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stakeholders</p>
                <p className="font-medium text-foreground">{sharedContent.team.stakeholders}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.stakeholdersDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 2: Objectives */}
      <ReadSlide slideNumber={2} header={readContent.objectives.header}>
        <div className="space-y-10">
          <p className="text-lg leading-relaxed text-muted-foreground">{readContent.objectives.framing}</p>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.objectives.objective1Title}</h3>
            <div className="space-y-3">
              {readContent.objectives.hypotheses.map((h, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-foreground">{h}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.objectives.objective2Title}</h3>
            <div className="space-y-3">
              {readContent.objectives.experienceQuestions.map((q, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-foreground">{q}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.objectives.objective3Title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-green-500/10 p-4">
                <p className="mb-1 text-sm font-medium text-green-600">If metrics are positive</p>
                <p className="text-foreground">{readContent.objectives.ifPositive}</p>
              </div>
              <div className="rounded-xl bg-amber-500/10 p-4">
                <p className="mb-1 text-sm font-medium text-amber-600">If neutral/negative</p>
                <p className="text-foreground">{readContent.objectives.ifNeutral}</p>
              </div>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 3: Approach */}
      <ReadSlide slideNumber={3} header={readContent.approach.header}>
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-foreground">{readContent.approach.title}</h2>

          {/* Survey */}
          <div className="rounded-2xl bg-accent/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.approach.survey.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><p className="text-sm text-muted-foreground">Sample</p><p className="font-medium text-foreground">{readContent.approach.survey.sample}</p></div>
              <div><p className="text-sm text-muted-foreground">Fielded</p><p className="font-medium text-foreground">{readContent.approach.survey.fielded}</p></div>
              <div><p className="text-sm text-muted-foreground">Method</p><p className="font-medium text-foreground">{readContent.approach.survey.method}</p></div>
              <div><p className="text-sm text-muted-foreground">Analysis</p><p className="font-medium text-foreground">{readContent.approach.survey.analysis}</p></div>
            </div>
            <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Purpose:</strong> {readContent.approach.survey.purpose}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {/* Survey Question Examples Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" />
                    See survey question examples
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Survey Question Examples</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    {readContent.approach.survey.questionExamples.map((example, i) => (
                      <div key={i} className="rounded-lg bg-muted/50 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">{example.category}</p>
                        <p className="mb-3 font-medium text-foreground">{example.question}</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          {example.options.map((opt, j) => (
                            <p key={j}>• {opt}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground italic">
                      Survey responses were weighted by platform, user type, and active days for representativeness.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Survey Analysis Approach Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <BarChart3 className="h-4 w-4" />
                    See analysis approach
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Survey Analysis Approach</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    {readContent.approach.survey.analysisSteps.map((step, i) => (
                      <div key={i} className="rounded-lg bg-muted/50 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {i === 3 && (
                          <>
                            <div className="mt-3 rounded-lg overflow-hidden bg-white p-2">
                              <img src={regressionChart} alt="Regression analysis example" className="w-full h-auto" />
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground italic">Example regression output (data shown is illustrative, not actual results)</p>
                          </>
                        )}
                        {i === 4 && (
                          <>
                            <div className="mt-3 space-y-3">
                              <div className="rounded-lg overflow-hidden bg-white p-2">
                                <img src={exampleChart} alt="Example grouped bar chart in NYT style" className="w-full h-auto" />
                              </div>
                              <div className="rounded-lg overflow-hidden bg-white p-2">
                                <img src={videoRoleChart} alt="Videos role in news consumption" className="w-full h-auto" />
                              </div>
                              <div className="rounded-lg overflow-hidden bg-white p-2">
                                <img src={pewSocialMediaChart} alt="News consumption by social media site" className="w-full h-auto" />
                              </div>
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground italic">Example visualizations (data shown is illustrative, not actual results)</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Diary Study */}
          <div className="rounded-2xl bg-muted/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.approach.diaryStudy.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><p className="text-sm text-muted-foreground">Sample</p><p className="font-medium text-foreground">{readContent.approach.diaryStudy.sample}</p></div>
              <div><p className="text-sm text-muted-foreground">Fielded</p><p className="font-medium text-foreground">{readContent.approach.diaryStudy.fielded}</p></div>
              <div><p className="text-sm text-muted-foreground">Mix</p><p className="font-medium text-foreground">{readContent.approach.diaryStudy.mix}</p></div>
              <div><p className="text-sm text-muted-foreground">Recruited</p><p className="font-medium text-foreground">{readContent.approach.diaryStudy.recruited}</p></div>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-sm text-muted-foreground">Activities:</p>
              <ul className="space-y-1 text-foreground">
                {readContent.approach.diaryStudy.activities.map((activity, i) => (
                  <li key={i}>• {activity}</li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Purpose:</strong> {readContent.approach.diaryStudy.purpose}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {/* Diary Study Activity Examples Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    See diary study activity examples
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Diary Study Activity Examples</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    {readContent.approach.diaryStudy.activityExamples.map((example, i) => (
                      <div key={i} className="rounded-lg bg-muted/50 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">{example.day}</p>
                        <p className="mb-3 font-medium text-foreground">{example.title}</p>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground italic">
                      Participants also submitted "moments" throughout the week—screenshots of anything uniquely valuable or confusing they encountered.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Diary Study Analysis Approach Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Users className="h-4 w-4" />
                    See analysis approach
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Diary Study Analysis Approach</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    {readContent.approach.diaryStudy.analysisSteps.map((step, i) => (
                      <div key={i} className="rounded-lg bg-muted/50 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {i === 1 && (
                          <>
                            <div className="mt-3 rounded-lg overflow-hidden">
                              <img src={figjamScreenshot} alt="FigJam synthesis board" className="w-full h-auto" />
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground italic">FigJam board used for collaborative synthesis</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Why This Approach */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Why This Approach?</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {readContent.approach.whyThisApproach.map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Constraints */}
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Constraints & How I Addressed Them</h3>
            <div className="space-y-3">
              {readContent.approach.constraints.map((constraint, i) => (
                <div key={i}>
                  <p className="font-medium text-foreground">{constraint.title}</p>
                  <p className="text-sm text-muted-foreground">{constraint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 4: Findings */}
      <ReadSlide slideNumber={4} header={readContent.findings.header}>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">{readContent.findings.title}</h2>
          <div className="space-y-4">
            {readContent.findings.validated.map((item, i) => (
              <div key={i} className="rounded-2xl border-2 border-green-500/30 bg-green-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-green-600">Validated</span>
                </div>
                <p className="mb-2 font-semibold text-foreground">{item.hypothesis}</p>
                <p className="text-muted-foreground">{item.finding}</p>
              </div>
            ))}
            {readContent.findings.notValidated.map((item, i) => (
              <div key={i} className="rounded-2xl border-2 border-red-400/30 bg-red-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                    <X className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-red-700">Not Validated</span>
                </div>
                <p className="mb-2 font-semibold text-foreground">{item.hypothesis}</p>
                <p className="text-muted-foreground">{item.finding}</p>
              </div>
            ))}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 5: Insight */}
      <ReadSlide slideNumber={5} header={readContent.insight.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-[hsl(210,35%,93%)] p-6">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Key Insight</span>
            </div>
            <blockquote className="text-2xl font-semibold text-foreground md:text-3xl">{readContent.insight.keyInsight}</blockquote>
            <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Survey finding:</strong> {readContent.insight.surveyFinding}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.insight.diaryStudyTitle}</h3>
            <p className="mb-6 text-muted-foreground">{readContent.insight.diaryStudyIntro}</p>
          </div>
          {readContent.insight.issues.map((issue, i) => (
            <div key={i}>
              <h4 className="mb-3 font-semibold text-foreground">{issue.title}</h4>
              <p className="mb-4 text-muted-foreground">{issue.description}</p>
              <div className="rounded-xl bg-muted/60 p-4">
                <p className="italic text-foreground">"{issue.quote}"</p>
                <p className="mt-2 text-sm text-muted-foreground">— {issue.participant} (Diary study participant)</p>
              </div>
            </div>
          ))}
        </div>
      </ReadSlide>

      {/* Slide 6: Triangulation */}
      <ReadSlide slideNumber={6} header={readContent.triangulation.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-amber-500/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <span className="font-semibold text-foreground">When the A/B Test Came Back Neutral</span>
            </div>
            <p className="text-muted-foreground">{readContent.triangulation.abTestResult}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.triangulation.coreProblemTitle}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-accent/50 p-5">
                <p className="mb-2 text-sm font-medium text-muted-foreground">What the survey predicted</p>
                <p className="text-foreground">{readContent.triangulation.surveyPredicted}</p>
              </div>
              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="mb-2 text-sm font-medium text-muted-foreground">What the behavioral data showed</p>
                <p className="text-foreground">{readContent.triangulation.behavioralShowed}</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border-2 border-red-400/30 bg-red-500/5 p-5">
              <div className="flex items-start gap-3">
                <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-700" />
                <div>
                  <p className="font-semibold text-foreground">The Disconnect</p>
                  <p className="mt-1 text-muted-foreground">{readContent.triangulation.disconnect}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 7: Recommendations */}
      <ReadSlide slideNumber={7} header={readContent.recommendations.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-amber-500/10 p-5">
            <p className="mb-2 text-sm font-medium text-amber-600">Challenge</p>
            <p className="text-foreground">{readContent.recommendations.challenge}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.recommendations.communicationStrategyTitle}</h3>
            <div className="space-y-4">
              {readContent.recommendations.strategies.map((strategy, i) => (
                <div key={i} className="rounded-2xl border border-border bg-background p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">{strategy.title}</span>
                  </div>
                  {strategy.points && (
                    <ul className="space-y-2 text-muted-foreground">
                      {strategy.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {strategy.quote && <p className="italic text-muted-foreground">{strategy.quote}</p>}
                  {strategy.result && (
                    <div className="mt-3 rounded-xl bg-[hsl(90,28%,90%)] p-4">
                      <p className="text-foreground"><strong>Result:</strong> {strategy.result}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.recommendations.recommendationsTitle}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {readContent.recommendations.recommendationsList.map((rec, i) => (
                <div key={i} className="rounded-2xl bg-accent/50 p-5">
                  <p className="mb-2 font-semibold text-foreground">{rec.title}</p>
                  <p className="mb-3 text-muted-foreground">{rec.subtitle}</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {rec.points.map((point, j) => (
                      <li key={j}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 8: Impact */}
      <ReadSlide slideNumber={8} header={readContent.impact.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-[hsl(210,35%,93%)] p-6">
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Impact</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">{readContent.impact.title}</h2>
            {readContent.impact.timingNote && (
              <p className="mt-2 text-sm text-muted-foreground">{readContent.impact.timingNote}</p>
            )}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {readContent.impact.impactPoints.map((point) => (
              <div key={point.number} className="rounded-2xl border border-border bg-background p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(90,30%,85%)]">
                  <span className="text-lg font-bold text-[hsl(90,40%,28%)]">{point.number}</span>
                </div>
                <p className="font-semibold text-foreground">{point.title}</p>
                <p className="mt-2 text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-muted/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">What's Next</h3>
            <div className="space-y-3">
              {readContent.impact.nextSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 9: Reflections */}
      <ReadSlide slideNumber={9} header={readContent.reflection.header}>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">{readContent.reflection.title}</h2>
          <div className="space-y-6">
            {readContent.reflection.lessonsList.map((lesson) => (
              <div key={lesson.number} className="rounded-2xl bg-accent/50 p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(210,35%,93%)] text-sm font-bold text-primary">
                    {lesson.number}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{lesson.title}</h3>
                </div>
                <p className="text-muted-foreground">{lesson.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ReadSlide>
    </>
  );
};

export default NYTWatchTabCaseStudy;
