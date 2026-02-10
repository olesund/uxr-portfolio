/**
 * NYT Watch Tab Case Study
 *
 * All content comes from: src/data/nyt-watch-tab-content.ts
 * Edit that file to change any text on this page.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, Check, X, Lightbulb, AlertTriangle, TrendingDown, TrendingUp, ArrowRight, Clock, Shield, Layers, Users, MessageCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { nytWatchTabContent as content } from '@/data/nyt-watch-tab-content';

interface Props {
  isPresent: boolean;
  currentSlide: number;
}

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
        isEven ? 'bg-secondary/50' : 'bg-background'
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

const PresentSlide: React.FC<{ header?: string; children: React.ReactNode }> = ({ header, children }) => (
  <motion.section
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="flex min-h-screen flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-24 bg-slate-900 text-slate-100"
  >
    <div className="mx-auto w-full max-w-4xl">
      {header && (
        <p className="mb-8 text-sm font-medium uppercase tracking-wider text-orange-400">
          {header}
        </p>
      )}
      {children}
    </div>
  </motion.section>
);

// Icon components mapping
const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  Clock, Shield, Layers, Users, MessageCircle, Zap, Lightbulb, AlertTriangle, TrendingDown, TrendingUp, ArrowRight
};

// ============================================
// MAIN COMPONENT
// ============================================

const NYTWatchTabCaseStudy: React.FC<Props> = ({ isPresent, currentSlide }) => {
  const scrollToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  // PRESENT MODE - Show only current slide
  if (isPresent) {
    return renderPresentSlide(currentSlide);
  }

  // READ MODE - Show all slides
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
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {content.meta.title}
          </h1>
          <p className="mb-12 text-lg text-muted-foreground md:text-xl">
            {content.meta.subtitle}
          </p>
          <Button variant="outline" size="lg" onClick={() => scrollToSlide(1)} className="group">
            Start Reading
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
        <footer className="absolute bottom-8 text-center">
          <p className="text-sm text-muted-foreground">{content.meta.author}, {content.meta.role}</p>
        </footer>
      </section>

      {/* Slide 1: Context */}
      <ReadSlide slideNumber={1} header={content.context.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{content.context.opportunityTitle}</h3>
            <p className="leading-relaxed text-muted-foreground">{content.context.opportunity}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{content.context.opportunityDetail}</p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-5">
            <p className="mb-1 text-sm text-muted-foreground">The Proposed Solution</p>
            <p className="text-lg font-semibold text-foreground">{content.context.proposedSolution}</p>
            <p className="mt-2 text-muted-foreground">{content.context.proposedSolutionDetail}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Assumptions Behind the Watch Tab</h3>
            <div className="space-y-3">
              {content.context.assumptions.map((assumption, i) => (
                <div key={i} className="rounded-xl bg-muted/60 p-4">
                  <p className="text-foreground">{assumption}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="mb-3 text-lg font-semibold text-foreground">{content.context.stakeholderDynamicsTitle}</h3>
            <p className="leading-relaxed text-muted-foreground">{content.context.stakeholderDynamics}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{content.context.stakeholderDynamicsDetail}</p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">My Role</p>
                <p className="font-medium text-foreground">{content.context.team.myRole}</p>
                <p className="mt-1 text-sm text-muted-foreground">{content.context.team.myRoleDescription}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Team</p>
                <p className="font-medium text-foreground">{content.context.team.team}</p>
                <p className="mt-1 text-sm text-muted-foreground">{content.context.team.teamDescription}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stakeholders</p>
                <p className="font-medium text-foreground">{content.context.team.stakeholders}</p>
                <p className="mt-1 text-sm text-muted-foreground">{content.context.team.stakeholdersDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 2: Objectives */}
      <ReadSlide slideNumber={2} header={content.objectives.header}>
        <div className="space-y-10">
          <p className="text-lg leading-relaxed text-muted-foreground">{content.objectives.framing}</p>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.objectives.objective1Title}</h3>
            <div className="space-y-3">
              {content.objectives.hypotheses.map((h, i) => (
                <div key={i} className="rounded-xl bg-muted/60 p-4">
                  <p className="text-foreground">{h}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.objectives.objective2Title}</h3>
            <div className="space-y-3">
              {content.objectives.experienceQuestions.map((q, i) => (
                <div key={i} className="rounded-xl bg-accent/50 p-4">
                  <p className="text-foreground">{q}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.objectives.objective3Title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-green-500/10 p-4">
                <p className="mb-1 text-sm font-medium text-green-600">If metrics are positive</p>
                <p className="text-foreground">{content.objectives.ifPositive}</p>
              </div>
              <div className="rounded-xl bg-amber-500/10 p-4">
                <p className="mb-1 text-sm font-medium text-amber-600">If neutral/negative</p>
                <p className="text-foreground">{content.objectives.ifNeutral}</p>
              </div>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 3: Approach */}
      <ReadSlide slideNumber={3} header={content.approach.header}>
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-foreground">{content.approach.title}</h2>
          <div className="rounded-2xl bg-accent/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.approach.survey.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><p className="text-sm text-muted-foreground">Sample</p><p className="font-medium text-foreground">{content.approach.survey.sample}</p></div>
              <div><p className="text-sm text-muted-foreground">Fielded</p><p className="font-medium text-foreground">{content.approach.survey.fielded}</p></div>
              <div><p className="text-sm text-muted-foreground">Method</p><p className="font-medium text-foreground">{content.approach.survey.method}</p></div>
              <div><p className="text-sm text-muted-foreground">Analysis</p><p className="font-medium text-foreground">{content.approach.survey.analysis}</p></div>
            </div>
            <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Purpose:</strong> {content.approach.survey.purpose}</p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.approach.diaryStudy.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><p className="text-sm text-muted-foreground">Sample</p><p className="font-medium text-foreground">{content.approach.diaryStudy.sample}</p></div>
              <div><p className="text-sm text-muted-foreground">Fielded</p><p className="font-medium text-foreground">{content.approach.diaryStudy.fielded}</p></div>
              <div><p className="text-sm text-muted-foreground">Mix</p><p className="font-medium text-foreground">{content.approach.diaryStudy.mix}</p></div>
              <div><p className="text-sm text-muted-foreground">Recruited</p><p className="font-medium text-foreground">{content.approach.diaryStudy.recruited}</p></div>
            </div>
            <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Purpose:</strong> {content.approach.diaryStudy.purpose}</p>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 4: Findings */}
      <ReadSlide slideNumber={4} header={content.findings.header}>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">{content.findings.title}</h2>
          <div className="space-y-4">
            {content.findings.validated.map((item, i) => (
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
            {content.findings.notValidated.map((item, i) => (
              <div key={i} className="rounded-2xl border-2 border-red-500/30 bg-red-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                    <X className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-red-600">Not Validated</span>
                </div>
                <p className="mb-2 font-semibold text-foreground">{item.hypothesis}</p>
                <p className="text-muted-foreground">{item.finding}</p>
              </div>
            ))}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 5: Insight */}
      <ReadSlide slideNumber={5} header={content.insight.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-primary/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Key Insight</span>
            </div>
            <blockquote className="text-2xl font-semibold text-foreground md:text-3xl">{content.insight.keyInsight}</blockquote>
            <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Survey finding:</strong> {content.insight.surveyFinding}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.insight.diaryStudyTitle}</h3>
            <p className="mb-6 text-muted-foreground">{content.insight.diaryStudyIntro}</p>
          </div>
          {content.insight.issues.map((issue, i) => (
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
      <ReadSlide slideNumber={6} header={content.triangulation.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-amber-500/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <span className="font-semibold text-foreground">When the A/B Test Came Back Neutral</span>
            </div>
            <p className="text-muted-foreground">{content.triangulation.abTestResult}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.triangulation.coreProblemTitle}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-accent/50 p-5">
                <p className="mb-2 text-sm font-medium text-muted-foreground">What the survey predicted</p>
                <p className="text-foreground">{content.triangulation.surveyPredicted}</p>
              </div>
              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="mb-2 text-sm font-medium text-muted-foreground">What the behavioral data showed</p>
                <p className="text-foreground">{content.triangulation.behavioralShowed}</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-5">
              <div className="flex items-start gap-3">
                <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                <div>
                  <p className="font-semibold text-foreground">The Disconnect</p>
                  <p className="mt-1 text-muted-foreground">{content.triangulation.disconnect}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 7: Recommendations */}
      <ReadSlide slideNumber={7} header={content.recommendations.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-amber-500/10 p-5">
            <p className="mb-2 text-sm font-medium text-amber-600">Challenge</p>
            <p className="text-foreground">{content.recommendations.challenge}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.recommendations.communicationStrategyTitle}</h3>
            <div className="space-y-4">
              {content.recommendations.strategies.map((strategy, i) => (
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
                    <div className="mt-3 rounded-xl bg-green-500/10 p-4">
                      <p className="text-foreground"><strong>Result:</strong> {strategy.result}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{content.recommendations.recommendationsTitle}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {content.recommendations.recommendationsList.map((rec, i) => (
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
      <ReadSlide slideNumber={8} header={content.impact.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-primary/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Impact</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">{content.impact.title}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {content.impact.impactPoints.map((point) => (
              <div key={point.number} className="rounded-2xl border border-border bg-background p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                  <span className="text-lg font-bold text-green-600">{point.number}</span>
                </div>
                <p className="font-semibold text-foreground">{point.title}</p>
                <p className="mt-2 text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-muted/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">What's Next</h3>
            <div className="space-y-3">
              {content.impact.nextSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 9: Reflection */}
      <ReadSlide slideNumber={9} header={content.reflection.header}>
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-foreground">{content.reflection.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {content.reflection.factors.map((factor, i) => {
              const IconComponent = iconComponents[factor.icon];
              return (
                <div key={i} className="rounded-2xl bg-accent/50 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    {IconComponent && <IconComponent className="h-5 w-5 text-primary" />}
                    <span className="font-semibold text-foreground">{factor.title}</span>
                  </div>
                  <p className="text-muted-foreground">{factor.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ReadSlide>
    </>
  );
};

// ============================================
// PRESENT MODE SLIDES
// ============================================

function renderPresentSlide(slideIndex: number) {
  switch (slideIndex) {
    case 0:
      return (
        <PresentSlide>
          <div className="text-center">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">{content.meta.title}</h1>
            <p className="mb-12 text-xl text-slate-300 md:text-2xl">{content.meta.subtitle}</p>
            <div className="mt-16 space-y-2 text-slate-400">
              <p className="text-lg">{content.meta.author}</p>
              <p>{content.meta.role}</p>
            </div>
          </div>
        </PresentSlide>
      );

    case 1:
      return (
        <PresentSlide header={content.context.header}>
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{content.context.opportunityTitle}</h2>
              <p className="text-xl text-slate-300">{content.context.opportunity.split('.')[0]}.</p>
            </div>
            <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
              <p className="mb-2 text-sm text-slate-400">Proposed Solution</p>
              <p className="text-xl font-semibold text-white">{content.context.proposedSolution}</p>
              <p className="mt-2 text-slate-300">15-20 editorially curated videos per day</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">Assumptions Behind the Watch Tab</h3>
              <ul className="space-y-2 text-lg text-slate-300">
                <li>• Will improve engagement with less-engaged users</li>
                <li>• Can serve as a "video version" of daily top stories</li>
                <li>• Editorial curation will be valued over personalization</li>
              </ul>
            </div>
          </div>
        </PresentSlide>
      );

    case 2:
      return (
        <PresentSlide header={content.objectives.header}>
          <div className="space-y-8">
            <p className="text-xl text-slate-300">{content.objectives.framing}</p>
            <div className="space-y-4">
              <div className="rounded-2xl bg-orange-500/20 p-5 border border-orange-500/30">
                <h3 className="mb-3 text-xl font-semibold text-white">{content.objectives.objective1Title}</h3>
                <ul className="space-y-1 text-slate-300">
                  {content.objectives.hypotheses.slice(0, 3).map((h, i) => (
                    <li key={i}>• {h}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-white">{content.objectives.objective3Title}</h3>
                <div className="grid gap-3 md:grid-cols-2 mt-3">
                  <div className="rounded-xl bg-green-500/20 p-3 border border-green-500/30">
                    <p className="text-sm font-medium text-green-400">If positive</p>
                    <p className="text-white">{content.objectives.ifPositive}</p>
                  </div>
                  <div className="rounded-xl bg-amber-500/20 p-3 border border-amber-500/30">
                    <p className="text-sm font-medium text-amber-400">If neutral/negative</p>
                    <p className="text-white">{content.objectives.ifNeutral}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 3:
      return (
        <PresentSlide header={content.approach.header}>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">{content.approach.title}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
                <h3 className="mb-4 text-xl font-semibold text-white">{content.approach.survey.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-400">Sample</span><span className="font-medium text-white">{content.approach.survey.sample}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Method</span><span className="font-medium text-white">{content.approach.survey.method.split(' ').slice(0, 2).join(' ')}</span></div>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-6 border border-slate-700">
                <h3 className="mb-4 text-xl font-semibold text-white">{content.approach.diaryStudy.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-400">Sample</span><span className="font-medium text-white">{content.approach.diaryStudy.sample}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Duration</span><span className="font-medium text-white">7 days</span></div>
                </div>
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 4:
      return (
        <PresentSlide header={content.findings.header}>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">{content.findings.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {content.findings.validated.map((item, i) => (
                <div key={i} className="rounded-2xl bg-green-500/20 p-4 border border-green-500/30">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500"><Check className="h-4 w-4 text-white" /></div>
                    <span className="text-sm font-medium text-green-400">Validated</span>
                  </div>
                  <p className="font-semibold text-white">{item.hypothesis.split('?')[0].replace('Are ', '').replace('Is there', 'There is')}</p>
                </div>
              ))}
              {content.findings.notValidated.slice(0, 2).map((item, i) => (
                <div key={i} className="rounded-2xl bg-red-500/20 p-4 border border-red-500/30">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500"><X className="h-4 w-4 text-white" /></div>
                    <span className="text-sm font-medium text-red-400">Not Validated</span>
                  </div>
                  <p className="font-semibold text-white">{item.hypothesis.split('?')[0].replace('Is there', 'There is').replace('Are ', '')}</p>
                </div>
              ))}
            </div>
          </div>
        </PresentSlide>
      );

    case 5:
      return (
        <PresentSlide header={content.insight.header}>
          <div className="space-y-8">
            <div className="rounded-2xl bg-orange-500/20 p-8 text-center border border-orange-500/30">
              <div className="mb-4 flex justify-center"><Lightbulb className="h-8 w-8 text-orange-400" /></div>
              <blockquote className="text-2xl font-semibold text-white md:text-3xl">{content.insight.keyInsight}</blockquote>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">{content.insight.diaryStudyTitle}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {content.insight.issues.slice(0, 4).map((issue, i) => (
                  <div key={i} className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                    <p className="font-semibold text-white">{issue.title.split('. ')[1]}</p>
                    <p className="text-sm text-slate-300">{issue.description.split('.')[0]}.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 6:
      return (
        <PresentSlide header={content.triangulation.header}>
          <div className="space-y-8">
            <div className="rounded-2xl bg-amber-500/20 p-6 border border-amber-500/30">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <span className="font-semibold text-white">The A/B Test Came Back Neutral</span>
              </div>
              <p className="text-slate-300">Because research ran in parallel, we immediately had data to explain why.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">{content.triangulation.coreProblemTitle}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
                  <p className="mb-2 text-sm font-medium text-slate-400">Survey predicted</p>
                  <p className="text-white">{content.triangulation.surveyPredicted}</p>
                </div>
                <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                  <p className="mb-2 text-sm font-medium text-slate-400">Behavioral data showed</p>
                  <p className="text-white">{content.triangulation.behavioralShowed}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-red-500/20 p-5 border border-red-500/30">
              <div className="flex items-start gap-3">
                <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                <div>
                  <p className="font-semibold text-white">The Disconnect</p>
                  <p className="mt-1 text-slate-300">{content.triangulation.disconnect.split('.')[0]}.</p>
                </div>
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 7:
      return (
        <PresentSlide header={content.recommendations.header}>
          <div className="space-y-8">
            <h2 className="mb-4 text-3xl font-bold text-white">{content.recommendations.communicationStrategyTitle}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {content.recommendations.strategies.slice(0, 4).map((s, i) => (
                <div key={i} className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                  <p className="font-semibold text-white">{s.title.split('. ')[1]}</p>
                  <p className="text-sm text-slate-300">{s.points?.[0] || s.quote?.slice(0, 60) + '...'}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">The Recommendations</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {content.recommendations.recommendationsList.map((rec, i) => (
                  <div key={i} className="rounded-2xl bg-orange-500/20 p-5 border border-orange-500/30">
                    <p className="mb-2 font-semibold text-white">{rec.title}</p>
                    <p className="text-slate-300">{rec.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 8:
      return (
        <PresentSlide header={content.impact.header}>
          <div className="space-y-8">
            <div className="rounded-2xl bg-orange-500/20 p-6 text-center border border-orange-500/30">
              <div className="mb-4 flex justify-center"><TrendingUp className="h-8 w-8 text-orange-400" /></div>
              <h2 className="text-2xl font-bold text-white">{content.impact.title}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {content.impact.impactPoints.map((point) => (
                <div key={point.number} className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                    <span className="font-bold text-green-400">{point.number}</span>
                  </div>
                  <p className="font-semibold text-white">{point.title}</p>
                  <p className="text-sm text-slate-300">{point.description.split(' ').slice(0, 8).join(' ')}...</p>
                </div>
              ))}
            </div>
          </div>
        </PresentSlide>
      );

    case 9:
      return (
        <PresentSlide header={content.reflection.header}>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">{content.reflection.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.reflection.factors.map((factor, i) => {
                const IconComponent = iconComponents[factor.icon];
                return (
                  <div key={i} className="rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
                    <div className="mb-2 flex items-center gap-2">
                      {IconComponent && <IconComponent className="h-5 w-5 text-orange-400" />}
                      <span className="font-semibold text-white">{factor.title}</span>
                    </div>
                    <p className="text-sm text-slate-300">{factor.description.split(' ').slice(0, 6).join(' ')}...</p>
                  </div>
                );
              })}
            </div>
          </div>
        </PresentSlide>
      );

    default:
      return null;
  }
}

export default NYTWatchTabCaseStudy;
