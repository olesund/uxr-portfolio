/**
 * Instagram Reels Case Study
 *
 * Content comes from: src/data/instagram-reels-content.ts
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, Play, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { sharedContent, readContent, presentContent } from '@/data/instagram-reels-content';
import TesterExperienceModal from '@/components/presentation/TesterExperienceModal';
import ImageLightbox from '@/components/presentation/ImageLightbox';
import { ModeToggle } from '@/components/presentation/ModeToggle';
import { PresentSlide } from '@/components/presentation/PresentSlide';
import { Carousel } from '@/components/presentation/Carousel';

// Assets
import editorComparison from '@/assets/editor-comparison.png';
import easeOfUseChart from '@/assets/ease-of-use-chart.png';
import flywheelDiagram from '@/assets/flywheel-diagram.png';
import reelsEditorBefore from '@/assets/reels-editor-before.png';
import reelsEditorAfter from '@/assets/reels-editor-after.png';
import videoAttributesChart from '@/assets/video-attributes-chart.png';
import regressionChart from '@/assets/instagram-reels-regression-example.png';
import reelsEditorScreenshot from '@/assets/reels-editor-screenshot.webp';
import editsAppScreenshot from '@/assets/edits-app-screenshot.webp';
import basicVideoExample from '@/assets/basic-video-example.mov';
import advancedVideoExample from '@/assets/advanced-video-example.mov';

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
          : isEven ? 'bg-[hsl(210,14%,93%)]' : 'bg-background'
      )}
    >
      {dark && (
        <style>{`
          #slide-${slideNumber} .text-primary { color: hsl(190, 70%, 55%); }
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

// ============================================
// MAIN COMPONENT
// ============================================

const InstagramReelsCaseStudy: React.FC = () => {
  const [mode, setMode] = useState<'read' | 'present'>('read');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
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
      <ModeToggle
        mode={mode}
        onModeChange={setMode}
        onReset={handleReset}
        className="absolute right-6 top-6 md:right-12"
      />
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

  const renderPresentProblem = () => (
    <PresentSlide header={presentContent.problem.header}>
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">{presentContent.problem.businessContextTitle}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{presentContent.problem.businessContext}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-accent/50 p-5">
            <p className="mb-1 text-sm text-muted-foreground">Business Goal</p>
            <p className="text-lg font-semibold text-foreground">{presentContent.problem.businessGoal}</p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-5">
            <p className="mb-1 text-sm text-muted-foreground">Core Question</p>
            <p className="text-lg font-semibold text-foreground">{presentContent.problem.coreQuestion}</p>
          </div>
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
    </PresentSlide>
  );

  const renderPresentOverview = () => (
    <PresentSlide header={presentContent.researchOverview.header}>
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-2xl font-semibold text-foreground">{presentContent.researchOverview.title}</h3>
          <p className="text-muted-foreground text-lg">{presentContent.researchOverview.description}</p>
        </div>
        <Carousel>
          {presentContent.researchOverview.phases.map((phase) => (
            <div key={phase.number} className="rounded-2xl bg-muted/60 p-8">
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-lg font-medium text-primary">Phase {phase.number}</span>
                <span className="text-sm text-muted-foreground">({phase.type})</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h4>
              <p className="text-lg text-muted-foreground">{phase.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </PresentSlide>
  );

  const renderPresentPhase1 = () => (
    <PresentSlide header={presentContent.phase1.header}>
      <Carousel>
        {/* Page 1: Objective, Methodology, Data Collection */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground text-lg">{presentContent.phase1.pages[0].objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(presentContent.phase1.pages[0].methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase())}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Data Collection</h3>
            <p className="text-muted-foreground text-lg">{presentContent.phase1.pages[0].dataCollection}</p>
          </div>
        </div>

        {/* Page 2: Image Only - Video Editor UX Architecture Paradigms */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-foreground text-center">{presentContent.phase1.pages[1].title}</h3>
          <div className="rounded-2xl overflow-hidden bg-background">
            <img src={editorComparison} alt="Step-by-step vs stacked timeline editor" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Page 3: Key Finding & Recommendation */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-xl text-foreground">{presentContent.phase1.pages[2].finding}</p>
            <ul className="space-y-2 text-lg text-foreground">
              {presentContent.phase1.pages[2].details.map((detail, i) => (
                <li key={i}>• {detail}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Recommendation to Leadership</p>
            <p className="text-xl text-foreground">{presentContent.phase1.pages[2].recommendation}</p>
          </div>
        </div>
      </Carousel>
    </PresentSlide>
  );

  const renderPresentPivot = () => (
    <PresentSlide header={presentContent.pivot.header} dark>
      <Carousel dark>
        {/* Page 1: Initial Rejection */}
        <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-6 backdrop-blur-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(195, 65%, 55%)' }}>
            {presentContent.pivot.pages[0].title}
          </p>
          <p className="mb-4 text-xl text-[hsl(40,30%,95%)]">{presentContent.pivot.pages[0].outcome}</p>
          <ul className="space-y-2 text-lg text-[hsl(40,30%,85%)]/80">
            {presentContent.pivot.pages[0].pushbackPoints.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
        </div>

        {/* Page 2: New Core Question */}
        <div className="rounded-2xl bg-[hsl(200,40%,25%)]/30 p-6 backdrop-blur-sm">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(195, 65%, 55%)' }}>
            {presentContent.pivot.pages[1].title}
          </p>
          <p className="text-xl text-[hsl(40,30%,70%)] line-through decoration-2">{presentContent.pivot.pages[1].oldQuestion}</p>
          <p className="text-2xl font-medium text-[hsl(40,30%,95%)] mt-4">
            {presentContent.pivot.pages[1].newQuestionPrefix}
            <strong style={{ color: 'hsl(195, 65%, 55%)' }}>{presentContent.pivot.pages[1].newQuestionHighlight}</strong>
            {presentContent.pivot.pages[1].newQuestionSuffix}
          </p>
          <div className="mt-6 pt-6 border-t border-[hsl(40,30%,95%)]/20">
            <p className="mb-4 text-lg text-[hsl(40,30%,95%)]">{presentContent.pivot.pages[1].followUp}</p>
            <ul className="space-y-2 text-lg text-[hsl(40,30%,95%)]">
              {presentContent.pivot.pages[1].additionalQuestions.map((q, i) => (
                <li key={i}><strong>{q.charAt(0)}</strong>{q.slice(1)}</li>
              ))}
            </ul>
          </div>
        </div>
      </Carousel>
    </PresentSlide>
  );

  const renderPresentPhase2 = () => (
    <PresentSlide header={presentContent.phase2.header}>
      <Carousel>
        {/* Page 1: Objective & Methodology */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground text-lg">{presentContent.phase2.pages[0].objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(presentContent.phase2.pages[0].methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase())}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page 2: Data Collection & Analysis */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Data Collection</h3>
            <p className="text-muted-foreground text-lg mb-4">{presentContent.phase2.pages[1].dataCollection}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
            <p className="text-muted-foreground text-lg mb-4">{presentContent.phase2.pages[1].dataAnalysis}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl overflow-hidden bg-background">
              <img src={videoAttributesChart} alt="Bar chart comparing attributes" className="w-full h-auto object-contain" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-background">
              <img src={regressionChart} alt="Regression results" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Page 3: Key Finding & Outcome */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-xl text-foreground">{presentContent.phase2.pages[2].keyFinding}</p>
            <ul className="space-y-2 text-lg text-foreground">
              {presentContent.phase2.pages[2].keyAttributes.map((attr, i) => (
                <li key={i}><strong>{i + 1}. {attr.name}</strong> — {attr.description}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Outcome</p>
            <p className="text-lg text-foreground">{presentContent.phase2.pages[2].outcome}</p>
          </div>
        </div>
      </Carousel>
    </PresentSlide>
  );

  const renderPresentPhase3 = () => (
    <PresentSlide header={presentContent.phase3.header}>
      <Carousel>
        {/* Page 1: Objective, Methodology & Study Design */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground text-lg">{presentContent.phase3.pages[0].objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(presentContent.phase3.pages[0].methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase())}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Study Design</h3>
            <p className="text-muted-foreground text-lg mb-3">{presentContent.phase3.pages[0].studyDesign}</p>
            <p className="text-muted-foreground"><strong>Independent Variables:</strong> {presentContent.phase3.pages[0].independentVariables}</p>
            <div className="mt-4">
              <Button onClick={() => setIsModalOpen(true)} size="sm" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                See participant experience
              </Button>
            </div>
          </div>
        </div>

        {/* Page 2: Reference Videos */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Reference Videos (that users recreated)</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-3 text-lg font-medium text-foreground">
                <strong>Basic Video:</strong> {presentContent.phase3.pages[1].basic}
              </p>
              <div className="rounded-xl overflow-hidden bg-background">
                <video src={basicVideoExample} controls className="w-full h-auto max-h-[300px] object-contain" preload="metadata" />
              </div>
            </div>
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-3 text-lg font-medium text-foreground">
                <strong>Advanced Video:</strong> {presentContent.phase3.pages[1].advanced}
              </p>
              <div className="rounded-xl overflow-hidden bg-background">
                <video src={advancedVideoExample} controls className="w-full h-auto max-h-[300px] object-contain" preload="metadata" />
              </div>
            </div>
          </div>
        </div>

        {/* Page 3: Key Finding */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-xl text-foreground">{presentContent.phase3.pages[2].finding}</p>
            <ul className="space-y-2 text-lg text-foreground">
              <li><strong>Basic Videos:</strong> {presentContent.phase3.pages[2].details.basic}</li>
              <li><strong>Advanced Videos:</strong> {presentContent.phase3.pages[2].details.advanced}</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden bg-background">
            <img src={easeOfUseChart} alt="Ease-of-use chart" className="w-full h-auto" />
          </div>
        </div>
      </Carousel>
      <TesterExperienceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PresentSlide>
  );

  const renderPresentRecommendation = () => (
    <PresentSlide header={presentContent.recommendation.header}>
      <Carousel>
        {/* Page 1: Key Message */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Message to Leadership</p>
            <blockquote className="mb-4 text-3xl font-semibold text-foreground">{presentContent.recommendation.pages[0].keyMessage}</blockquote>
            <p className="mb-4 text-xl text-foreground">{presentContent.recommendation.pages[0].keyMessageSubtitle}</p>
            <p className="text-lg text-muted-foreground">{presentContent.recommendation.pages[0].keyMessageExplanation}</p>
          </div>
        </div>

        {/* Page 2: Flywheel Effect */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-foreground">{presentContent.recommendation.pages[1].title}</h3>
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <p className="text-lg text-muted-foreground">{presentContent.recommendation.pages[1].flywheelExplanation}</p>
            </div>
            <div className="flex-shrink-0" style={{ width: '640px' }}>
              <div className="rounded-2xl overflow-hidden bg-background">
                <img src={flywheelDiagram} alt="Flywheel diagram" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </PresentSlide>
  );

  const renderPresentImpact = () => (
    <PresentSlide header={presentContent.impact.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Leadership Decision</p>
          <p className="text-2xl font-semibold text-foreground">{presentContent.impact.leadershipDecision}</p>
        </div>

        <Carousel>
          {/* Page 1: Product Outcome */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Product Outcome</h3>
            <p className="text-lg text-muted-foreground">{presentContent.impact.pages[0].shippedEditor}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <button
                  onClick={() => setLightboxImage({ src: reelsEditorBefore, alt: 'Instagram Reels editor before - linear timeline' })}
                  className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity w-full"
                >
                  <img src={reelsEditorBefore} alt="Before" className="w-full h-auto max-h-[300px] object-contain" />
                </button>
                <p className="text-sm font-medium text-foreground">Before</p>
                <p className="text-sm text-muted-foreground">{presentContent.impact.pages[0].beforeAfter.before}</p>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setLightboxImage({ src: reelsEditorAfter, alt: 'Instagram Reels editor after - stacked timeline' })}
                  className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity w-full"
                >
                  <img src={reelsEditorAfter} alt="After" className="w-full h-auto max-h-[300px] object-contain" />
                </button>
                <p className="text-sm font-medium text-foreground">After</p>
                <p className="text-sm text-muted-foreground">{presentContent.impact.pages[0].beforeAfter.after}</p>
              </div>
            </div>
          </div>

          {/* Page 2: PR Campaign */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">PR Campaign</h3>
            <p className="text-lg text-muted-foreground">{presentContent.impact.pages[1].prCampaign}</p>
            <div className="grid gap-4 md:grid-cols-2 items-center">
              <blockquote className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
                <p className="text-muted-foreground italic">{presentContent.impact.pages[1].pressQuote}</p>
                <footer className="mt-3">
                  <a href={presentContent.impact.pages[1].pressUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    — {presentContent.impact.pages[1].pressSource}
                  </a>
                </footer>
              </blockquote>
              <div className="rounded-2xl overflow-hidden">
                <img src={reelsEditorScreenshot} alt="Instagram Reels editor" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Page 3: Edits App */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Instagram 'Edits' App</h3>
            <p className="text-lg text-muted-foreground">{presentContent.impact.pages[2].editsApp}</p>
            <div className="grid gap-4 md:grid-cols-2 items-center">
              <blockquote className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
                <p className="text-muted-foreground italic">{presentContent.impact.pages[2].editsQuote}</p>
                <footer className="mt-3">
                  <a href={presentContent.impact.pages[2].editsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    — Instagram Press Release
                  </a>
                </footer>
              </blockquote>
              <div className="rounded-2xl overflow-hidden">
                <img src={editsAppScreenshot} alt="Instagram Edits app" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </PresentSlide>
  );

  const renderPresentLessons = () => (
    <PresentSlide header={presentContent.lessons.header} dark>
      <div className="space-y-8">
        <h3 className="mb-6 text-2xl font-semibold text-[hsl(40,30%,95%)]">{presentContent.lessons.title}</h3>
        <div className="space-y-4">
          {presentContent.lessons.lessonsList.map((lesson) => (
            <div key={lesson.number} className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-6">
              <p className="mb-1 text-sm font-medium" style={{ color: 'hsl(195, 65%, 55%)' }}>{lesson.number}</p>
              <p className="font-semibold text-xl text-[hsl(40,30%,95%)]">{lesson.title}</p>
              <p className="mt-2 text-lg text-[hsl(40,30%,85%)]/80">{lesson.description}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-[hsl(200,40%,25%)]/30 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(195, 65%, 55%)' }}>What I'd Do Differently</p>
          <p className="text-lg text-[hsl(40,30%,95%)]">{presentContent.lessons.whatIdDoDifferently}</p>
        </div>
      </div>
    </PresentSlide>
  );

  // Present mode rendering function
  const renderPresentMode = () => {
    return (
      <>
        {/* Fixed Mode Toggle for Present Mode */}
        <div className="fixed top-6 right-6 md:right-12 z-50">
          <ModeToggle
            mode={mode}
            onModeChange={setMode}
            onReset={handleReset}
          />
        </div>
        <Link to="/" className="fixed left-6 top-6 z-50 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div key={resetKey} className="snap-y snap-mandatory overflow-y-scroll h-screen">
          {renderPresentTitle()}
          {renderPresentProblem()}
          {renderPresentOverview()}
          {renderPresentPhase1()}
          {renderPresentPivot()}
          {renderPresentPhase2()}
          {renderPresentPhase3()}
          {renderPresentRecommendation()}
          {renderPresentImpact()}
          {renderPresentLessons()}
        </div>
        <ImageLightbox
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          src={lightboxImage?.src || ''}
          alt={lightboxImage?.alt || ''}
        />
      </>
    );
  };

  // Present mode rendering
  if (mode === 'present') {
    return renderPresentMode();
  }

  // Read mode rendering
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
        <ModeToggle
          mode={mode}
          onModeChange={setMode}
          onReset={handleReset}
          className="absolute right-6 top-6 md:right-12"
        />
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {readContent.title.headline}
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

      {/* Slide 1: Problem */}
      <ReadSlide slideNumber={1} header={readContent.problem.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{readContent.problem.businessContextTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{readContent.problem.businessContext}</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-1 text-sm text-muted-foreground">Business Goal</p>
              <p className="text-lg font-semibold text-foreground">{readContent.problem.businessGoal}</p>
            </div>
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-1 text-sm text-muted-foreground">Core Question</p>
              <p className="text-lg font-semibold text-foreground">{readContent.problem.coreQuestion}</p>
            </div>
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

      {/* Slide 2: Research Overview */}
      <ReadSlide slideNumber={2} header={readContent.researchOverview.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{readContent.researchOverview.title}</h3>
            <p className="text-muted-foreground">{readContent.researchOverview.description}</p>
          </div>
          <div className="space-y-4">
            {readContent.researchOverview.phases.map((phase) => (
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
      <ReadSlide slideNumber={3} header={readContent.phase1.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground">{readContent.phase1.objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(readContent.phase1.methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase())}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Data Collection</h3>
            <p className="text-muted-foreground mb-2">{readContent.phase1.dataCollectionIntro}</p>
            <ul className="space-y-2 text-muted-foreground">
              {readContent.phase1.dataCollection.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground">{readContent.phase1.dataCollectionNote}</p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-lg text-foreground">{readContent.phase1.keyFinding}</p>
            <ul className="space-y-2 text-foreground">
              {readContent.phase1.keyFindingDetails.map((detail, i) => (
                <li key={i}>• {detail}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden bg-background">
            <img src={editorComparison} alt="Step-by-step vs stacked timeline editor" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Recommendation to Leadership</p>
            <p className="text-foreground">{readContent.phase1.recommendation}</p>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 4: The Pivot */}
      <ReadSlide slideNumber={4} header={readContent.pivot.header} dark>
        <div className="space-y-10">
          <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-6 backdrop-blur-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(195, 65%, 55%)' }}>Outcome: Initial Rejection</p>
            <p className="mb-4 text-[hsl(40,30%,95%)]">{readContent.pivot.outcome}</p>
            <ul className="space-y-1 text-[hsl(40,30%,85%)]/80">
              {readContent.pivot.pushbackPoints.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[hsl(200,40%,25%)]/30 p-6 backdrop-blur-sm">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(195, 65%, 55%)' }}>The New Core Question</p>
            <p className="text-lg text-[hsl(40,30%,70%)] line-through decoration-2">{readContent.pivot.oldQuestion}</p>
            <p className="text-xl font-medium text-[hsl(40,30%,95%)] mt-4">
              How do we make it easier for users to make{' '}
              <strong style={{ color: 'hsl(195, 65%, 55%)' }}>good</strong>
              {' '}short-form videos on Instagram?
            </p>
            <div className="mt-6 pt-6 border-t border-[hsl(40,30%,95%)]/20">
              <p className="mb-4 text-[hsl(40,30%,95%)]">{readContent.pivot.followUp}</p>
              <ul className="space-y-1 text-[hsl(40,30%,95%)]">
                {readContent.pivot.additionalQuestions.map((q, i) => (
                  <li key={i}><strong>{q.charAt(0)}</strong>{q.slice(1)}</li>
                ))}
              </ul>
            </div>
            {readContent.pivot.constraintNote && (
              <p className="mt-6 pt-6 border-t border-[hsl(40,30%,95%)]/20 text-sm text-[hsl(40,30%,85%)]">{readContent.pivot.constraintNote}</p>
            )}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 5: Phase 2 */}
      <ReadSlide slideNumber={5} header={readContent.phase2.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground">{readContent.phase2.objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(readContent.phase2.methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase())}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Collection with Sidebar */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Data Collection</h3>
              <ul className="space-y-2 text-muted-foreground">
                {readContent.phase2.dataCollection.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {/* View Coding Sheet Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-4 gap-2">
                    <FileText className="h-4 w-4" />
                    View example coding sheet
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>Sample Video Coding Sheet</DialogTitle>
                  </DialogHeader>
                  <div className="w-full h-[70vh]">
                    <iframe
                      src="/documents/Video_Coding_Sheet_Example.pdf"
                      className="w-full h-full rounded-lg border border-border"
                      title="Video Coding Sheet Example"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Sidebar box */}
            <div className="lg:w-72 shrink-0">
              <div className="rounded-2xl bg-muted/60 p-5 border-l-4 border-primary">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Examples of Attributes Coded</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {readContent.phase2.attributeExamples.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                  <li>• Etc.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Analysis */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
            <ul className="space-y-2 text-muted-foreground">
              {readContent.phase2.dataAnalysis.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Charts */}
          <div>
            <div className="grid gap-4 md:grid-cols-2">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity">
                    <img
                      src={videoAttributesChart}
                      alt="Bar chart comparing % of high-quality vs. low-quality videos with each attribute"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-2">
                  <img
                    src={videoAttributesChart}
                    alt="Bar chart comparing % of high-quality vs. low-quality videos with each attribute"
                    className="w-full h-auto object-contain"
                  />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity">
                    <img
                      src={regressionChart}
                      alt="Regression results showing which attributes predict video success"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-2">
                  <img
                    src={regressionChart}
                    alt="Regression results showing which attributes predict video success"
                    className="w-full h-auto object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground italic">Example charts using dummy data.</p>
          </div>

          {/* Key Finding */}
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-lg text-foreground">{readContent.phase2.keyFinding}</p>
            <ul className="space-y-2 text-foreground">
              {readContent.phase2.keyAttributes.map((attr, i) => (
                <li key={i}><strong>{i + 1}. {attr.name}</strong> — {attr.description}</li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Outcome</p>
            <p className="text-foreground">{readContent.phase2.outcomeNote}</p>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 6: Phase 3 */}
      <ReadSlide slideNumber={6} header={readContent.phase3.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
            <p className="text-muted-foreground">{readContent.phase3.objective}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(readContent.phase3.methodology).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase())}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Study Design */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Study Design</h3>
            <p className="mb-4 text-muted-foreground">{readContent.phase3.studyDesign}</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Independent Variables:</strong> {readContent.phase3.independentVariables}</li>
              <li>• <strong>Dependent Variables:</strong> {readContent.phase3.dependentVariables}</li>
              <li>
                • <strong>Apps Tested:</strong>
                <ul className="ml-6 mt-1 space-y-1">
                  <li>— Step-by-step flow: {readContent.phase3.appsTestedStepByStep.join(', ')}</li>
                  <li>— Stacked timeline editors: {readContent.phase3.appsTestedStacked.join(', ')}</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Try the Tester Experience CTA */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-6 text-center">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="gap-2 w-full sm:w-auto text-sm sm:text-base whitespace-normal h-auto py-3"
            >
              <Play className="h-5 w-5 shrink-0" />
              <span>See what this experiment looked like for the participant</span>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              You will be randomly assigned an app to download and a video to re-create (the "basic" or "advanced" example).
            </p>
          </div>

          <TesterExperienceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* Reference Videos (that users recreated) */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Reference videos (that users recreated)</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-muted/60 p-4">
                <p className="mb-3 text-base font-medium text-foreground">
                  <strong>Basic Video:</strong> {readContent.phase3.referenceVideos.basic}
                </p>
                <div className="rounded-xl overflow-hidden bg-background">
                  <video src={basicVideoExample} controls className="w-full h-auto max-h-[200px] object-contain" preload="metadata" />
                </div>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <p className="mb-3 text-base font-medium text-foreground">
                  <strong>Advanced Video:</strong> {readContent.phase3.referenceVideos.advanced}
                </p>
                <div className="rounded-xl overflow-hidden bg-background">
                  <video src={advancedVideoExample} controls className="w-full h-auto max-h-[200px] object-contain" preload="metadata" />
                </div>
              </div>
            </div>
          </div>

          {/* Data Analysis */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
            <p className="mb-4 text-muted-foreground">{readContent.phase3.dataAnalysis}</p>
            <ul className="space-y-2 text-muted-foreground">
              {readContent.phase3.analysisPoints.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Key Finding */}
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
            <p className="mb-4 text-lg text-foreground">{readContent.phase3.keyFinding}</p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Basic Videos:</strong> {readContent.phase3.keyFindingDetails.basic}</li>
              <li><strong>Advanced Videos:</strong> {readContent.phase3.keyFindingDetails.advanced}</li>
            </ul>
          </div>

          {/* Ease-of-Use Chart */}
          <div className="rounded-2xl overflow-hidden bg-background">
            <img src={easeOfUseChart} alt="Interaction plot showing ease-of-use ratings by editor type and video complexity" className="w-full h-auto" />
          </div>
        </div>
      </ReadSlide>

      {/* Slide 7: Recommendation */}
      <ReadSlide slideNumber={7} header={readContent.recommendation.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Message to Leadership</p>
            <blockquote className="mb-4 text-2xl font-semibold text-foreground">{readContent.recommendation.keyMessage}</blockquote>
            <p className="mb-4 text-lg text-foreground">{readContent.recommendation.keyMessageSubtitle}</p>
            <p className="text-muted-foreground">{readContent.recommendation.keyMessageExplanation}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Three Pieces of Evidence</h3>
            <p className="mb-4 text-muted-foreground">The final presentation synthesized findings from all three research phases:</p>
            <div className="space-y-4">
              {readContent.recommendation.threeEvidencePoints.map((point, i) => (
                <div key={i} className="rounded-2xl bg-muted/60 p-5">
                  <p className="font-semibold text-foreground">{point.title}</p>
                  <p className="mt-1 text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{readContent.recommendation.flywheelTitle}</h3>
            <p className="text-muted-foreground">{readContent.recommendation.flywheelExplanation}</p>
          </div>
          <div className="rounded-2xl overflow-hidden bg-background">
            <img src={flywheelDiagram} alt="Flywheel diagram" className="w-full h-auto" />
          </div>
        </div>
      </ReadSlide>

      {/* Slide 8: Impact */}
      <ReadSlide slideNumber={8} header={readContent.impact.header}>
        <div className="space-y-10">
          {/* Leadership Decision */}
          <div className="rounded-2xl bg-accent/50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Leadership Decision</p>
            <p className="text-xl font-semibold text-foreground">{readContent.impact.leadershipDecision}</p>
          </div>

          {/* Product Outcomes */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Product Outcomes</h3>

            <div className="space-y-4">
              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="font-medium text-foreground">Shipped the New Editor</p>
                <p className="mt-1 text-muted-foreground">{readContent.impact.shippedEditor}</p>
              </div>

              {/* Before/After Comparison with Lightbox */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <button
                    onClick={() => setLightboxImage({ src: reelsEditorBefore, alt: 'Instagram Reels editor before - linear timeline' })}
                    className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity w-full"
                  >
                    <img
                      src={reelsEditorBefore}
                      alt="Instagram Reels editor before - linear timeline"
                      className="w-full h-auto max-h-[420px] object-contain"
                    />
                  </button>
                  <p className="text-sm font-medium text-foreground">Before</p>
                  <p className="text-sm text-muted-foreground">{readContent.impact.beforeAfter.before}</p>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setLightboxImage({ src: reelsEditorAfter, alt: 'Instagram Reels editor after - stacked timeline' })}
                    className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity w-full"
                  >
                    <img
                      src={reelsEditorAfter}
                      alt="Instagram Reels editor after - stacked timeline"
                      className="w-full h-auto max-h-[420px] object-contain"
                    />
                  </button>
                  <p className="text-sm font-medium text-foreground">After</p>
                  <p className="text-sm text-muted-foreground">{readContent.impact.beforeAfter.after}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="font-medium text-foreground">PR campaign</p>
                <p className="mt-1 text-muted-foreground">{readContent.impact.prCampaign}</p>
              </div>

              {/* Quote and Screenshot side by side */}
              <div className="grid gap-4 md:grid-cols-2 items-center">
                <blockquote className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
                  <p className="text-muted-foreground italic">{readContent.impact.pressQuote}</p>
                  <footer className="mt-3">
                    <a href={readContent.impact.pressUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      — {readContent.impact.pressSource}
                    </a>
                  </footer>
                </blockquote>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={reelsEditorScreenshot}
                    alt="Instagram Reels stacked timeline editor interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="font-medium text-foreground">Instagram "Edits" App</p>
                <p className="mt-1 text-muted-foreground">{readContent.impact.editsApp}</p>
              </div>

              {/* Edits App Quote and Screenshot side by side */}
              <div className="grid gap-4 md:grid-cols-2 items-center">
                <blockquote className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
                  <p className="text-muted-foreground italic">{readContent.impact.editsQuote}</p>
                  <footer className="mt-3">
                    <a href={readContent.impact.editsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      — Instagram Press Release
                    </a>
                  </footer>
                </blockquote>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={editsAppScreenshot}
                    alt="Instagram Edits app interface showing video editing features"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ImageLightbox
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          src={lightboxImage?.src || ''}
          alt={lightboxImage?.alt || ''}
        />
      </ReadSlide>

      {/* Slide 9: Lessons */}
      <ReadSlide slideNumber={9} header={readContent.lessons.header} dark>
        <div className="space-y-10">
          <h3 className="mb-3 text-xl font-semibold text-[hsl(40,30%,95%)]">{readContent.lessons.title}</h3>
          <div className="space-y-4">
            {readContent.lessons.lessonsList.map((lesson) => (
              <div key={lesson.number} className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-5">
                <p className="mb-1 text-sm font-medium" style={{ color: 'hsl(195, 65%, 55%)' }}>{lesson.number}</p>
                <p className="font-semibold text-[hsl(40,30%,95%)]">{lesson.title}</p>
                <p className="mt-1 text-[hsl(40,30%,85%)]/80">{lesson.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[hsl(200,40%,25%)]/30 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(195, 65%, 55%)' }}>What I'd Do Differently</p>
            <p className="text-[hsl(40,30%,95%)]">{readContent.lessons.whatIdDoDifferently}</p>
          </div>
        </div>
      </ReadSlide>
    </>
  );
};

export default InstagramReelsCaseStudy;
