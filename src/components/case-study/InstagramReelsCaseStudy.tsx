/**
 * Instagram Reels Case Study
 *
 * All content comes from: src/data/instagram-reels-content.ts
 * Edit that file to change any text on this page.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { instagramReelsContent as content } from '@/data/instagram-reels-content';

// Assets
import editorComparison from '@/assets/editor-comparison.png';
import easeOfUseChart from '@/assets/ease-of-use-chart.png';
import flywheelDiagram from '@/assets/flywheel-diagram.png';
import reelsEditorBefore from '@/assets/reels-editor-before.png';
import reelsEditorAfter from '@/assets/reels-editor-after.png';

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
  dark?: boolean;
}> = ({ slideNumber, header, children, dark = false }) => {
  const isEven = slideNumber % 2 === 0;

  return (
    <section
      id={`slide-${slideNumber}`}
      className={cn(
        'relative scroll-mt-0 snap-start px-6 py-12 md:px-12 lg:px-20',
        'border-b border-border min-h-[80vh] py-16 md:py-24',
        dark
          ? '!bg-[hsl(220,10%,20%)] !border-[hsl(220,10%,30%)]'
          : isEven ? 'bg-secondary/50' : 'bg-background'
      )}
    >
      {dark && (
        <style>{`
          #slide-${slideNumber} .text-primary { color: hsl(25, 70%, 55%); }
        `}</style>
      )}
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

// ============================================
// MAIN COMPONENT
// ============================================

const InstagramReelsCaseStudy: React.FC<Props> = ({ isPresent, currentSlide }) => {
  const scrollToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  // PRESENT MODE - Show only current slide
  if (isPresent) {
    return renderPresentSlide(currentSlide, scrollToSlide);
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

      {/* Slide 1: Problem */}
      <ReadSlide slideNumber={1} header={content.problem.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{content.problem.read.businessContextTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{content.problem.read.businessContext}</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-1 text-sm text-muted-foreground">Business Goal</p>
              <p className="text-lg font-semibold text-foreground">{content.problem.read.businessGoal}</p>
            </div>
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-1 text-sm text-muted-foreground">Core Question</p>
              <p className="text-lg font-semibold text-foreground">{content.problem.read.coreQuestion}</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mx-[30px]">{content.problem.read.scopeNote}</p>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">My Role</p>
                <p className="font-medium text-foreground">{content.problem.team.myRole}</p>
                <p className="mt-1 text-sm text-muted-foreground">{content.problem.team.myRoleDescription}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Team</p>
                <p className="font-medium text-foreground">{content.problem.team.team}</p>
                <p className="mt-1 text-sm text-muted-foreground">{content.problem.team.teamDescription}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stakeholders</p>
                <p className="font-medium text-foreground">{content.problem.team.stakeholders}</p>
                <p className="mt-1 text-sm text-muted-foreground">{content.problem.team.stakeholdersDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 2: Research Overview */}
      <ReadSlide slideNumber={2} header={content.researchOverview.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{content.researchOverview.title}</h3>
            <p className="text-muted-foreground">{content.researchOverview.description}</p>
          </div>
          <div className="space-y-4">
            {content.researchOverview.phases.map((phase) => (
              <div key={phase.number} className="rounded-2xl bg-muted/60 p-5">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="text-sm font-medium text-primary">Phase {phase.number}</span>
                  <span className="text-sm text-muted-foreground">({phase.type})</span>
                </div>
                <h4 className="font-semibold text-foreground">{phase.title}</h4>
                <p className="mt-1 text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 3: Phase 1 */}
      <ReadSlide slideNumber={3} header={content.phase1.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground">{content.phase1.objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(content.phase1.methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Data Collection</h3>
            <p className="text-muted-foreground mb-2">{content.phase1.dataCollectionIntro}</p>
            <ul className="space-y-2 text-muted-foreground">
              {content.phase1.dataCollection.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground">{content.phase1.dataCollectionNote}</p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-lg text-foreground">{content.phase1.keyFinding}</p>
            <ul className="space-y-2 text-foreground">
              {content.phase1.keyFindingDetails.map((detail, i) => (
                <li key={i}>• {detail}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden bg-background">
            <img src={editorComparison} alt="Step-by-step vs stacked timeline editor" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Recommendation to Leadership</p>
            <p className="text-foreground">{content.phase1.recommendation}</p>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 4: The Pivot */}
      <ReadSlide slideNumber={4} header={content.pivot.header} dark>
        <div className="space-y-10">
          <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-6 backdrop-blur-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>Outcome: Initial Rejection</p>
            <p className="mb-4 text-[hsl(40,30%,95%)]">{content.pivot.outcome}</p>
            <ul className="space-y-1 text-[hsl(40,30%,85%)]/80">
              {content.pivot.pushbackPoints.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[hsl(25,50%,35%)]/30 p-6 backdrop-blur-sm">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>The New Core Question</p>
            <p className="text-lg text-[hsl(40,30%,70%)] line-through decoration-2">{content.pivot.oldQuestion}</p>
            <p className="text-xl font-medium text-[hsl(40,30%,95%)] mt-4">
              {content.pivot.newQuestion.replace('good', '')}
              <strong style={{ color: 'hsl(25, 70%, 55%)' }}>good</strong>
              {' short-form videos on Instagram?'}
            </p>
            <div className="mt-6 pt-6 border-t border-[hsl(40,30%,95%)]/20">
              <p className="mb-4 text-[hsl(40,30%,95%)]">{content.pivot.followUp}</p>
              <ul className="space-y-1 text-[hsl(40,30%,95%)]">
                {content.pivot.additionalQuestions.map((q, i) => (
                  <li key={i}><strong>{q.charAt(0)}</strong>{q.slice(1)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 5: Phase 2 */}
      <ReadSlide slideNumber={5} header={content.phase2.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground">{content.phase2.objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(content.phase2.methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}:</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-lg text-foreground">{content.phase2.keyFinding}</p>
            <ul className="space-y-2 text-foreground">
              {content.phase2.keyAttributes.map((attr, i) => (
                <li key={i}><strong>{i + 1}. {attr.name}</strong> — {attr.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 6: Phase 3 */}
      <ReadSlide slideNumber={6} header={content.phase3.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground">{content.phase3.objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(content.phase3.methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}:</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-lg text-foreground">{content.phase3.keyFinding}</p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Basic Videos:</strong> {content.phase3.keyFindingDetails.basic}</li>
              <li><strong>Advanced Videos:</strong> {content.phase3.keyFindingDetails.advanced}</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden bg-background">
            <img src={easeOfUseChart} alt="Ease of use chart" className="w-full h-auto" />
          </div>
        </div>
      </ReadSlide>

      {/* Slide 7: Recommendation */}
      <ReadSlide slideNumber={7} header={content.recommendation.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Message to Leadership</p>
            <blockquote className="mb-4 text-2xl font-semibold text-foreground">{content.recommendation.keyMessage}</blockquote>
            <p className="mb-4 text-lg text-foreground">{content.recommendation.keyMessageSubtitle}</p>
            <p className="text-muted-foreground">{content.recommendation.keyMessageExplanation}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Three Pieces of Evidence</h3>
            <div className="space-y-4">
              {content.recommendation.threeEvidencePoints.map((point, i) => (
                <div key={i} className="rounded-2xl bg-muted/60 p-5">
                  <p className="font-semibold text-foreground">{point.title}</p>
                  <p className="mt-1 text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{content.recommendation.flywheelTitle}</h3>
            <p className="text-muted-foreground">{content.recommendation.flywheelExplanation}</p>
          </div>
          <div className="rounded-2xl overflow-hidden bg-background">
            <img src={flywheelDiagram} alt="Flywheel diagram" className="w-full h-auto" />
          </div>
        </div>
      </ReadSlide>

      {/* Slide 8: Impact */}
      <ReadSlide slideNumber={8} header={content.impact.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Leadership Decision</p>
            <p className="text-xl font-semibold text-foreground">{content.impact.leadershipDecision}</p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-5">
            <p className="font-medium text-foreground">Shipped the New Editor</p>
            <p className="mt-1 text-muted-foreground">{content.impact.shippedEditor}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden bg-background">
                <img src={reelsEditorBefore} alt="Before" className="w-full h-auto max-h-[420px] object-contain" />
              </div>
              <p className="text-sm font-medium text-foreground">Before</p>
              <p className="text-sm text-muted-foreground">{content.impact.beforeAfter.before}</p>
            </div>
            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden bg-background">
                <img src={reelsEditorAfter} alt="After" className="w-full h-auto max-h-[420px] object-contain" />
              </div>
              <p className="text-sm font-medium text-foreground">After</p>
              <p className="text-sm text-muted-foreground">{content.impact.beforeAfter.after}</p>
            </div>
          </div>
          <blockquote className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
            <p className="text-muted-foreground italic">{content.impact.pressQuote}</p>
            <footer className="mt-3">
              <a href={content.impact.pressUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                — {content.impact.pressSource}
              </a>
            </footer>
          </blockquote>
        </div>
      </ReadSlide>

      {/* Slide 9: Lessons */}
      <ReadSlide slideNumber={9} header={content.lessons.header} dark>
        <div className="space-y-10">
          <h3 className="mb-3 text-xl font-semibold text-[hsl(40,30%,95%)]">{content.lessons.title}</h3>
          <div className="space-y-4">
            {content.lessons.lessonsList.map((lesson) => (
              <div key={lesson.number} className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-5">
                <p className="mb-1 text-sm font-medium" style={{ color: 'hsl(25, 70%, 55%)' }}>{lesson.number}</p>
                <p className="font-semibold text-[hsl(40,30%,95%)]">{lesson.title}</p>
                <p className="mt-1 text-[hsl(40,30%,85%)]/80">{lesson.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[hsl(25,50%,35%)]/30 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>What I'd Do Differently</p>
            <p className="text-[hsl(40,30%,95%)]">{content.lessons.whatIdDoDifferently}</p>
          </div>
        </div>
      </ReadSlide>
    </>
  );
};

// ============================================
// PRESENT MODE SLIDES
// ============================================

function renderPresentSlide(slideIndex: number, scrollToSlide: (n: number) => void) {
  switch (slideIndex) {
    case 0:
      return (
        <PresentSlide>
          <div className="text-center">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">{content.meta.title}</h1>
            <p className="mb-12 text-xl text-slate-300 md:text-2xl">{content.meta.subtitleShort}</p>
            <div className="mt-16 space-y-2 text-slate-400">
              <p className="text-lg">{content.meta.author}</p>
              <p>{content.meta.role}</p>
            </div>
          </div>
        </PresentSlide>
      );

    case 1:
      return (
        <PresentSlide header={content.problem.header}>
          <div className="space-y-10">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{content.problem.present.title}</h2>
              <p className="text-xl text-slate-300">{content.problem.present.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-800/80 p-6 border border-slate-700">
                <p className="mb-2 text-sm text-slate-400">Business Goal</p>
                <p className="text-xl font-semibold text-white">{content.problem.present.businessGoal}</p>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-6 border border-slate-700">
                <p className="mb-2 text-sm text-slate-400">Core Question</p>
                <p className="text-xl font-semibold text-white">{content.problem.present.coreQuestion}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-800/50 p-6 border border-slate-700">
              <div className="grid gap-4 md:grid-cols-3 text-center">
                <div><p className="text-sm text-slate-400">My Role</p><p className="font-semibold text-white">{content.problem.team.myRole}</p></div>
                <div><p className="text-sm text-slate-400">Team</p><p className="font-semibold text-white">{content.problem.team.team}</p></div>
                <div><p className="text-sm text-slate-400">Stakeholders</p><p className="font-semibold text-white">{content.problem.team.stakeholders}</p></div>
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 2:
      return (
        <PresentSlide header={content.researchOverview.header}>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white md:text-4xl">{content.researchOverview.title}</h2>
            <p className="text-xl text-slate-300">{content.researchOverview.description}</p>
            <div className="space-y-4">
              {content.researchOverview.phases.map((phase) => (
                <div key={phase.number} className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-400">Phase {phase.number}</span>
                    <span className="text-sm text-slate-400">({phase.type})</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{phase.title}</h4>
                  <p className="mt-1 text-slate-300">{phase.insight}</p>
                </div>
              ))}
            </div>
          </div>
        </PresentSlide>
      );

    case 3:
      return (
        <PresentSlide header={content.phase1.header}>
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white">Key Finding</h2>
                <p className="text-xl text-slate-300">{content.phase1.keyFinding}</p>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-4 text-sm border border-slate-700">
                <div className="grid grid-cols-2 gap-3">
                  <div><p className="text-slate-400">Method</p><p className="font-medium text-white">{content.phase1.methodology.method}</p></div>
                  <div><p className="text-slate-400">Duration</p><p className="font-medium text-white">{content.phase1.methodology.duration}</p></div>
                  <div><p className="text-slate-400">Sample</p><p className="font-medium text-white">{content.phase1.methodology.sample}</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">Why They Avoided Our Editor</p>
              <ul className="space-y-2 text-lg text-white">
                {content.phase1.keyFindingDetails.slice(0, 2).map((detail, i) => (
                  <li key={i}>• {detail.split('.')[0]}.</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden bg-white/10 p-2">
              <img src={editorComparison} alt="Editor comparison" className="w-full h-auto max-h-[200px] object-contain" />
            </div>
          </div>
        </PresentSlide>
      );

    case 4:
      return (
        <PresentSlide header={content.pivot.header}>
          <div className="space-y-8">
            <div className="rounded-2xl bg-red-500/20 p-6 border border-red-500/30">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">Outcome: Initial Rejection</p>
              <p className="text-xl text-white">{content.pivot.outcome}</p>
            </div>
            <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">The New Core Question</p>
              <p className="text-lg text-slate-400 line-through decoration-2 mb-3">{content.pivot.oldQuestion}</p>
              <p className="text-2xl font-medium text-white">
                How do we make it easier to make <strong className="text-orange-400">good</strong> short-form videos?
              </p>
            </div>
            <div className="text-white">
              <p className="mb-4 text-slate-300">We needed to rigorously answer two questions:</p>
              <ul className="space-y-2 text-lg">
                {content.pivot.additionalQuestions.map((q, i) => (
                  <li key={i}><strong className="text-orange-400">{q.charAt(0)}.</strong>{q.slice(2)}</li>
                ))}
              </ul>
            </div>
          </div>
        </PresentSlide>
      );

    case 5:
      return (
        <PresentSlide header={content.phase2.header}>
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white">What Makes Videos Successful?</h2>
                <p className="text-xl text-slate-300">{content.phase2.objective}</p>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-4 text-sm border border-slate-700">
                <div className="grid grid-cols-2 gap-3">
                  <div><p className="text-slate-400">Method</p><p className="font-medium text-white">{content.phase2.methodology.method}</p></div>
                  <div><p className="text-slate-400">Sample</p><p className="font-medium text-white">{content.phase2.methodology.sample}</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">Three Attributes Strongly Predicted Success</p>
              <div className="grid gap-4 md:grid-cols-3">
                {content.phase2.keyAttributes.map((attr, i) => (
                  <div key={i} className="rounded-xl bg-slate-800/80 p-4 text-center border border-slate-700">
                    <p className="text-2xl font-bold text-orange-400">{i + 1}</p>
                    <p className="mt-2 font-semibold text-white">{attr.name}</p>
                    <p className="text-sm text-slate-400">{attr.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 6:
      return (
        <PresentSlide header={content.phase3.header}>
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white">Which Editor Works Better?</h2>
                <p className="text-xl text-slate-300">200 testers recreated videos using different editing apps.</p>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-4 text-sm border border-slate-700">
                <div className="grid grid-cols-2 gap-3">
                  <div><p className="text-slate-400">Method</p><p className="font-medium text-white">{content.phase3.methodology.method}</p></div>
                  <div><p className="text-slate-400">Sample</p><p className="font-medium text-white">{content.phase3.methodology.sample}</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">Key Finding</p>
              <p className="text-xl font-semibold text-white mb-4">{content.phase3.keyFinding}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                  <p className="font-semibold text-white">Basic Videos</p>
                  <p className="text-slate-300">{content.phase3.keyFindingDetails.basic}</p>
                </div>
                <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                  <p className="font-semibold text-white">Advanced Videos</p>
                  <p className="text-slate-300">{content.phase3.keyFindingDetails.advanced}</p>
                </div>
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 7:
      return (
        <PresentSlide header={content.recommendation.header}>
          <div className="space-y-8">
            <div className="rounded-2xl bg-orange-500/20 p-8 text-center border border-orange-500/30">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">Key Message to Leadership</p>
              <blockquote className="text-3xl font-bold text-white md:text-4xl">{content.recommendation.keyMessage}</blockquote>
              <p className="mt-6 text-xl text-slate-300">{content.recommendation.keyMessageSubtitle}</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">Three Pieces of Evidence</h3>
              <div className="space-y-3">
                {content.recommendation.threeEvidencePoints.map((point, i) => (
                  <div key={i} className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                    <p className="font-semibold text-white">{point.title}</p>
                    <p className="text-slate-300">{point.description}</p>
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
            <div className="rounded-2xl bg-green-500/20 p-6 text-center border border-green-500/30">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-400">Leadership Decision</p>
              <p className="text-2xl font-bold text-white">{content.impact.leadershipDecision}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <div className="rounded-xl overflow-hidden bg-white/10 p-2">
                  <img src={reelsEditorBefore} alt="Before" className="w-full h-auto max-h-[180px] object-contain" />
                </div>
                <p className="text-center font-medium text-white">Before</p>
              </div>
              <div className="space-y-2">
                <div className="rounded-xl overflow-hidden bg-white/10 p-2">
                  <img src={reelsEditorAfter} alt="After" className="w-full h-auto max-h-[180px] object-contain" />
                </div>
                <p className="text-center font-medium text-white">After</p>
              </div>
            </div>
          </div>
        </PresentSlide>
      );

    case 9:
      return (
        <PresentSlide header={content.lessons.header}>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">{content.lessons.title}</h2>
            <div className="space-y-4">
              {content.lessons.lessonsList.map((lesson) => (
                <div key={lesson.number} className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
                  <p className="mb-1 text-sm font-medium text-orange-400">{lesson.number}</p>
                  <p className="text-xl font-semibold text-white">{lesson.title}</p>
                  <p className="mt-2 text-slate-300">{lesson.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">What I'd Do Differently</p>
              <p className="text-lg text-white">{content.lessons.whatIdDoDifferently}</p>
            </div>
          </div>
        </PresentSlide>
      );

    default:
      return null;
  }
}

export default InstagramReelsCaseStudy;
